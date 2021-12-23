import Queue from 'bull'
import redisConfig from '../config/redis'
import { queues } from '../jobs'

export const queue = (name: string, process?: any) => {
    const bullQueue = new Queue(name, redisConfig.options)
    if (process) {
        bullQueue.process(process)
    }
    return bullQueue
}

export const runQueue = async (queueName: string, data: any) => {
    const foundQueue = queues.find(queue => queue.name === queueName)
    if (foundQueue) return await foundQueue.add({ ...data })

    throw new Error(`Queue with name ${queueName} was not found.`)
}

