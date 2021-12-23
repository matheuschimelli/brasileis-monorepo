import { Job } from "bull";
import { runQueue } from '../../lib/bull'

const handler = async (job: Job) => {
    const mainServerJobData = job.data
    console.log(mainServerJobData)
    try {
        await runQueue(mainServerJobData.queue, mainServerJobData)
        return Promise.resolve()
    } catch (error: any) {
        throw new Error(error)
    }
}

export default handler
