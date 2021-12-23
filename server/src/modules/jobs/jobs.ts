import { queue } from './job-utils'
import { handler } from '@modules/jobs/test-job/handler'
import { handleJobResults } from '@modules/jobs/handle-job-results/handle-job-results-handler'
import cronJobCheckerHandler from '@modules/jobs/cron-job-checker/handler'

export const WorkerServer = queue('WorkerServer')
export const jobResults = queue('JobResults', handleJobResults)
export const cronJobChecker = queue('CronJobChecker', cronJobCheckerHandler)
export const test = queue('test', handler)

// import { mainServerHandler } from './main-server-job/main-server-handler'
// export const MainServer = queue('MainServer', mainServerHandler)
// MainServer.add({ send: 'to another server' })
// MainServer,

export const runQueues = () => {
    test.add({}, { repeat: { cron: '* * * * *' } })
    cronJobChecker.add({}, { repeat: { cron: '* * * * *' } })
    WorkerServer.add({ data: 'ola mundo' })
}

export const queues = [
    test,
    cronJobChecker,
    WorkerServer,
    jobResults
]

export const runQueue = (name: string) => {
    const foundQueue = queues.find((queue) => queue.name == name)
    if (foundQueue) {
        return foundQueue
    }
}