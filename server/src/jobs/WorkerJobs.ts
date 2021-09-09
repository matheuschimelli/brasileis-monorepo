import Queue from 'bull'
import redisConfig from '../config/redis'

const workerServer = new Queue('WorkerServer', redisConfig.options)
const jobProcessor = new Queue('JobProcessor', redisConfig.options)
const anotherNade = new Queue('AnotherName', redisConfig.options)
const jobResults = new Queue('jobResults', redisConfig.options)

jobResults.process((job) => {
    console.log(job.data)
    console.log("RUNNING DATA DOJ")
})

export default {
    workerServer,
    jobProcessor,
    anotherNade,
    jobResults
}