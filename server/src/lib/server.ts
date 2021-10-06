/* eslint-disable import/no-named-default */
import 'reflect-metadata'
import http from 'http'
import express, { Express, Request, Response, NextFunction } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import compression from 'compression'
import helmet from 'helmet'
import errorHandler from 'errorhandler'
import cors from 'cors'
import signale from 'signale'

declare var process: {
  env: {
    SESSION_SECRET: string
    HOST: string,
    PORT: number,
    NODE_ENV: string,
    MONGODB_URI: string
  }
}
interface ServerParams {
  port?: number | string;
  host?: string;
  postgresql?: string;
  debugGraphql?: boolean;
  graphqlResolvers?: any[];
  cors?: string[];
}

interface Middleware {
  <T>(req: Request & T, res: Response, next: NextFunction): void;
  res?: Response;
}

class Server {
  port?: number | string;

  host?: string;

  postgresql?: string;

  public app?: Express;

  public server?: http.Server;

  public debugGraphql?: boolean

  private apolloServer?: ApolloServer

  private graphqlResolvers?: any[]

  private cors?: string[]

  constructor(params?: ServerParams) {
    this.host = params?.host || '0.0.0.0.0'
    this.port = params?.port || 8080
    this.postgresql = params?.postgresql || undefined
    this.app = undefined
    this.debugGraphql = params?.debugGraphql || false
    this.apolloServer = undefined
    this.graphqlResolvers = params?.graphqlResolvers || undefined
    this.cors = params?.cors || undefined
    this.init()
  }

  init() {
    this.app = express()
    this.server = http.createServer(this.app)
    this.app.disable('x-powered-by')
    this.app.set('host', this.host)
    this.app.set('port', Number(this.port))
    this.app.get('/tired', ({ res }: Middleware) => res!.send('Tired?'))
    this.app.use(helmet({
      contentSecurityPolicy:
        (process.env.NODE_ENV === 'production')
          ? undefined : false
    }))
    this.app.use(cors())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(compression())
    if (process.env.NODE_ENV === 'development') this.app.use(errorHandler())

    return this
  }

  useMiddleware(middleware: Middleware) {
    this.app?.use(middleware)
    return this
  }

  useMiddleware2(path: string, ...middleware: Array<any>) {
    this.app?.use(path, middleware)
    return this
  }

  useGet(path: string, ...middleware: Array<any>) {
    this.app?.get(path, middleware)
    return this
  }

  useCors() {
    const corsList = this.cors
    const corsOptionsDelegate = function (req: any, callback: any) {
      let corsOptions
      if (corsList?.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true, credentials: true } // reflect (enable) the requested origin in the CORS response
      } else {
        corsOptions = { origin: false, credentials: true } // disable CORS for this request
      }
      callback(null, corsOptions) // callback expects two parameters: error and options
    }
    this.app!.use(cors(corsOptionsDelegate))
    return this
  }

  useRunOnBoostrap(boostrapFunction: () => void) {
    boostrapFunction()
    return this
  }

  async useAsyncRunOnBoostrap(boostrapFunction: () => Promise<void>) {
    await boostrapFunction()
    return this
  }

  async useApolloServer() {
    if (this.graphqlResolvers! && this.graphqlResolvers?.length !== 0) {
      this.apolloServer = new ApolloServer({
        debug: this.debugGraphql || false,
        schema: await buildSchema({
          // @ts-ignore
          resolvers: this.graphqlResolvers,
          validate: true
        }),
        context: ({ req }) => ({
          req
        })
      })
      this.apolloServer.applyMiddleware({
        app: this.app!
      })
      this.apolloServer.installSubscriptionHandlers(this.server!)
    }
  }

  handleErrors() {
    if (process.env.NODE_ENV === 'development') {
      this.app!.use(errorHandler())
    } else {
      // @ts-ignore
      this!.app.use(function (err: Error, _, res: Response) {
        // @TODO fix error handler. Change console to sentry or something else
        console.error(err)
        res.status(500).send('<pre>Server Error: Please try again in a few minutes</pre>')
      })
    }
  }

  async boostrap() {
    if (this.cors && this.cors.length !== 0) this.useCors()
    await this.useApolloServer()
    this.handleErrors()
    this.server?.listen(this.port, () => {
      signale.success(`Server listening on port ${this.port}`)
      signale.success(`GraphQl path: ${this.apolloServer?.graphqlPath}`)
      signale.success(`GraphQl Subscriptions path: ${this.apolloServer?.subscriptionsPath}`)
    })
  }
}

export default Server
