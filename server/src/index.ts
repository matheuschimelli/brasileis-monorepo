import http from 'http';
import express from 'express';
import compression from 'compression';
import errorHandler from 'errorhandler';
import dotenv from 'dotenv';
import helmet from 'helmet';
import signale from 'signale';
import cors from 'cors';
import pingmydyno from 'pingmydyno';

import routes from './routes';

dotenv.config({ path: '.env' });

const app = express();
const server = http.createServer(app);

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
if (process.env.NODE_ENV === 'development') app.use(errorHandler());

app.use(routes);

app.get('/', (req, res) => res.send('working'));

server.listen(8080, () => {
  signale.success('App listening on port 8080');
  pingmydyno('https://api.brasileis.com.br');
});
