import dotenv from 'dotenv'
import morgan from 'morgan'
import Server from './lib/server'
import connectDB from './database/connection'
import routes from './routes'
import jwtAuth from './middlewares/jwtAuth'
import Queue from './jobs/Queue'
import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter'
import { ExpressAdapter } from '@bull-board/express'

import basicAuth from 'express-basic-auth'

const serverAdapter = new ExpressAdapter()

import {
  ArticleResolver,
  CategoriesResolver,
  SubCategoriesResolver,
  CrawlerResolver,
  LawResolver,
  CrawlerTypeResolver,
  UsersResolver,
  PeticaoResolver
} from './modules'

dotenv.config({ path: '.env' })

Queue.process()
// Queue.WorkerJobs.workerServer.add({ msg: `DATA SENT FROM MAIN SERVER ${Date.now()}` })
// Queue.WorkerJobs.jobProcessor.add({ data: 'custom data job add processor, process on slaver' })

createBullBoard({
  queues: Queue.queues.map(queue => new BullAdapter(queue.bull))
    .concat(Queue.jobQueues.map(queue => new BullAdapter(queue))),
  serverAdapter: serverAdapter
})
serverAdapter.setBasePath('/admin/queues')

const server = new Server({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 8080,
  debugGraphql: true,
  postgresql: process.env.POSTGRESQL_URL,
  graphqlResolvers: [
    ArticleResolver,
    CategoriesResolver,
    SubCategoriesResolver,
    CrawlerResolver,
    LawResolver,
    CrawlerTypeResolver,
    UsersResolver,
    PeticaoResolver
  ],
  cors: [
    'https://api.brasileis.com.br',
    'https://brasileis.com.br',
    'https://www.brasileis.com.br',
    'https://brasileis-admin.vercel.app',
    'http://localhost:3000',
    'http://localhost:8080',
    'http://localhost:7613'
  ]
})
connectDB().then(() => {
  console.log('database running')
  server.useMiddleware(
    morgan(':method :url :req[header] :status - :response-time ms')
  )
    .useMiddleware(jwtAuth)

    .useMiddleware2('/admin/queues', basicAuth({
      users: { 'painel': 'decontrole' },
      challenge: true,
    }), serverAdapter.getRouter())
    .useMiddleware(routes).boostrap()
}).catch((err) => { throw new Error(err) })
