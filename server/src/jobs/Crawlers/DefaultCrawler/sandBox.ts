/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import DefaultCrawler from './defaultCrawler'
import dotenv from 'dotenv'
import connectDB from '../../../database/connection'
import Crawler from '../../../models/Crawler'
connectDB()

export default async function handle (job: Job) {
  const crawlerData: Crawler = job.data
  console.log(crawlerData)
  console.log('Running SandBox Jobs - SAND BOX')
  console.log(`Job in pid ${job.id} ${process.pid} got data:`)
  job.progress(3)

  if (!crawlerData.htmlSelectors) {
    return Promise.reject(new Error('Cannot run crawler. Missing params related with selectors'))
  }

  const runHeadless = process.env.NODE_ENV !== 'development'

  const crawler = new DefaultCrawler({
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
    urlsToVisit: crawlerData.urlsToVisit
  })

  try {
    await crawler.runCrawler()
  } catch (error) {
    console.log(error)
    return Promise.reject(new Error(error))
  }
}
