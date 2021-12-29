import { remove as removeFromEs } from '@modules/elasticsearch/elasticsearch-service'
import { Job } from "bull";

const handler = async (job: Job) => {
    const jobData = job.data

    try {
        await removeFromEs({
            documentId: jobData.blockId
        })
    } catch (error) {
        return Promise.reject(error)
    }
}

export default handler