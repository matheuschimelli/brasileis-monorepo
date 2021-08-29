/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import runNormasReceitaFederal from './inssCrawler'
import connectDB from '../../../../database/connection'
import Crawler from '../../../../models/Crawler'
connectDB()

export default async function handle (job: Job) {
  const crawlerData: Crawler = job.data
  console.log(crawlerData)
  console.log('SINGLEPAGE')
  console.log('Running SandBox Jobs - SAND BOX')
  console.log(`Job in pid ${job.id} ${process.pid} got data:`)
  // job.progress(3)

  try {
    await runNormasReceitaFederal(crawlerData)
    return Promise.resolve('Done INSS')
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}
