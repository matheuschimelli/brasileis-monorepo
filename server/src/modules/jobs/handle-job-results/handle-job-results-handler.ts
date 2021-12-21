import { Job } from "bull";

export const handleJobResults = async (job: Job) => {
    try {
        switch (job.data.processor) {
            case "CRAWLER":
                defaultCrawler.queue.add({ ...job.data.jobData })
                break;
            default:
                console.log(job.data)
                break;
        }
        job.progress(100)
        return Promise.resolve()
    } catch (error) {
        console.log(error)
        return Promise.reject(new Error(error as string))
    }
}