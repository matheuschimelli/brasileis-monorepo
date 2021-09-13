import Queue from 'bull'
import redisConfig from '../config/redis'
import LawService from '../modules/laws/lawService'

const workerServer = new Queue('WorkerServer', redisConfig.options)
const jobProcessor = new Queue('JobProcessor', redisConfig.options)
const anotherNade = new Queue('AnotherName', redisConfig.options)
const jobResults = new Queue('jobResults', redisConfig.options)

/**
 * 1. identificar qual crawler esta retornando dados
 * 2. chamar service do crawler que retornou dados
 * 3. salvar os dados (os dados devem ser salvos pelo service)
 */
jobResults.process(async (job) => {
    const jobQueue = job.data.queue
    const jobData = job.data.jobData
    const jobResult = job.data.result

    console.log('jobqueue', jobQueue)
    console.log('jobdata', jobData)
    console.log("data saved")
    // await LawService.createOrUpdateByUrl(jobData.url, job.data)
})

export default {
    workerServer,
    jobProcessor,
    anotherNade,
    jobResults
}