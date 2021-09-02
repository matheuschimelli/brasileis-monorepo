import Queue from 'bull'
import redisConfig from '../config/redis'



const workerServer = new Queue('WorkerServer', redisConfig.options)
const jobProcessor = new Queue('JobProcessor', redisConfig.options)
const anotherNade = new Queue('AnotherName', redisConfig.options)

export default {
    workerServer,
    jobProcessor,
    anotherNade
}