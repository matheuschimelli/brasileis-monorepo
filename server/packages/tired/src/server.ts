/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
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

dotenv.config({ path: '.env' });

interface Middleware {
  <T>(req: Request & T, res: Response, next: NextFunction): void;
  res?: Response;
}
/**
 * Start a new server instance
 */
class Server {
  public port: number;

  public server?: http.Server;

  public app?: Express;

  constructor(port: number = 8080) {
    this.port = port;
    this.app = undefined;
    this.server = undefined;
    this.init();
  }

  init() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.app.get('/tired', ({ res }: Middleware) => res.send('Tired?'));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(compression());
    if (process.env.NODE_ENV === 'development') this.app.use(errorHandler());
    return this;
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

  // async run() {
  //   try {
  //     await this.init().boostrap();
  //   } catch (error) {
  //     signale.error(error);
  //   }
  // }
}

export default new Server();

// import http from 'http';
// import express from 'express';
// import compression from 'compression';
// import errorHandler from 'errorhandler';
// import dotenv from 'dotenv';
// import helmet from 'helmet';
// import signale from 'signale';
// import cors from 'cors';
// import pingmydyno from 'pingmydyno';

// import routes from './routes';

// dotenv.config({ path: '.env' });

// const app = express();
// const server = http.createServer(app);

// app.use(helmet());
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(compression());
// app.use(routes);

// if (process.env.NODE_ENV === 'development') app.use(errorHandler());

// async function bootstrap() {
//   try {
//     server.listen(8080, () => {
//       signale.success('App listening on port 8080');
//       pingmydyno('https://api.brasileis.com.br');
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
// bootstrap();
