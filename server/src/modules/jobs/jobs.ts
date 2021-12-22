import { queue } from '@lib/bullQueue'
import { handler } from '@modules/jobs/test-job/handler'
import { handler as crawlerJobCheckHandler } from '@modules/jobs/check-crawler-job/handler'
import { mainServerHandler } from './main-server-job/main-server-handler'
import { handleJobResults } from '@modules/jobs/handle-job-results/handle-job-results-handler'

// Send events to processing server
export const WorkerServer = queue('WorkerServer')
export const jobResults = queue('jobResults', handleJobResults)


// Listen to events coming from the WorkerServer
export const MainServer = queue('MainServer', mainServerHandler)
export const test = queue('test', handler)
export const crawlerJobCheck = queue('crawlerJobCheck', crawlerJobCheckHandler)

export const runQueues = () => {
    test.add({}, { repeat: { cron: '* * * * *' } })
    crawlerJobCheck.add({}, { repeat: { cron: '* * * * *' } })
    MainServer.add({ send: 'to another server' })
    WorkerServer.add({ data: 'ola mundo' })
}

export const queues = [MainServer, test, crawlerJobCheck, WorkerServer]

export const runQueue = (name: string) => {
    const foundQueue = queues.find((queue) => queue.name == name)
    if (foundQueue) {
        return foundQueue
    }
}