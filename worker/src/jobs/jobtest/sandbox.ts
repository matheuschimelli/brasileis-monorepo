/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import dotenv from 'dotenv'

export default async function (job: Job) {
    console.log('JobTest sandbox')
    console.log(job.id)
    try {
        // console.log(dotenv)
        console.log(job.data)
        console.log('JobTest sandbox')
        job.progress(100)
        return Promise.resolve({ data: 'JobTest sandbox' })
    } catch (error) {
        console.log(error)
        return Promise.reject(new Error(error))
    }
}
