/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import apifyCrawler from './apifyCrawler'

export default async function handle (job: Job) {
  const crawlerData = job.data
  console.log(crawlerData)
  console.log('Running SandBox Jobs - SAND BOX')
  console.log(`Job in pid ${job.id} ${process.pid} got data:`)
  job.progress(3)

  try {
    await apifyCrawler()
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(Error(error))
  }
}
