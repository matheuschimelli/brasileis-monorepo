import { Job } from 'bull';
import Queue from './Queue'

type HandleJob = {
    id?: string;
    name: string;
    data: any;
    runOnQueue?: string;
    sendResultBack: boolean;
    sendResultBackTo?: string;
}

export default {
    key: 'JobProcessoreee',
    sandBoxFile: null,
    options: {
        sandBox: false,
        continuous: false,
    },
    async handle(job: Job) {
        console.log("Slaver -- --- - -- - - - - - -")

        //    Queue.sendToMainServer({ msg: 'ITS WORKING ?? I GUESS YES' })


        return Promise.resolve({ done: true });
    },
};
