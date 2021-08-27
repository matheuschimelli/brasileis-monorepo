/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import 'reflect-metadata';
import http from 'http';
import express, { Express, Request, Response, NextFunction } from 'express';
import compression from 'compression';
import errorHandler from 'errorhandler';
import dotenv from 'dotenv';
import helmet from 'helmet';
import signale from 'signale';
import cors from 'cors';
import { buildSchema, NonEmptyArray } from 'type-graphql';

import { ApolloServer } from 'apollo-server-express';

import connectDB from '../database/connection';

dotenv.config({ path: '.env' });

interface Middleware {
  <T>(req: Request & T, res: Response, next: NextFunction): void;
  res?: Response;
}

interface ServerParams {
  port: number;
  host: string;
  postgres?: string;
}
/**
 * Start a new server instance
 */
class Server {
  public port?: number;

  public host?: string;

  public server?: http.Server;

  public app?: Express;

  private postgres?: string;

  constructor(params?: ServerParams) {
    this.port = params?.port || 8080;
    this.host = params?.host || '0.0.0.0';
    this.app = undefined;
    this.server = undefined;
    this.postgres = undefined;
    this.init();
  }

  init() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.app.disable('x-powered-by');
    this.app.set('host', this.host);
    this.app.set('port', this.port);
    this.app.get('/tired', ({ res }: Middleware) => res!.send('Tired?'));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(compression());
    if (process.env.NODE_ENV === 'development') this.app.use(errorHandler());

    this.setupDatabase();
    return this;
  }

  async setupDatabase() {
    if (this.postgres) {
      await connectDB();
    }
  }

  middleware(middleware: Middleware) {
    this.app?.use(middleware);
    return this;
  }

  async graphql({
    resolvers,
    subscription,
    path,
  }: {
    resolvers: [];
    subscription?: boolean;
    path?: string;
  }) {
    const apolloServer = new ApolloServer({
      // debug: false,
      schema: await buildSchema({
        // @ts-ignore
        resolvers,
        validate: true,
      }),
      context: ({ req }) => ({
        req,
      }),
    });
    apolloServer.applyMiddleware({
      app: this.app!,
      path: path || '/graphql',
    });
    // if (subscription) apolloServer.installSubscriptionHandlers(this.server);

    return this;
  }

  async boostrap() {
    this.server?.listen(this.port, () => {
      signale.success('App listening on port 8080');
    });
  }
}

export default new Server();
