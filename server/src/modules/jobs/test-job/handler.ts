import { Job } from 'bull'
export const handler = async (job: Job) => {
    console.log("working every single minute")
    console.log(job.id)
    return Promise.resolve()
}