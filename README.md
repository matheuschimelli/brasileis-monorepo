# Brasileis - Sistema de busca jurisprudencial (TJPR)
![image](https://github.com/matheuschimelli/brasileis-monorepo/assets/10470074/277814e0-9f6a-4e85-b4b2-42b099cbee69)

Sistema de busca desenvolvido para encontrar e atualizar de forma automática jurisprudência dos tribunais brasileiros. Suporta múltiplos crawlers e crawlers customizados.
Deplyment follows this: [StackOverflow: Automated heroku deploy from subfolder](https://stackoverflow.com/questions/39197334/automated-heroku-deploy-from-subfolder)
## Folder structure
```shell
admin - administration panel built with Nuxt.js runs on vercel

client - client UI built with Nuxt.js - runs on vercel

server - Node express server - runs on heroku

worker - Bull.js job queues - runs on heroku



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

## Oracle servers
### How to open ports

```bash
sudo iptables -I INPUT -p tcp --dport 80 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
sudo iptables -I OUTPUT -p tcp --sport 80 -m conntrack --ctstate ESTABLISHED -j ACCEPT

sudo iptables -I INPUT -p tcp --dport 443 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
sudo iptables -I OUTPUT -p tcp --sport 443 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```
