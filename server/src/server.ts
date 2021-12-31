import dotenv from 'dotenv'
import 'module-alias/register'
import morgan from 'morgan'
import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter'
import { ExpressAdapter } from '@bull-board/express'
import basicAuth from 'express-basic-auth'
import Server from '@lib/server'
import routes from './routes'
import { jwtAuth } from '@middlewares/jwt-auth'
import { runQueues, queues } from '@modules/jobs/jobs'

import { initTelegramBot, sendAlertToTelegram } from '@modules/server-notifier/server-notifier-service'
sendAlertToTelegram(`
🛑Erro em: handle-code-lawBlock🛑
    Erro: 
    `);

initTelegramBot()
runQueues()

const serverAdapter = new ExpressAdapter()
dotenv.config({ path: '.env' })

createBullBoard({
  queues: queues.map(queue => new BullAdapter(queue)),
  serverAdapter: serverAdapter
})
serverAdapter.setBasePath('/admin/queues')

const server = new Server({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 8080,
  debugGraphql: true,
  postgresql: process.env.POSTGRESQL_URL,
  graphqlResolvers: [],
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

console.log('database running')
server.useMiddleware(
  morgan(':method :url :req[header] :status - :response-time ms')
)
  //@ts-ignore
  .useMiddleware(jwtAuth)
  .useMiddleware2('/admin/queues', basicAuth({
    users: { 'painel': 'decontrole' },
    challenge: true,
  }), serverAdapter.getRouter())
  .useMiddleware(routes).boostrap()
