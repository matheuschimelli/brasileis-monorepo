import { Job } from 'bull';
import Queue from '../lib/Queue'
export default {
    key: 'WorkerServer',
    sandBoxFile: null,
    options: {
        sandBox: false,
        continuous: false,
    },
    async handle(job: Job) {
        console.log("WORKING FROM DISPLAYERD")
        console.log('Received message', job.data.msg);
        Queue.sendToMainServer({ msg: 'ITS WORKING ?? I GUESS YES' })


        return Promise.resolve({ done: true });
    },
};

// export default function QueueProcessor() {
//     console.log('RUNNIGN DEV QUEUE');
//     const sendQueue = new Queue('MainServer', redisConfig);

//     const receiveQueue = new Queue('WorkerServer', redisConfig);

//     receiveQueue.process((job: Job, done) => {
//       console.log('Received message', job.data.msg);
//       sendQueue.add({ msg: 'sending send' });

//       done();
//     });

//     sendQueue.add({ msg: 'Sending from worker server' });
//   }
