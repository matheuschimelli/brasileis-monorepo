import { Job } from 'bull';
import Queue from '../../../lib/Queue'

import path from 'path'
const ext = path.extname(__filename)
const sandboxFile = path.resolve(__dirname, `sandbox${ext}`)

type HandleJob = {
    id?: string;
    name: string;
    data: any;
    runOnQueue?: string;
    sendResultBack: boolean;
    sendResultBackTo?: string;
}

export default {
    key: 'AnotherName',
    sandboxFile: sandboxFile,
    options: {
        sandBox: true,
        continuous: false,
    },
    // async handle(job: Job) {
    //     console.log("Handling job from Main Server")
    //     console.log('Received message', job.data.msg);
    //     Queue.sendToMainServer({ msg: 'ITS WORKING ?? I GUESS YES' })


    //     return Promise.resolve({ done: true });
    // },
};
