import Queue, { Job } from 'bull';
import signale from 'signale';
import jobQueues from '../jobs';

export const startProcess = () => {
    jobQueues.map(job => job.process())
}
export const queues = jobQueues

// import redisConfig from '../config/redis';
// import * as jobs from '../jobs';
// import path from 'path'
// const ext = path.extname(__filename)
// const sandboxFile = path.resolve(__dirname, `sandbox.js`)
// const sandboxTypescript = path.resolve(__dirname, `sandboxtypescript${ext}`)

// import { sandboxFile } from './jobUtils';

// const list = Object.values(jobs).map((queue)=> queue)
// const sandboxQueue = new Queue("WorkerServer", redisConfig)

// function startProcess() {
//     signale.success('🐂 Bull running');
//     console.log(sandboxFile)

//     sandboxQueue.process(5, sandboxFile("sandboxtypescript"))
// }
// sandboxQueue.add({ testing: "testing data" })

// sandboxQueue.on('failed', (job, err) => {
//     console.log('Job failed', job.data)
//     console.log(err)
// })

// sandboxQueue.on('completed', (job, result) => {
//     console.log('Job Completed')
//     console.log(result)
// })

// sandboxQueue.on('global:completed', function (job, result) {
//     console.log(`Job ${job} completed! Result: ${result}`)
// })


// const queues = Object.values(jobs).map(job => ({
//     bull: new Queue(job.key, redisConfig),
//     name: job.key,
//     // @ts-ignore
//     handle: job.handle,
//     options: job.options,
//     sandboxFile: job.sandboxFile
// }))


// export default {
//     queues,

//     add(name: any, data: any) {
//         const queue = this.queues.find(queue => queue.name === name)
//         if (queue) {
//             return queue.bull.add(data, queue.options)
//         }
//     },

//     async sendToMainServer(data: any) {
//         const mainServer = new Queue('MainServer')
//         await mainServer.add(data)
//     },


//     async cleanAll() {
//         try {
//             // if (process.env.NODE_ENV === 'development') {
//             for (const queue of this.queues) {
//                 await queue.bull.pause()

//                 if (queue.options) {
//                     // @ts-ignore
//                     if (queue.options.repeat) {
//                         // @ts-ignore

//                         await queue.bull.removeRepeatable(queue.options.repeat)
//                     }
//                 }
//                 await queue.bull.clean(0, 'active')
//                 await queue.bull.clean(0, 'wait')
//                 await queue.bull.clean(0, 'delayed')
//                 await queue.bull.clean(0, 'failed')
//                 await queue.bull.clean(0, 'completed')
//                 await queue.bull.empty()
//                 queue.bull.removeAllListeners()
//                 const multi = queue.bull.multi()
//                 multi.del(queue.bull.toKey('repeat'))
//                 await multi.exec()

//                 console.log(`${queue.name} was cleaned`)
//             }
//             // }
//         } catch (err) {
//             console.log(err)
//             throw new Error(err)
//         }
//     },

//     process() {
//         signale.success('🐂 Bull running');
//         signale.await('Waiting job queues');

//         return this.queues.forEach(async (queue) => {

//             if (queue.sandboxFile) {
//                 // @ts-ignore
//                 await queue.bull.process(2, queue.sandboxFile)
//             } else {
//                 await queue.bull.process(5, queue.handle)
//             }

//             queue.bull.on('failed', (job, err) => {
//                 console.log('Job failed', queue.name, job.data)
//                 console.log(err)
//             })

//             queue.bull.on('completed', (job, result) => {
//                 console.log('Job Completed', queue.name)
//                 console.log(result)
//             })

//             queue.bull.on('global:completed', function (job, result) {
//                 console.log(`Job ${job} completed! Result: ${result}`)
//             })
//         });
//     },
// };
