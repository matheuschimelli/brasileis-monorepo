/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import PrevCrawler from './prevCrawler'
import connectDB from '../../../database/connection'
import Crawler from '../../../models/Crawler'
connectDB()

export default async function handle (job: Job) {
  const crawlerData: Crawler = job.data
  console.log('Running SandBox Jobs - SAND BOX')
  job.progress(3)

  const crawler = new PrevCrawler()

  try {
    console.log('running crawler previdenciarista')
    await crawler.execute()
  } catch (error) {
    console.log(error)
    return Promise.reject(new Error(error))
  }
}
