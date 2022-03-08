import { Job } from "bull";
import { createSlug, findBlockForReindex } from '@modules/law-block/law-block-service'
import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service";
import { upsert as upsertElasticSearch } from "@modules/elasticsearch/elasticsearch-service";
import prisma from "@lib/prisma";
import { BlockType } from "@prisma/client";

// reIndexPostgresDataToElasticSearchWorker
const handler = async (job: Job) => {
    const jobData = job.data
    const docId = jobData.id
    const isJurisprudencia = jobData.jurisprudencia

    try {
        if (isJurisprudencia) {
            const jurisprudencia = await prisma.jurisprudencia.findUnique({
                where: {
                    id: docId
                },
                include: {
                    tribunal: true
                }
            })

            if (jurisprudencia) {
                await upsertElasticSearch({
                    docId: jurisprudencia.id,
                    document: {
                        blockType: 'JURISPRUDENCIA' as BlockType,
                        name: jurisprudencia.numeroProcesso,
                        title: `${jurisprudencia.tribunal?.name} jurisprudência ${jurisprudencia.numeroProcesso}`,
                        value: jurisprudencia.numeroProcesso,
                        originalText: jurisprudencia.integra,
                        searchText: jurisprudencia.integra,
                        searchString: jurisprudencia.integra,
                        identifier: jurisprudencia.numeroProcesso,
                        source: jurisprudencia.source,
                        slug: createSlug(`${jurisprudencia.tribunal?.name} ${jurisprudencia.comarca} ${jurisprudencia.numeroProcesso}`),

                        tipoJudiciario: jurisprudencia.tipo,
                        instancia: jurisprudencia.instancia,
                        tribunal: jurisprudencia.tribunal?.slug,
                        estado: jurisprudencia.estado,
                        comarca: jurisprudencia.comarca,
                        dataJulgamento: jurisprudencia.dataJulgamento,
                        dataPublicacao: jurisprudencia.dataPublicacao,
                        ementa: jurisprudencia.ementa,
                        numeroProcesso: jurisprudencia.numeroProcesso,
                        orgaoJulgador: jurisprudencia.orgaoJulgador,
                        relator: jurisprudencia.relator,
                        segredoDeJustica: jurisprudencia.segredoDeJustica
                    }
                })
            }
        } else {
            const block = await findBlockForReindex(docId)

            if (block) {
                await upsertElasticSearch({
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
