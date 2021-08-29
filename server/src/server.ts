import dotenv from 'dotenv'
import morgan from 'morgan'
import Server from '../lib/server'
import connectDB from './database/connection'
import routes from './routes'
import jwtAuth from './middlewares/jwtAuth'

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

const server = new Server({
  host: process.env.host,
  port: process.env.port,
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
    .useMiddleware(routes).boostrap()
}).catch((err) => { throw new Error(err) })

// /* eslint-disable import/no-named-default */
// import 'reflect-metadata'
// import express, { Request, Response } from 'express'
// import { ApolloServer } from 'apollo-server-express'
// import { buildSchema } from 'type-graphql'
// import session from 'express-session'
// import bodyParser from 'body-parser'
// import compression from 'compression'
// import logger from 'morgan'
// import helmet from 'helmet'
// import errorHandler from 'errorhandler'
// import dotenv from 'dotenv'
// import cors from 'cors'
// // import { default as connectMongo } from 'connect-mongo'
// // import { UI, setQueues } from 'bull-board'
// import pingmydyno from 'pingmydyno'
// import jwtAuth from './middlewares/jwtAuth'

// import BullQueue from './jobs/Queue'
// import startQueue from './config/queue'
// import routes from './routes'
// import connectDB from './database/connection'
// // import mongoose from 'mongoose'
// import http from 'http'

// import {
//   ArticleResolver,
//   CategoriesResolver,
//   SubCategoriesResolver,
//   CrawlerResolver,
//   LawResolver,
//   CrawlerTypeResolver,
//   UsersResolver,
//   PeticaoResolver
// } from './modules'

// // import startMongoDB from './config/mongo'
// // setQueues(BullQueue.queues.map(queue => queue.bull))
// // const MongoStore = connectMongo(session)

// import { createBullBoard } from '@bull-board/api'
// import { BullAdapter } from '@bull-board/api/bullAdapter'
// import { ExpressAdapter } from '@bull-board/express'

// const serverAdapter = new ExpressAdapter()

// createBullBoard({
//   queues: BullQueue.queues.map(queue => new BullAdapter(queue.bull)),
//   serverAdapter: serverAdapter
// })

// dotenv.config({ path: '.env' })

// const app = express()
// const server = http.createServer(app)

// declare var process : {
//   env: {
//     SESSION_SECRET: string
//     HOST: string,
//     PORT: number,
//     NODE_ENV: string,
//     MONGODB_URI: string
//   }
// }
// console.log(process.env.NODE_ENV)

// async function startServer () {
//   /*
//   mongoose.set('useFindAndModify', false)
//   mongoose.set('useCreateIndex', true)
//   mongoose.set('useNewUrlParser', true)
//   mongoose.set('useUnifiedTopology', true)
//   mongoose.connect(process.env.MONGODB_URI)
//   mongoose.connection.on('error', (err) => {
//     console.error(err)
//     console.log('%s MongoDB connection error. Please make sure MongoDB is running.')
//     // process.exit()
//   })
//   */
//   app.disable('x-powered-by')
//   app.set('host', process.env.HOST || '0.0.0.0')
//   app.set('port', process.env.PORT || 8080)

//   var allowlist = [
//     'https://api.brasileis.com.br',
//     'https://brasileis.com.br',
//     'https://www.brasileis.com.br',
//     'https://brasileis-admin.vercel.app',
//     'http://localhost:3000',
//     'http://localhost:7613'
//   ]
//   var corsOptionsDelegate = function (req:any, callback:any) {
//     var corsOptions
//     if (allowlist.indexOf(req.header('Origin')) !== -1) {
//       corsOptions = { origin: true, credentials: true } // reflect (enable) the requested origin in the CORS response
//     } else {
//       corsOptions = { origin: false, credentials: true } // disable CORS for this request
//     }
//     callback(null, corsOptions) // callback expects two parameters: error and options
//   }

//   app.use(cors(corsOptionsDelegate))
//   // app.options('*', cors())

//   app.use(helmet({
//     contentSecurityPolicy:
//      (process.env.NODE_ENV === 'production')
//        ? undefined : false
//   }))
//   app.use(compression())
//   app.use(logger('dev'))
//   app.use(express.json({ limit: '50mb' }))
//   app.use(express.urlencoded({ limit: '50mb' }))
//   app.use(bodyParser.json({ limit: '100mb' }))
//   app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
//   app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: process.env.SESSION_SECRET!,
//     cookie: { maxAge: 1209600000 } // two weeks in milliseconds

//     /* store: new MongoStore({
//       url: process.env.MONGODB_URI!,
//       autoReconnect: true
//     }) */
//   }))

//   const apolloServer = new ApolloServer({
//     // debug: false,
//     schema: await buildSchema({
//       resolvers: [
//         ArticleResolver,
//         CategoriesResolver,
//         SubCategoriesResolver,
//         CrawlerResolver,
//         LawResolver,
//         CrawlerTypeResolver,
//         UsersResolver,
//         PeticaoResolver
//       ],
//       validate: true
//     }),
//     context: ({ req }) => ({
//       req
//     })
//   })
//   app.use(jwtAuth)

//   apolloServer.applyMiddleware({
//     app
//   })

//   apolloServer.installSubscriptionHandlers(server)

//   // app.use('/adlkfnuyd9485nh3049578gh340589f74h359873hfn4b7h343459814h34635981345f634', UI)

//   serverAdapter.setBasePath('/admin/queues')
//   app.use('/admin/queues', serverAdapter.getRouter())
//   app.use(routes)
//   /**
//  * Error Handler.
//  */
//   if (process.env.NODE_ENV === 'development') {
//   // only use in development
//     app.use(errorHandler())
//   } else {
//     // app.use(function (req: Request, res: Response) {
//     // return res.status(500).send('Server Error')
//     // })
//     // @ts-ignore
//     app.use(function (err:any, req:Request, res:Response, next:any) {
//       console.error(err)
//       res.status(500).send(`<pre>Nós não podemos responder a sua solicitação no momento.
//       Estamos verificando o ocorrido. Tente daqui a pouco.\n
//       We cannot send a response for you request. Please, try again later. We are investing this issue.
//       </pre>`)
//     })
//   }

//   server.listen(app.get('port'), () => {
//     console.log(apolloServer.subscriptionsPath)
//     console.log(apolloServer.graphqlPath)

//     console.log('%s App is running at http://localhost:%d in %s mode', '✓', app.get('port'), app.get('env'))
//     console.log('  Press CTRL-C to stop\n')
//     pingmydyno('https://api.brasileis.com.br')
//   })
// }

// connectDB().then(() => {
//   startServer().then(() => {
//     console.log('Server Started')
//     startQueue()
//   })
// })

// // async function runServer () {
// //   await connectDB()
// //   startServer().then(() => startQueue())
// // }
// // runServer()
