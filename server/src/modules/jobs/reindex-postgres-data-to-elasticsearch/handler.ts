import { Job } from "bull";
import { getAllBlocksIds } from '@modules/law-block/law-block-service'
import { reIndexPostgresDataToElasticSearchWorker } from "../jobs";
import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service";


const handler = async (job: Job) => {
    try {

        const blocks = await getAllBlocksIds()
        console.log("QUANTIDADE BLOCOS", blocks.length)

        if (blocks && blocks.length !== 0) {
            for (const block of blocks) {
                await reIndexPostgresDataToElasticSearchWorker.add({ id: block.id })
            }
        }
        return Promise.resolve()

    } catch (error) {
        sendAlertToTelegram(`
        🛑Erro em: reIndexPostgresDataToElasticSearchWorker handler🛑
        Erro: ${error}
        `);

        return Promise.reject(error)
    }
}

export default handler
