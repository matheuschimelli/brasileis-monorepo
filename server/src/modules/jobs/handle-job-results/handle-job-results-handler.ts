import { Job } from "bull";

/**
 * Brasileis job resul handler - How it Works (or how should it works)
 */
export const handleJobResults = async (job: Job) => {
    const jobData = job.data
    const queue = jobData.queue
    const options = jobData.data



    return Promise.resolve()
}