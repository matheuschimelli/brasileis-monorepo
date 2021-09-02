import { Queue, Worker, QueueEvents } from 'bullmq';
import path from 'path'

const REDIS_HOST = "127.0.0.1"
const REDIS_PORT = 6379

const queue = new Queue('BULLMQ', {
    connection: {
        host: REDIS_HOST,
        port: REDIS_PORT,
    }
});

const ext = path.extname(__filename)
const sandboxFile = path.resolve(__dirname, `sandbox.js`)

const worker = new Worker('BULLMQ', sandboxFile);
const queueEvents = new QueueEvents('BULLMQ');

queueEvents.on('completed', jobId => {
    console.log('done painting');
});

queueEvents.on('failed', (jobId, err) => {
    console.error('error painting', err);
});

async function start() {
    await queue.add('cars', { color: 'blue' });
}
export default {
    start,
    queues: [queue]
}