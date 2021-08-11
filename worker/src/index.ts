import express from 'express';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import signale from 'signale';

import BullQueue from './lib/Queue';

const serverAdapter = new ExpressAdapter();

createBullBoard({
  queues: BullQueue.queues.map((queue) => new BullAdapter(queue.bull)),
  serverAdapter,
});

const app = express();

serverAdapter.setBasePath('/admin/queues');
app.use('/admin/queues', serverAdapter.getRouter());

app.listen(8080, () => {
  signale.success('Server listening on port 8080');
});
