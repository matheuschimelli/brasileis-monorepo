import prisma from "@lib/prisma";
import { remove } from "@modules/elasticsearch/elasticsearch-service";
import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service";
import { Job } from "bull";

const handler = async (job: Job) => {
    try {
        const doc = job.data

        const existLaw = await prisma.lawBlock.findUnique({
            where: { id: doc._id }
        })
        const existJurisprudencia = await prisma.jurisprudencia.findUnique({
            where: { id: doc._id }
        })

        if (!existLaw && !existJurisprudencia) return await remove({ documentId: doc._id })

        return Promise.resolve()
    } catch (error) {
        sendAlertToTelegram(`
        🛑Erro em: auto-es-index-updater worker-handler🛑
        Erro: ${error}
        `);
        return Promise.reject(error)
    }
}

export default handler