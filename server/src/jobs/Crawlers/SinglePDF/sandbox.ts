/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import SinglePDF from './singlePdf'
import connectDB from '../../../database/connection'
import Crawler from '../../../models/Crawler'
connectDB()

export default async function handle (job: Job) {
  const crawlerData: Crawler = job.data
  console.log('Running SandBox Jobs - SAND BOX')
  job.progress(3)

  const crawler = new SinglePDF({
    id: crawlerData.id,
    name: crawlerData.crawlerName,
    categories: crawlerData.categories,
    subCategories: crawlerData.subCategories,
    baseUrl: crawlerData.baseUrl,
    urlsToVisit: crawlerData.urlsToVisit,
    crawlerType: 'custom'
  })

  try {
    await crawler.run()
    return Promise.resolve()
  } catch (error) {
    console.log(error)
    return Promise.reject(new Error(error))
  }
}
