import elasticSearchClient from "@lib/elasticsearch-client"

const esIndex = process.env.NODE_ENV === 'development' ? 'development' : 'brasileis_prod'


export const check = async () => {
    const info = await elasticSearchClient.info()
    return info
}

export const findOneById = async ({ id, type }: { id: string, type: string }) => {
    const doc = await elasticSearchClient.get({
        index: esIndex,
        id,
        type
    })
    if (!doc) return null
    return doc
}

export const findManyByType = async ({ type }: { type: string }) => {
    const doc = await elasticSearchClient.search({
        index: esIndex,
        type
    })
    if (!doc) return null
    return doc
}

export const findAll = async (): Promise<any[] | null> => {
    const docs = await elasticSearchClient.search({
        index: esIndex,
        body: {
            "size": 10000,
            "query": {
                "match_all": {}
            },
            "_source": [
                "_id"
            ]

        }
    })
    const docsResult = docs.body.hits.hits as any[]
    if (!docs.body) return null
    return docsResult
}

export const upsert = async ({ docId, document }: { docId: string, document: any }) => {
    try {
        const doc = await elasticSearchClient.update({
            index: esIndex,
            id: docId,
            body: {
                doc: {
                    type: 'lawBlock',
                    ...document
                },
                doc_as_upsert: true
            }
        })
        return doc
    } catch (error) {
        console.log(error)
        throw new Error(`ElasticSearch: ${error}`)
    }
}

const generateESQuery = (searchTerm: string) => {
    return {
        query: {
            multi_match: {
                query: searchTerm,
                fields: [
                    'title^2',
                    'textContent'
                ]
            }
        },
        _source: [
            'title',
            'updatedAt',
            'slug',
            'url',
            'categories',
            'subCategories',
            'categoriesIds',
            'subCategoriesIds'
        ],
        highlight: {
            order: 'score',
            type: 'fvh',
            pre_tags: [
                '<mark>'
            ],
            post_tags: [
                '</mark>'
            ],
            fragment_size: 300,
            fields: {
                textContent: {
                    number_of_fragments: 3
                }
            },
            highlight_query: {
                bool: {
                    must: {
                        match: {
                            textContent: {
                                query: searchTerm
                            }
                        }
                    },
                    should: {
                        match_phrase: {
                            textContent: {
                                query: searchTerm,
                                slop: 1,
                                boost: 10.0
                            }
                        }
                    },
                    minimum_should_match: 0
                }
            }
        }
    }
}

export const search = async ({ str, from, size }: { str: string, from: number, size: number }) => {
    if (!str) throw new Error("Pesquisa não pode ser em branco")
    try {
        const searchQuery = generateESQuery(str)
        const searchResults = await elasticSearchClient.search({
            index: esIndex,
            from: from,
            size: 15,
            // filter_path: ['hits.hits'],
            body: searchQuery
        });

        return { results: searchResults };

    } catch (error) {
        console.log(error);
        throw new Error('Não foi possível realizar a busca. Tente mais tarde.');
    }
}

export const remove = async ({ documentId }: { documentId: string }) => {
    try {
        const doc = await elasticSearchClient.deleteByQuery({
            index: esIndex,
            body: {
                query: {
                    match: {
                        _id: documentId
                    }
                }

            }
        })
        return doc
    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
}