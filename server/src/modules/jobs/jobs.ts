import { queue } from './job-utils'
import handleJobResults from '@modules/jobs/handle-job-results/handle-job-results-handler'
import cronJobCheckerHandler from '@modules/jobs/cron-job-checker/handler'
import removeOldBlocksFromEsHandler from '@modules/jobs/remove-old-jobs-from-elasticsearch/handler'
import removeOldBlocksFromEsHandlerWorker from '@modules/jobs/remove-old-jobs-from-elasticsearch/remove-woker-handler'
import internalCrawlerHandler from '@modules/jobs/auto-es-index-updater/handler'
import internalCrawlerWorkerHandler from '@modules/jobs/auto-es-index-updater/worker-handler'

export const WorkerServer = queue('WorkerServer')
export const jobResults = queue('JobResults', handleJobResults)
export const cronJobChecker = queue('CronJobChecker', cronJobCheckerHandler)
export const removeOldBlocksFromES = queue('removeOldBlocksFromES', removeOldBlocksFromEsHandler)
export const removeOldBlocksFromESWorker = queue('removeOldBlocksFromESWorker', removeOldBlocksFromEsHandlerWorker)
export const autoEsIndexUpdater = queue('autoEsIndexUpdater', internalCrawlerHandler)
export const autoEsIndexUpdaterWorker = queue('autoEsIndexUpdaterWorker', internalCrawlerWorkerHandler)

export const runQueues = () => {
    cronJobChecker.add({}, { repeat: { cron: '* * * * *' } })
    autoEsIndexUpdater.add({}, { repeat: { cron: '*/59 * * * *' } })
}

export const queues = [
    cronJobChecker,
    WorkerServer,
    jobResults,
    removeOldBlocksFromES,
    removeOldBlocksFromESWorker,
    autoEsIndexUpdater,
    autoEsIndexUpdaterWorker
]

export const runQueue = (name: string) => {
    const foundQueue = queues.find((queue) => queue.name == name)
    if (foundQueue) {
        return foundQueue
    }
}