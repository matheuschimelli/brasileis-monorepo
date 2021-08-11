import { Job } from 'bull';
import signale from 'signale';

export default {
  key: 'ErrorJob',
  options: {
    repeat: { cron: '* * * * *' },
  },
  async handle({ data }:Job) {
    signale.debug('Processing async job queue');
    try {
      throw new Error('job error');
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
