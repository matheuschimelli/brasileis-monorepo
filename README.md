# Brasileis

Deplyment follows this: [StackOverflow: Automated heroku deploy from subfolder](https://stackoverflow.com/questions/39197334/automated-heroku-deploy-from-subfolder)
## Folder structure
```shell
admin - administration panel built with Nuxt.js

client - client UI built with Nuxt.js

server - Node express server

worker - Bull.js job queues 

```
## How to run

```shell
# run admin panel
cd admin
yarn dev

# run client
cd client
yarn dev

# run server
cd server
yarn dev

# run worker
cd worker
yarn dev
yarn dev:queue # run job queues
```

## Elasticsearch  urls
```shell
http://localhost/development/_search - search

```