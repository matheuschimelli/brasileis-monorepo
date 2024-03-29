import { Job } from 'bull'
import prisma from '@lib/prisma'
import parser from 'cron-parser'
import dayjs from '@lib/dayjs'
import { processOnWorker } from '@lib/bull'
import { sendAlertToTelegram } from '@modules/server-notifier/server-notifier-service'

export const handler = async (job: Job) => {
    try {
        const crawlers = await prisma.crawler.findMany({})
        for (const crawler of crawlers) {
            const crawlerCron = crawler.cron
            const cronTime = parser.parseExpression(crawlerCron).prev().toString()
            const currentTime = dayjs().toString()

            console.log(`Cron time ${cronTime}`)
            console.log(`Current Time ${currentTime}`)

            const isSameHour = dayjs().isSame(cronTime, 'hour')
            const isSameMinute = dayjs().isSame(cronTime, 'minute')

            if (isSameHour && isSameMinute) {
                console.log("MESMA HORA E MINUTO")
                await processOnWorker({
                    id: 'random id',
                    queue: 'CRAWLER',
                    jobData: 'job dataa',
                })
            }
        }
        return Promise.resolve()
    } catch (err) {
        sendAlertToTelegram(`
    🛑Erro em: check-crawler handler🛑
        Erro: ${err}
        `);

        return Promise.reject(err)
    }
}