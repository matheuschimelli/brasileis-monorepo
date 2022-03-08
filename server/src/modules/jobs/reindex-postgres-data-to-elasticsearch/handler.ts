import { Job } from "bull";
import { getAllBlocksIds } from '@modules/law-block/law-block-service'
import { reIndexPostgresDataToElasticSearchWorker } from "../jobs";
import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service";
import { findAllWithoutPagination } from "@modules/jurisprudencia/jurisprudencia-service";


const handler = async (job: Job) => {
    try {

        const blocks = await getAllBlocksIds()
        const jurisprudencias = await findAllWithoutPagination()

        console.log("QUANTIDADE BLOCOS", blocks.length)

        if (blocks && blocks.length !== 0) {
            for (const block of blocks) {
                await reIndexPostgresDataToElasticSearchWorker.add({ id: block.id })
            }
        }
        if (jurisprudencias && jurisprudencias.length !== 0) {
            for (const jurisprudencia of jurisprudencias) {
                await reIndexPostgresDataToElasticSearchWorker.add({ id: jurisprudencia.id, jurisprudencia: true })
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
