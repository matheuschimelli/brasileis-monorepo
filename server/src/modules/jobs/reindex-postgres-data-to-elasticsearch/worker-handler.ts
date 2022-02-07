import { Job } from "bull";
import { findBlockForReindex } from '@modules/law-block/law-block-service'
import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service";
import { upsert as upserElasticSearch } from "@modules/elasticsearch/elasticsearch-service";

// reIndexPostgresDataToElasticSearchWorker
const handler = async (job: Job) => {
    const jobData = job.data
    const blockId = jobData.id

    try {
        const block = await findBlockForReindex(blockId)

        if (block) {
            await upserElasticSearch({
                docId: block.id,
                document: {
                    blockType: block.type,
                    identifier: block.identifier!,
                    name: block.name!,
                    originalText: block.originalText!,
                    searchString: block.searchString!,
                    searchText: block.searchString!,
                    slug: block.slug?.value!,
                    source: block.source!,
                    title: block.title!,
                    value: block.value!
                }
            })
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
