import { createHash } from 'crypto'
import prisma from "@lib/prisma"
//import { createFeedItem } from "@modules/feed/feed-service"
import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service"
import { BlockType, Instancia, TipoJudiciario } from "@prisma/client"
import { upsert as upsertElasticSearch } from '@modules/elasticsearch/elasticsearch-service'
import { createSlug } from '@modules/law-block/law-block-service'


type Juris = {
    comarca?: string
    dataJulgamento?: string
    dataPublicacao?: string
    ementa?: string
    integra?: string
    numeroProcesso?: string
    orgaoJulgador?: string
    relator?: string
    segredoDeJustica?: string
    source: string
    pageText: string
    estado: string
    tribunal: string
    tipo: TipoJudiciario
    instancia: Instancia
}
export const handleJurisprudencia = async (
    {
        jobData,
    }: {
        jobData: any,
    }) => {

    const jdata = jobData as Juris
    const checkSum = createHash('sha256').update(`${jdata.pageText}`).digest('hex')

    const {
        estado,
        source,
        tipo,
        tribunal,
        comarca,
        dataJulgamento,
        dataPublicacao,
        ementa,
        integra,
        numeroProcesso,
        orgaoJulgador,
        relator,
        segredoDeJustica,
    } = jdata

    try {

        const juris = await prisma.jurisprudencia.findFirst({
            where: {
                source: source
            }
        })
        if (!juris) {
            const newJuris = await prisma.jurisprudencia.create({
                data: {
                    updated: true,
                    checkSum,
                    estado,
                    instancia: "PRIMEIRA_INSTANCIA",
                    source,
                    tipo,
                    tribunal,
                    comarca,
                    dataJulgamento,
                    dataPublicacao,
                    ementa,
                    integra,
                    numeroProcesso,
                    orgaoJulgador,
                    relator,
                    segredoDeJustica,
                    slug: createSlug(`${tribunal} ${comarca} ${numeroProcesso}`),

                }
            })
            if (newJuris) {

                await upsertElasticSearch({
                    docId: newJuris.id,
                    document: {
                        blockType: 'JURISPRUDENCIA' as BlockType,
                        name: newJuris.numeroProcesso,
                        title: `${newJuris.tribunal} jurisprudência ${newJuris.numeroProcesso}`,
                        value: newJuris.numeroProcesso,
                        originalText: newJuris.integra,
                        searchText: newJuris.integra,
                        searchString: newJuris.integra,
                        identifier: newJuris.numeroProcesso,
                        source: newJuris.source,
                        slug: createSlug(`${newJuris.tribunal} ${newJuris.comarca} ${newJuris.numeroProcesso}`),

                        tipoJudiciario: newJuris.tipo,
                        instancia: newJuris.instancia,
                        tribunal: newJuris.tribunal,
                        estado: newJuris.estado,
                        comarca: newJuris.comarca,
                        dataJulgamento: newJuris.dataJulgamento,
                        dataPublicacao: newJuris.dataPublicacao,
                        ementa: newJuris.ementa,
                        numeroProcesso: newJuris.numeroProcesso,
                        orgaoJulgador: newJuris.orgaoJulgador,
                        relator: newJuris.relator,
                        segredoDeJustica: newJuris.segredoDeJustica
                    }
                })


            }

        } else {
            const jurisCheckSum = juris.checkSum
            const jurisId = juris.id

            if (jurisCheckSum !== checkSum) {
                const updatedJuris = await prisma.jurisprudencia.create({
                    data: {
                        updated: true,
                        checkSum,
                        estado,
                        instancia: "PRIMEIRA_INSTANCIA",
                        source,
                        tipo,
                        tribunal,
                        comarca,
                        dataJulgamento,
                        dataPublicacao,
                        ementa,
                        integra,
                        numeroProcesso,
                        orgaoJulgador,
                        relator,
                        segredoDeJustica,
                        slug: createSlug(`${tribunal} ${comarca} ${numeroProcesso}`),

                        history: {
                            connect: {
                                id: jurisId
                            }
                        }
                    }
                })

                await prisma.jurisprudencia.update({
                    where: {
                        id: jurisId
                    },
                    data: {
                        updated: false,
                    }
                })
                if (updatedJuris) {
                    await upsertElasticSearch({
                        docId: updatedJuris.id,
                        document: {
                            blockType: 'JURISPRUDENCIA' as BlockType,
                            name: updatedJuris.numeroProcesso,
                            title: `${updatedJuris.tribunal} jurisprudência ${updatedJuris.numeroProcesso}`,
                            value: updatedJuris.numeroProcesso,
                            originalText: updatedJuris.integra,
                            searchText: updatedJuris.integra,
                            searchString: updatedJuris.integra,
                            identifier: updatedJuris.numeroProcesso,
                            source: updatedJuris.source,
                            slug: createSlug(`${updatedJuris.tribunal} ${updatedJuris.comarca} ${updatedJuris.numeroProcesso}`),

                            tipoJudiciario: updatedJuris.tipo,
                            instancia: updatedJuris.instancia,
                            tribunal: updatedJuris.tribunal,
                            estado: updatedJuris.estado,
                            comarca: updatedJuris.comarca,
                            dataJulgamento: updatedJuris.dataJulgamento,
                            dataPublicacao: updatedJuris.dataPublicacao,
                            ementa: updatedJuris.ementa,
                            numeroProcesso: updatedJuris.numeroProcesso,
                            orgaoJulgador: updatedJuris.orgaoJulgador,
                            relator: updatedJuris.relator,
                            segredoDeJustica: updatedJuris.segredoDeJustica
                        }
                    })
                }

            }
        }
    } catch (err) {
        sendAlertToTelegram(`
    🛑Erro em: handle-code-lawBlock🛑
        Erro: ${err}
        `);
        return Promise.reject(err)
    }
}

