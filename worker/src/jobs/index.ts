import signale from 'signale';
import { queue } from '../lib/bull'
import workerHandler from './worker-server/handler'
import { runOnSandbox } from '../lib/job-utils';

export const workerServer = queue('WorkerServer', workerHandler)
export const jobResult = queue('JobResults')

export const crawlerArtigosLei = queue('crawler-artigos-lei', runOnSandbox(__dirname, './crawlers/crawler-artigos-lei/sandbox'))

export const runQueues = () => {
    signale.success('🐂 Bull running');
    workerServer.add({}, { repeat: { cron: '* * * * *' } })
}


export const sendResult = async ({
    queue,
    data,
    result
}: {
    queue: string, data: any, result: any
}) => {
    await jobResult.add({ queue, data, result })
}

export const queues = [
    workerServer,
    jobResult,
    crawlerArtigosLei
]
