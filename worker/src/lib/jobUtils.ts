import path from 'path'
import Queue, { Job } from 'bull';
import signale from 'signale';
import redisConfig from '../config/redis';

export function sandboxFile(dirname: string, fileName: string) {
    const ext = path.extname(__filename)
    const file = path.resolve(dirname, `${fileName}${ext}`)
    return file
}

export function createJob(name: string) {
    const queue = new Queue(name, redisConfig)
    return queue
}



// export default class JobBase {

//     name = "DefaultName"

//     queue: any;

//     constructor() {
//         this.queue = new Queue(this.name)
//     }

//     static get jobName() {
//         return this.name
//     }
//     static get getQueue() {
//         return this.

//     }

//     getSandboxFile(dirname: string, fileName: string) {
//         const ext = path.extname(__filename)
//         const file = path.resolve(dirname, `${fileName}${ext}`)
//         return file
//     }
// }

// const a = class MyJob extends Job {
//     name = "Novo mome"

//     constructor() {
//         super()
//     }

//     process() {
//         console.log("working")
//         this.name
//     }
// }


// class WorkerServerJob {
//     name = "WorkerServerJob"
//     process() {
//         console.log("processing")
//     }
// }