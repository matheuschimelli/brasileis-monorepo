import { createJob } from "../../lib/jobUtils";
import crawlerTest from "../crawlers/testCrawler1";
import defaultcrawler from "../crawlers/defaultCrawler";

const queue = createJob("WorkerServer")
const process = () => {
    queue.process(async (job) => {
        console.log('WorkerServer Sandbox')
        console.log(job.id)
        console.log(job.data)
        try {
            switch (job.data.queue) {
                case "DefaultCrawler":
                    defaultcrawler.queue.add({ ...job.data.jobData })
                    break;
                case "CrawlerTest":
                    crawlerTest.queue.add({ ...job.data.jobData })
                    break;
                default:
                    break;
            }

            job.progress(100)
            return Promise.resolve({ data: 'WorkerServer Sandbox' })
        } catch (error) {
            console.log(error)
            return Promise.reject(new Error(error as string))
        }


    })
}

export default { queue, process }