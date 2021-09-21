import signale from 'signale';
import jobQueues from '../jobs';

export const startProcess = () => {
    signale.success('🐂 Bull running');
    jobQueues.map((job) => {
        job.process();
    });
}
export const queues = jobQueues;

