import express from 'express';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import signale from 'signale';
import 'dotenv/config';
import basicAuth from 'express-basic-auth'
import { queues as BullQueue } from './jobs';
import { runQueues } from './jobs';
import pingmydyno from 'pingmydyno';

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 8081

if (process.env.NODE_ENV == 'production') {
  console.log("Running on production")
  runQueues()
}

const serverAdapter = new ExpressAdapter();
createBullBoard({
  queues: BullQueue.map((job) => new BullAdapter(job)),
  serverAdapter,
});

const app = express();

serverAdapter.setBasePath('/admin/queues');
app.use('/admin/queues', basicAuth({
  users: { 'painel': 'decontrole' },
  challenge: true,
}), serverAdapter.getRouter())

app.set('host', host)
app.set('port', port)

app.get('/ping', (req, res) => res.send("pong"))

app.listen(port, () => {
  signale.success('Worker Processor Server listening on port 8080');
  pingmydyno('https://blws.herokuapp.com/ping');
  pingmydyno('https://brasileis-dev-main-server.herokuapp.com/ping');
  pingmydyno('https://api.brasileis.com.br/ping');
});
