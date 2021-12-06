import { Job } from 'bull'
import Queue from './Queue'
export default {
  key: 'MainServer',
  sandBoxFile: null,
  options: {
    sandBox: false,
    continuous: false
  },
  async handle(job: Job) {
    console.log('WORKING FROM main server')
    console.log('Received message', job.data.msg)

    Queue.sendToWorkerServer({ msg: 'ITS WORKING main server?? I GUESS YES' })

    return Promise.resolve({ done: true })
  }
}
