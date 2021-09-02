/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import dotenv from 'dotenv'

export default async function (job: Job) {
    console.log('WorkerServer Sandbox')
    console.log(job.id)
    try {
        // console.log(dotenv)
        console.log(job.data)
        console.log('WorkerServer Sandbox')
        job.progress(100)
        return Promise.resolve({ data: 'WorkerServer Sandbox' })
    } catch (error) {
        console.log(error)
        return Promise.reject(new Error(error))
    }
}
