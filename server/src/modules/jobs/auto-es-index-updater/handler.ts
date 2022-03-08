import { Job } from "bull";
import { findAll as elasticSearchFindAll } from '@modules/elasticsearch/elasticsearch-service'
import { autoEsIndexUpdaterWorker } from "../jobs";
import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service";

const handler = async (job: Job) => {
    try {
        const docs = await elasticSearchFindAll()
        if (!docs) return Promise.resolve()

        for (const doc of docs) {
            await autoEsIndexUpdaterWorker.add({ ...doc })
        }
    } catch (error) {
        sendAlertToTelegram(`
        🛑Erro em: auto-es-index-updater handler🛑
        Erro: ${error}
        `);

        return Promise.reject(error)
    }
}

export default handler
