import signale from 'signale';
import { queue } from '../lib/bull'
import workerHandler from './worker-server/handler'
import crawlerArtigosLeiJsDom from './crawlers/crawler-artigos-jsdom/handler'
import { runOnSandbox } from '../lib/job-utils';

type SendResultType = {
    queue: string,
    data: any,
    result: any
}

export const workerServer = queue('WorkerServer', workerHandler)
export const jobResult = queue('JobResults')

export const crawlerArtigosLei = queue('crawler-artigos-lei', runOnSandbox(__dirname, './crawlers/crawler-artigos-lei/sandbox'))
export const crawlerArtigsoLeiJsDom = queue('crawler-artigos-lei-jsdom', crawlerArtigosLeiJsDom)
export const crawlerTJPRJurisprudencia = queue('TJPRJurisprudencia', runOnSandbox(__dirname, './crawlers/crawler-tjpr/sandbox'))
export const crawlerTJPRJurisprudenciaWorker = queue('TJPRJurisprudencia Worker', runOnSandbox(__dirname, './crawlers/crawler-tjpr/worker'))
export const crawlerDailyTJPR = queue('DailyTJPR', runOnSandbox(__dirname, './crawlers/crawler-tjpr-diary/sandbox'))



export const runQueues = () => signale.success('🐂 Bull running');
export const sendResult = async ({ queue, data, result }: SendResultType) => await jobResult.add({ queue, data, result })


export const queues = [
    workerServer,
    jobResult,
    crawlerArtigosLei,
    crawlerArtigsoLeiJsDom,
    crawlerTJPRJurisprudencia,
    crawlerDailyTJPR,
    crawlerTJPRJurisprudenciaWorker
]
