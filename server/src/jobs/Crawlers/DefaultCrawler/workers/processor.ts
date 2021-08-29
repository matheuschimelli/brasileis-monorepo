import { Job } from 'bull'
import connectDB from '../../../../database/connection'

connectDB()

export default async function handle (job: Job) {
  console.log('Running Default Crawler Processor')
  try {
    return Promise.resolve()
  } catch (error) {
    throw new Error(error)
  }
}
