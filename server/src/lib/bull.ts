import Queue from 'bull'
import redisConfig from '@config/redis'
import { NewJobData } from '@modules/jobs/job-types'
import { WorkerServer } from '@modules/jobs/jobs'

export const queue = (name: string, process?: Queue.ProcessCallbackFunction<any>) => {
    const bullQueue = new Queue(name, redisConfig.options)
    if (process) {
        bullQueue.process(process)
    }
    return bullQueue
}

export const processOnWorker = async (data: NewJobData) => await WorkerServer.add({ ...data })
