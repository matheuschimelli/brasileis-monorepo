import { Job } from 'bull'
import prisma from '@lib/prisma'
import parser from 'cron-parser'
import dayjs from '@lib/dayjs'
import { processOnWorker } from '@lib/bull'
import { sendAlertToTelegram } from '@modules/server-notifier/server-notifier-service'

const handler = async (job: Job) => {
    try {
        console.log("Checking for crawlers")
        const crawlers = await prisma.crawler.findMany({
            include: {
                crawlerType: {
                    select: {
                        name: true,
                    }
                }
            }
        })
        for (const crawler of crawlers) {
            const crawlerCron = crawler.cron
            const cronTime = parser.parseExpression(crawlerCron).prev().toString()

            const isSameHour = dayjs().isSame(cronTime, 'hour')
            const isSameMinute = dayjs().isSame(cronTime, 'minute')

            /**
             * TODO
             * REMOVE ALL THIS CONSOLE.LOG
             */

            console.log("CHECKING CRON TIME")
            console.log("Is same hour", isSameHour)
            console.log("Is same isSameMinute", isSameMinute)

            console.log("cron hour", dayjs(cronTime).hour())
            console.log("cron minute", dayjs(cronTime).minute())


            console.log("current hour", dayjs().hour())
            console.log("current minute", dayjs().minute())



            if (isSameHour && isSameMinute) {
                console.log("has same time. calling to run")

                sendAlertToTelegram(`Running Crawler: ${crawler.name}`);

                await processOnWorker({
                    id: crawler.id,
                    queue: crawler.crawlerType?.name!,
                    jobData: crawler
                })
            }
        }
        console.log("Ending crawler check")
    } catch (err) {
        sendAlertToTelegram(`
    🛑Erro em: cron-job-checker handler🛑
        Erro: ${err}
        `);
        return Promise.reject(err)
    }
}

export default handler