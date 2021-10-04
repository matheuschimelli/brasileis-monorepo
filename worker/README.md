# Como adicionar um novo crawler

Os crawlers estão dentro da pasta `jobs/crawlers`. Como criar um novo crawler:

1. Dentro da pasta `jobs/crawlers` crie uma nova pasta com o nome do crawler
2. Crie dois arquivos: `index.ts` e `sandbox.ts`
3. Copie o `index.ts` de outro crawler e adpate ao novo e etc. Faça o mesmo com o `sandbox.ts`
4. Faça o import e o export do crawler para o arquivo `jobs/index.ts`
5. Dentro da do arquivo `jobs/WorkerServer/index.ts` faça o import do crawler e crie um novo case abaixo. ex:
```javascript
  case "CrawlerTest":
    crawlerTest.queue.add({ ...job.data.jobData })
  break;
                    
```

```json
  "scripts": {
    "dev": "ts-node-dev --respawn --ignore-watch node_modules --transpile-only ./src",
    "dev:admin": "ts-node-dev --respawn --ignore-watch node_modules --transpile-only ./src",
    "dev:queue": "nodemon",
    "start": "node dist/index.js",
    "start:queue": "node dist/queue.js",
    "build": "tsc -p ."
  },
  ```

## TODO

[ ] mover lógica dos crawlers para uma pasta separada invés de deixar dentro da pasta `jobs`
