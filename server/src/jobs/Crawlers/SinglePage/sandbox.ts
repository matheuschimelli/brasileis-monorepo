/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import SinglePage from './singlePageCrawler'
import dotenv from 'dotenv'
import connectDB from '../../../database/connection'
import Crawler from '../../../models/Crawler'
connectDB()

export default async function handle (job: Job) {
  const crawlerData: Crawler = job.data
  console.log(crawlerData)
  console.log('SINGLEPAGE')
  console.log('Running SandBox Jobs - SAND BOX')
  console.log(`Job in pid ${job.id} ${process.pid} got data:`)
  job.progress(3)

  if (!crawlerData.htmlSelectors) {
    return Promise.reject(new Error('Cannot run crawler. Missing params related with selectors'))
  }

  try {
    const runHeadless = process.env.NODE_ENV !== 'development'

    const crawler = new SinglePage({
      id: crawlerData.id,
      name: crawlerData.crawlerName,
      categories: crawlerData.categories,
      subCategories: crawlerData.subCategories,
      selectors: {
        page: {
          title: crawlerData.htmlSelectors.titleEl,
          content: crawlerData.htmlSelectors.contentEl,
          contentIndex: crawlerData.htmlSelectors.urlListEl
        }
      },
      baseUrl: crawlerData.baseUrl,
      headless: runHeadless,
      followBaseUrl: true,
      urlsToVisit: crawlerData.urlsToVisit,
      redisConnection: {
        host: '127.0.0.1',
        port: 6379
      }
    })
    await crawler.runCrawler()

    crawler.on('progress', (progress) => {
      job.progress(progress)
    })
    crawler.on('log', async (data) => {
      console.log(data)
      // await CrawlerLog.create({ name: 'OutSideClass', content: `${data}` })
    })
    crawler.on('done', (done) => {
      console.log('DONE FROM SANDBOX2')
      return Promise.resolve({ done: true })
    })
    crawler.on('error', (error) => {
      console.log(error)
      throw new Error(error)
    })
  } catch (error) {
    console.log(error)
    return Promise.reject(new Error(error))
  }
}
