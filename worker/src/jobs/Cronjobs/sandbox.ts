/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import dotenv from 'dotenv'
import jobResults from '../jobResults'

export default async function (job: Job) {
    console.log('CronJob Sandbox')
    console.log(job.id)
    try {
        console.log(job.data)
        console.log('CronJob Sandbox')

        jobResults.queue.add({ queue: 'CronJob', result: { data: 'CronJob Sandbox' } })
        job.progress(100)

        return Promise.resolve()
    } catch (error: any) {
        console.log(error)
        return Promise.reject(new Error(error))
    }
}
