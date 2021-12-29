import prisma from "@lib/prisma";
import { remove } from "@modules/elasticsearch/elasticsearch-service";
import { Job } from "bull";

const handler = async (job: Job) => {
    try {
        const doc = job.data

        const existLaw = await prisma.lawBlock.findUnique({
            where: { id: doc._id }
        })

        if (!existLaw) return await remove({ documentId: doc._id })

        return Promise.resolve()
    } catch (error) {
        return Promise.reject(error)
    }
}

export default handler