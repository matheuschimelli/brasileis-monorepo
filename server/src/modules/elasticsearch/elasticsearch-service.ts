import elasticSearchClient from "@lib/elasticsearch-client"
import { ESDocument } from "@modules/types"

const esIndex = process.env.NODE_ENV !== 'production' ? 'development' : 'brasileis_prod'
//const esIndex = 'brasileis_prod'

console.log("INDEX", esIndex)

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


export const upsert = async ({ docId, document }: { docId: string, document: ESDocument }) => {
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

const generateESQueryWithFilter = (searchTerm: string, filters: any[]) => {

    const baseSearch = {
        query: {
            multi_match: {
                query: searchTerm,
                fields: ['originalText', 'title']
            }
        },
        _source: [
            "title",
            "updatedAt",
            "slug",
            "originalText",
            "source",
            "type",
            "identifier",
            "blockType",
            "tribunal",
            "comarca",
            "estado"
        ],
        highlight: {
            order: 'score',
            type: 'fvh',
            pre_tags: ['<mark>'],
            post_tags: ['</mark>'],
            fragment_size: 300,
            fields: {
                originalText: {
                    number_of_fragments: 1
                }
            },
            highlight_query: {
                bool: {
                    must: {
                        match: {
                            originalText: {
                                query: searchTerm
                            }
                        }
                    },
                    should: {
                        match_phrase: {
                            originalText: {
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

    var customSearch = {
        "query": {
            "bool": {
                "filter": [
                    {
                        "bool": {
                            "should": [

                            ]
                        }
                    }
                ],
                "must": {
                    "multi_match": {
                        "query": searchTerm,
                        "fields": ["originalText", "title"]
                    }
                }
            }
        },
        "_source": [
            "title",
            "updatedAt",
            "slug",
            "originalText",
            "source",
            "identifier",
            "blockType",
            "tribunal",
            "comarca",
            "estado"
        ],
        "highlight": {
            "order": "score",
            "type": "fvh",
            "pre_tags": ["<mark>"],
            "post_tags": ["</mark>"],
            "fragment_size": 300,
            "fields": {
                "originalText": {
                    "number_of_fragments": 1
                }
            },
            "highlight_query": {
                "bool": {
                    "must": {
                        "match": {
                            "originalText": {
                                "query": ""
                            }
                        }
                    },
                    "should": {
                        "match_phrase": {
                            "originalText": {
                                "query": searchTerm,
                                "slop": 1,
                                "boost": 10
                            }
                        }
                    },
                    "minimum_should_match": 0
                }
            }
        }
    }

    const generateCustomSearch = () => {
        const blockTypeFilterGenrated = filters.map((option) => {
            return {
                term: {
                    [option.field]: option.value
                }
            }
        }
        )
        //@ts-ignore
        customSearch.query.bool.filter[0].bool.should = blockTypeFilterGenrated
        //["bool"]["filter"]["bool"]["should"] 
        return customSearch
    }

    if (filters && filters.length !== 0) {
        return generateCustomSearch()
    }

    return baseSearch
}


export const search = async ({
    searchQuery,
    page,
    filters
}: {
    searchQuery: string,
    page: number,
    filters?: any
}) => {
    if (!searchQuery) throw new Error("Pesquisa não pode ser em branco")

    try {

        const queryDsl = generateESQueryWithFilter(searchQuery, filters)
        console.log("DSL", JSON.stringify(queryDsl))

        const skipItems = Number(page) ? (Number(page) - 1) * 10 : 0;

        const searchResults = await elasticSearchClient.search({
            index: esIndex,
            from: skipItems,
            size: 10,
            // filter_path: ['hits.hits'],
            body: queryDsl
        });

        //@ts-ignore
        const filteredResults = searchResults.body.hits.hits.map(({ _index, _type, _score, ...keepAttrs }) => keepAttrs)

        return { results: filteredResults, total: searchResults.body.hits.total };

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

