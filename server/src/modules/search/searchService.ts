import { Client } from '@elastic/elasticsearch'
import { Category } from '../../models/Category'
import { SubCategory } from '../../models/SubCategory'

const ELASTICSEARCH_HOST = "http://158.101.96.33"
const ELASTICSEARCH_API_ID = "giXPQ3YBCRrp2Vczyoar"
const ELASTICSEARCH_API_KEY = "if3EJqjhT22NNyictEqP5A"

const client = new Client({
  node: ELASTICSEARCH_HOST!,
  auth: {
    apiKey: {
      id: ELASTICSEARCH_API_ID!,
      api_key: ELASTICSEARCH_API_KEY!
    }
  }
})

export interface SearchParams {
  term?: string;
  index: string,
  categories?: any;
  subCategories?: any;

}

export interface SearchDocument {
  docId: string;
  docType: string;
  lawId?: number;
  url?: string;
  title?: string;
  textContent?: string;
  slug?: string;
  categories?: string[] | Category[];
  subCategories?: string[] | SubCategory[];
  categoriesIds?: string[] | number[];
  subCategoriesIds?: string[] | number[];
  lawCreationDate?: Date;
  lawCommencementDate?: Date;
  updatedAt?: Date;
}

export interface AddDocParams {
  indexName: string;
  document: SearchDocument
}

export interface RemoveDocParams {
  index: string;
  documentId: number
}

export interface PaginationOptions {
  from: number;
  size?: number;
}

export class SearchService {
  static async findOneById(id: string, index: string, type: string) {
    const esIndex = process.env.NODE_ENV === 'development' ? 'development' : index
    const doc = await client.get({ index: esIndex, id, type })
    if (doc) {
      return doc.body
    } else {
      return null
    }
  }
  static async getAllDocs(index: string, type: string): Promise<any[] | null> {
    const esIndex = process.env.NODE_ENV === 'development' ? 'development' : index
    const docs = await client.search({
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
    if (docs.body) {
      return docsResult
    } else {
      return null
    }
  }
  async search(searchParams: SearchParams, paginationOption: PaginationOptions) {
    try {
      const esIndex = process.env.NODE_ENV === 'development' ? 'development' : searchParams.index
      let categories;
      let subCategories;

      if (searchParams.categories) {
        // @ts-ignore
        categories = searchParams.categories.split(',');
      }
      if (searchParams.subCategories) {
        // @ts-ignore
        subCategories = searchParams.subCategories.split(',');
      }
      if (searchParams.term) {

        const searchQuery = this.generateESQuery(searchParams.term, categories, subCategories)

        console.log(JSON.stringify(searchQuery))

        const searchResults = await client.search({
          index: esIndex,
          from: paginationOption.from,
          size: 15,
          // filter_path: ['hits.hits'],
          body: searchQuery
        });

        return { results: searchResults };
      }
    } catch (error) {
      console.log(error);
      throw new Error(`ElasticSearch: ${error}`);
    }
  }

  async upsert(addDocParams: AddDocParams) {
    try {
      const esIndex = process.env.NODE_ENV === 'development' ? 'development' : addDocParams.indexName

      const doc = await client.update({
        index: esIndex,
        id: addDocParams.document.docId,
        body: {
          doc: {
            ...addDocParams.document
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

  static async remove(removeDocParams: RemoveDocParams) {
    const esIndex = process.env.NODE_ENV === 'development' ? 'development' : removeDocParams.index

    try {
      const doc = await client.deleteByQuery({
        index: esIndex,
        body: {
          query: {
            match: {
              _id: removeDocParams.documentId
            }
          }

        }
      })
      console.log(doc)
    } catch (error: any) {
      console.log(error)
      throw new Error(error)
    }
  }

  generateESQuery(searchTerm: string, categories: string[], subCategories: string[]) {
    if (categories && subCategories) {
      return {
        query: {
          bool: {
            must: [
              {
                multi_match: {
                  query: searchTerm,
                  fields: [
                    'title^2',
                    'textContent'
                  ]
                }
              },
              {
                terms: {
                  categories: categories,
                  boost: 1.0
                }
              },
              {
                terms: {
                  subCategories: subCategories,
                  boost: 1.0
                }
              }
            ]
          }
        },
        _source: ['title', 'updatedAt', 'slug', 'url', 'categories', 'subCategories'],
        highlight: {
          order: 'score',
          type: 'fvh',
          pre_tags: [
            '<mark>'
          ],
          post_tags: [
            '</mark>'
          ],
          fragment_size: 150,
          fields: {
            textContent: {
              number_of_fragments: 1
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
    if (categories) {
      const matchSelectedCategories = categories.map((category) => {
        return {
          term: {
            categories: {
              value: category
            }
          }
        }
      }
      )
      return {
        query: {
          bool: {
            must: [
              {
                multi_match: {
                  query: searchTerm,
                  fields: [
                    'title^2',
                    'textContent'
                  ]
                }
              },
              {
                terms: {
                  categories: categories,
                  boost: 1.0
                }
              }
            ]
          }
        },
        _source: ['title', 'updatedAt', 'slug', 'url', 'categories', 'subCategories'],
        highlight: {
          order: 'score',
          type: 'fvh',
          pre_tags: [
            '<mark>'
          ],
          post_tags: [
            '</mark>'
          ],
          fragment_size: 150,
          fields: {
            textContent: {
              number_of_fragments: 1
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
    if (subCategories) {
      const matchSelectedSubCategories = subCategories.map((subCategory) => {
        return {
          term: {
            subCategories: {
              value: subCategory
            }
          }
        }
      }
      )
      return {
        query: {
          bool: {
            must: [
              {
                multi_match: {
                  query: searchTerm,
                  fields: [
                    'title^2',
                    'textContent'
                  ]
                }
              },
              {
                terms: {
                  subCategories: subCategories,
                  boost: 1.0
                }
              }
            ]
          }
        },
        _source: ['title', 'updatedAt', 'slug', 'url', 'categories', 'subCategories'],
        highlight: {
          order: 'score',
          type: 'fvh',
          pre_tags: [
            '<mark>'
          ],
          post_tags: [
            '</mark>'
          ],
          fragment_size: 150,
          fields: {
            textContent: {
              number_of_fragments: 1
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
}