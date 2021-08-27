import { server } from '../lib/src';
import routes from './routes';

server.middleware(routes).boostrap();
