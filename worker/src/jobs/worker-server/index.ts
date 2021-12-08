import { createJob } from "../../lib/job-utils";
import testCrawler1 from "../crawlers/test-crawler-1";
import defaultCrawler from "../crawlers/default-crawler";

const queue = createJob("WorkerServer")

const process = () => {
    console.log("aqui")
    queue.process(async (job) => {
        console.log(job.id)
        console.log(job.data)
        try {
            switch (job.data.queue) {
                case "DefaultCrawler":
                    defaultCrawler.queue.add({ ...job.data.jobData })
                    break;
                case "CrawlerTest":
                    testCrawler1.queue.add({ ...job.data.jobData })
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
    })
}

export default { queue, process }