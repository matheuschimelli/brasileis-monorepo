import { Job, CronRepeatOptions } from 'bull'
import { getRepository } from 'typeorm'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import weekday from 'dayjs/plugin/weekday'
import en from 'dayjs/locale/en'

import Crawler from '../../../models/Crawler'
import Queue from '../../Queue'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)

dayjs.locale({
  ...en,
  weekStart: 1
})

const repeat: CronRepeatOptions = {
  cron: '* * * * 1'
}
export default {
  key: 'Segunda',
  sandBoxFile: null,
  options: {
    sandBox: true,
    continuous: true,
    repeat
  },
  async handle(job: Job) {
    console.log(`Checking Monday Jobs ${dayjs().format('HH:mm')}`)
    try {
      const crawlerRepo = getRepository(Crawler)

      const crawlers = await crawlerRepo.createQueryBuilder('crawler')
        .leftJoinAndSelect('crawler.categories', 'categories')
        .leftJoinAndSelect('crawler.subCategories', 'subCategories')
        .leftJoinAndSelect('crawler.htmlSelectors', 'htmlSelectors')
        .leftJoinAndSelect('crawler.updateTime', 'updateTime')
        .leftJoinAndSelect('crawler.crawlerType', 'crawlerType')
        .where('updateTime.monday= :update', { update: true })
        .andWhere('updateTime.updateMondayTime= :updateMondayTime', { updateMondayTime: dayjs().format('HH:mm') })
        .getMany()

      if (crawlers && crawlers.length === 0) {
        job.progress(100)
        return Promise.resolve({ done: true, message: 'Not found jobs for that time. ' })
      }
      // If has any item in Crawlers Array continue
      job.progress(50)

      for (const crawler of crawlers) {
        console.log(crawler)
        if (!crawler.crawlerType) {
          await Queue.workerServer.add({ queue: 'DefaultCrawler', jobData: crawler })
        } else {
          await Queue.workerServer.add({ queue: crawler.crawlerType.name, jobData: crawler })
        }
      }
      job.progress(100)

      return Promise.resolve({ done: true, message: 'All pending jobs for monday were queued ' })
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
}
