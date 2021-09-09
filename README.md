# Brasileis
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