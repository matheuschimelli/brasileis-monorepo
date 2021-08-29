export default {
  query: {
    bool: {
      must: {
        multi_match: {
          query: 'DECRETO Nº 20.686/99',
          fields: [
            'title^2',
            'textContent'
          ]

        }
      },
      filter: {
        bool: {
          must: [
            {
              bool: {
                should: [
                  {
                    term: {
                      categories: {
                        value: 'amazonas'
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  _source: [
    'title',
    'updatedAt',
    'slug',
    'url',
    'categories',
    'subCategories'
  ]
}
const other = {
  query: {
    multi_match: {
      query: 'icms',
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
    'subCategories'
  ],
  highlight: {
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
        number_of_fragments: 1,
        order: 'score'
      }
    }
  }
}
const other3 = {
  query: {
    bool: {
      must: [
        {
          multi_match: {
            query: 'são paulo',
            fields: [
              'title^2',
              'textContent'
            ]
          }
        },
        {
          terms: {
            categories: [
              'Legislação'
            ],
            boost: 1.0
          }
        }
      ]
    }
  },
  _source: [
    'title',
    'updatedAt',
    'slug',
    'url',
    'categories',
    'subCategories'
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
              query: 'são paulo'
            }
          }
        },
        should: {
          match_phrase: {
            textContent: {
              query: 'são paulo',
              slop: 1,
              boost: 10
            }
          }
        },
        minimum_should_match: 0
      }
    }
  }
}
