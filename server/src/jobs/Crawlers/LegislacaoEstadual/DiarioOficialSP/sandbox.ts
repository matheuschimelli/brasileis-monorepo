/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import DiarioOficialSP from './diarioOficialSP'
import Crawler from '../../../../models/Crawler'

export default async function handle (job: Job) {
  const crawlerData: Crawler = job.data
  console.log('Running SandBox Jobs - SAND BOX')
  job.progress(3)

  const crawler = new DiarioOficialSP({
    id: crawlerData.id,
    name: crawlerData.crawlerName,
    categories: crawlerData.categories,
    subCategories: crawlerData.subCategories,
    baseUrl: crawlerData.baseUrl,
    urlsToVisit: crawlerData.urlsToVisit
  })

  try {
    await crawler.runCrawler()
  } catch (error) {
    console.log(error)
    return Promise.reject(new Error(error))
  }
}
