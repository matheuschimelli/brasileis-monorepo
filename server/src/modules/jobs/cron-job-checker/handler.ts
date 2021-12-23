import { Job } from 'bull'
import prisma from '@lib/prisma'
import parser from 'cron-parser'
import dayjs from '@lib/dayjs'
import { processOnWorker } from '@lib/bull'

const handler = async (job: Job) => {
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

        if (isSameHour && isSameMinute) {
            console.log(crawler)
            console.log("has same time. calling to run")
            await processOnWorker({
                id: crawler.id,
                queue: crawler.crawlerType?.name!,
                jobData: crawler.source,
            })
        }
    }
    console.log("Ending crawler check")
}

export default handler