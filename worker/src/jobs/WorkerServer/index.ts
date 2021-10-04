import { createJob } from "../../lib/jobUtils";
import testCrawler1 from "../crawlers/testCrawler1";
import defaultCrawler from "../crawlers/defaultcrawler";

const queue = createJob("WorkerServer")

const process = () => {
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