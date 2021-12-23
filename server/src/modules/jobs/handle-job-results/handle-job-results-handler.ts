import { Job } from "bull";

export const handleJobResults = async (job: Job) => {
    console.log("Receiving job result")
    console.log(job.data)
    return Promise.resolve()
}