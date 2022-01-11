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

## scripts
Signin as postgres user
```shell
$ sudo -i -u postgres
$ psql
$ \c database_name;
```

Drop all tables in a database
```sql
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


```

## fix heroku build if necessary - package.json
 "heroku-postbuild": "npm run migrate",
    "heroku-cleanup": "curl -sf https://gobinaries.com/tj/node-prune | PREFIX=. sh&&./node-prune node_modules"
  