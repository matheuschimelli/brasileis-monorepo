# Brasileis
## Stack 
- Node.js
    - Typescript
    - TypeORM
    - Express
    - Puppeteer
    - Bulljs
- PostgreSQL
- Redis
- ElasticSearch

## Como atualizar índices do ElasticSearch
Os arquivos de configurações de índices do ElasticSearch estão dentro da pasta `elasticsearch`. 

### Como criar um índice com configurações
[StackOverflow: error when trying to update the settings](https://stackoverflow.com/questions/19758335/error-when-trying-to-update-the-settings)

```
curl --request GET \
  --url http://158.101.96.33/development/ \
  --header 'Authorization: Basic AUTH_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
	"settings": {
		"analysis": {
			"analyzer": {
				"default_brasileis": {
					"type": "standard",
					"stopwords": "_brazilian_"
				},
				"brasileis_default_analyser": {
					"type": "custom",
					"tokenizer": "standard",
					"char_filter": [
						"html_strip"
					],
					"stopwords": "_brazilian_",
					"filter": [
						"lowercase",
						"trim"
					]
				}
			},
			"filter": {
				"my_stemmer": {
					"type": "stemmer",
					"name": "brazilian"
				}
			}
		}
	},
	"mappings": {
		"properties": {
			"lawType": {
				"type": "text"
			},
			"url": {
				"type": "text"
			},
			"title": {
				"type": "text"
			},
			"textContent": {
				"type": "text",
				"analyzer": "brasileis_default_analyser"
			},
			"slug": {
				"type": "text"
			},
			"lawCreationDate": {
				"type": "date"
			},
			"lawCommencementDate": {
				"type": "date"
			},
			"updatedAt": {
				"type": "date"
			}
		}
	}
}'
```

## Api to Graphql
[x] Articles

[x] Category

[x] SubCategory 

[ ] Crawler -> finishing inputs

[ ] Crawler-types 

[ ] User

[ ] Law

[ ] Search

[ ] Federated Units

[ ] Category pages

[ ] Escritorio

[ ] Escritorio/Peticoes

[ ] Escritorio/Clientes

## Missing test to Graphql
[ ] Articles

[ ] Category

[ ] SubCategory 

[ ] Crawler 

[ ] Crawler-types 

[ ] User

[ ] Law

[ ] Search

[ ] Federated Units

[ ] Category pages

[ ] Escritorio

[ ] Escritorio/Peticoes

[ ] Escritorio/Clientes