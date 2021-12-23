import Queue from 'bull'
import redisConfig from '@config/redis'

export const queue = (name: string, process?: Queue.ProcessCallbackFunction<any>) => {
    const bullQueue = new Queue(name, redisConfig.options)
    if (process) {
        bullQueue.process(process)
    }
    return bullQueue
}
