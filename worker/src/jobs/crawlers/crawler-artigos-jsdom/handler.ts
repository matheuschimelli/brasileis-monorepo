import { Job } from "bull";
import { sendResult } from "../..";
import { crawlJsDom } from '../../../lib/crawler/jsdom-crawler'

const handler = async (job: Job) => {
    try {
        const jobOptions = job.data
        const jobData = jobOptions.jobData

        const { articles, pageHtml, pageText } = await crawlJsDom(jobData.source)

        if (articles.length == 0 || !articles) throw new Error("Not articles were found from the provided url source")

        return await sendResult({
            queue: jobOptions.queue,
            data: jobData,
            result: { data: job.data, articles, pageHtml, pageText }
        })

    } catch (err) {
        console.log(err)
        return Promise.reject(err)
    }

}

export default handler
