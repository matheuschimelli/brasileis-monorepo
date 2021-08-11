import Queue from 'bull';
import signale from 'signale';

import redisConfig from '../config/redis';
import * as jobs from '../jobs';

type BullQueue = {
  bull: Queue.Queue<any>;
  name: string;
  handle: any;
  options: any;
  key?: any;
}

const queues: BullQueue[] = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

export default {
  queues,
  add(name: string, data: any) {
    const queue = this.queues.find((q) => q.name === name);

    return queue!.bull.add(data, queue!.options);
  },
  process() {
    signale.success('🐂 Bull running');
    signale.await('Waiting job queues');

    return this.queues.forEach((queue) => {
      if (queue.options.repeat) {
        this.add(queue.name, null);
      }
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, err) => {
        signale.fatal('Job failed', queue.key, job.data);
      });
    });
  },
};
