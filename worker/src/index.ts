import express from 'express';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import signale from 'signale';
import { queues as BullQueue } from './lib/Queue';
import { startProcess } from './lib/Queue';
import 'dotenv/config';
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 8080
//if (process.env.NODE_ENV == 'production') {

startProcess()
//}

//import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
//import BullMQ from './bullmq';
//BullMQ.queues.map((queue) => new BullMQAdapter(queue)),

const serverAdapter = new ExpressAdapter();
createBullBoard({
  queues: BullQueue.map((job) => new BullAdapter(job.queue)),
  serverAdapter,
});

const app = express();

serverAdapter.setBasePath('/admin/queues');
app.use('/admin/queues', serverAdapter.getRouter());

app.set('host', host)
app.set('port', port)

app.listen(port, () => {
  signale.success('Server listening on port 8080');
});
