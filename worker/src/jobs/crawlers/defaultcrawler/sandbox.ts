/* eslint-disable @typescript-eslint/no-unused-vars */
import { Job } from 'bull'
import dotenv from 'dotenv'

export default async function (job: Job) {
    console.log('RUNNING DEFAUULT SANDBOX CRAWERL')
    console.log(job.id)
    try {
        console.log(dotenv)
        console.log(job.data)
        console.log("RUNNING ON SEPARATED PROCESS DEFAULT CRAWLER")
        return Promise.resolve({ data: 'Crawler done' })
    } catch (error) {
        console.log(error)
        return Promise.reject(new Error(error))
    }
}
