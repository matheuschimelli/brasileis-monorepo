import { remove as removeFromEs } from '@modules/elasticsearch/elasticsearch-service'
import { sendAlertToTelegram } from '@modules/server-notifier/server-notifier-service';
import { Job } from "bull";

const handler = async (job: Job) => {
    const jobData = job.data

    try {
        await removeFromEs({
            documentId: jobData.blockId
        })
    } catch (error) {
        sendAlertToTelegram(`
        🛑Erro em: handle-code-lawBlock🛑
            Erro: ${error}
            `);
        return Promise.reject(error)
    }
}

export default handler