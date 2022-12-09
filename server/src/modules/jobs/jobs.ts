import { queue } from './job-utils'
import handleJobResults from '@modules/jobs/handle-job-results/handle-job-results-handler'
import cronJobCheckerHandler from '@modules/jobs/cron-job-checker/handler'
import removeOldBlocksFromEsHandler from '@modules/jobs/remove-old-jobs-from-elasticsearch/handler'
import removeOldBlocksFromEsHandlerWorker from '@modules/jobs/remove-old-jobs-from-elasticsearch/remove-woker-handler'
import internalCrawlerHandler from '@modules/jobs/auto-es-index-updater/handler'
import internalCrawlerWorkerHandler from '@modules/jobs/auto-es-index-updater/worker-handler'
import reIndexPostgresDataToElasticSearchHandler from '@modules/jobs/reindex-postgres-data-to-elasticsearch/handler'
import reIndexPostgresDataToElasticSearchHandlerWorker from '@modules/jobs/reindex-postgres-data-to-elasticsearch/worker-handler'
import checkIfEsIsRunningHandler from '@modules/jobs/check-if-elasticsearch-is-running/handler'

export const WorkerServer = queue('WorkerServer')
export const jobResults = queue('JobResults', handleJobResults)
export const cronJobChecker = queue('CronJobChecker', cronJobCheckerHandler)
export const removeOldBlocksFromES = queue('removeOldBlocksFromES', removeOldBlocksFromEsHandler)
export const removeOldBlocksFromESWorker = queue('removeOldBlocksFromESWorker', removeOldBlocksFromEsHandlerWorker)
export const autoEsIndexUpdater = queue('autoEsIndexUpdater', internalCrawlerHandler)
export const autoEsIndexUpdaterWorker = queue('autoEsIndexUpdaterWorker', internalCrawlerWorkerHandler)

export const reIndexPostgresDataToElasticSearch = queue('reIndexPostgresDataToElasticSearch', reIndexPostgresDataToElasticSearchHandler)
export const reIndexPostgresDataToElasticSearchWorker = queue('reIndexPostgresDataToElasticSearchWorker', reIndexPostgresDataToElasticSearchHandlerWorker)

export const checkIfESIsRunning = queue('check if elasticsearch is running', checkIfEsIsRunningHandler)

export const clearQueues = queue('clear queue', () => {
    for (const q of queues) {
        q.clean(0, 'delayed');
        q.clean(0, 'wait');
        q.clean(0, 'active');
        q.clean(0, 'completed');
        q.clean(0, 'failed');

        // let multi = q.multi();
        // multi.del(q.toKey('repeat'));
        // multi.exec();
    }
})


export const runQueues = () => {
    cronJobChecker.add({}, { repeat: { cron: '* * * * *' } })
    checkIfESIsRunning.add({}, { repeat: { cron: '* * * * *' } })
    autoEsIndexUpdater.add({}, { repeat: { cron: '0 1 * * *' } })
    reIndexPostgresDataToElasticSearch.add({}, { repeat: { cron: '0 1 * * 0' } })
    clearQueues.add({}, { repeat: { cron: '0 1 * * *' } })
}

export const queues = [
    cronJobChecker,
    WorkerServer,
    jobResults,
    removeOldBlocksFromES,
    removeOldBlocksFromESWorker,
    autoEsIndexUpdater,
    autoEsIndexUpdaterWorker,
    reIndexPostgresDataToElasticSearch,
    reIndexPostgresDataToElasticSearchWorker,
    checkIfESIsRunning,
    clearQueues
]

export const runQueue = (name: string) => {
    const foundQueue = queues.find((queue) => queue.name == name)
    if (foundQueue) {
        return foundQueue
    }
}