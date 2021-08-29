/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import runDOSPCrawler from './dospCrawler'
import dotenv from 'dotenv'
import connectDB from '../../../../database/connection'
connectDB()

export default async function handle (job: Job) {
  const crawlerData = job.data
  console.log(crawlerData)
  console.log('DOSP Crawler')
  console.log('Running SandBox Jobs - SAND BOX')
  console.log(`Job in pid ${job.id} ${process.pid} got data:`)
  // job.progress(3)

  try {
    await runDOSPCrawler()
  } catch (error) {
    throw new Error(error)
  }
}
