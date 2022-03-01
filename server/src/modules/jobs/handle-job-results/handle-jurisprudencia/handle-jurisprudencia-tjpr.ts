import { createHash } from 'crypto'
import prisma from "@lib/prisma"
import {
    sendAlertToTelegram
} from "@modules/server-notifier/server-notifier-service"
import { BlockType } from "@prisma/client"
import {
    upsert as upsertElasticSearch,
    remove as removeElasticSearch
} from '@modules/elasticsearch/elasticsearch-service'
import { createSlug } from '@modules/law-block/law-block-service'
import { Juris } from '@modules/types'


export const handleJurisprudenciaTJPR = async (
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

    console.log(jdata)

    try {
        if (!numeroProcesso) return Promise.reject(`Missing numeroProcesso em ${source}`)

        const juris = await prisma.jurisprudencia.findFirst({
            where: {
                numeroProcesso
            }
        })
        if (juris) {
            const newJuris = await prisma.jurisprudencia.update({
                where: {
                    id: juris.id
                },
                data: {
                    updated: true,
                    checkSum,
                    estado,
                    instancia: "PRIMEIRA_INSTANCIA",
                    source,
                    tipo,
                    tribunal: {
                        connectOrCreate: {
                            create: {
                                name: tribunal,
                                slug: createSlug(tribunal)
                            },
                            where: {
                                slug: createSlug(tribunal)
                            }
                        }
                    },
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

                },
                include: {
                    tribunal: true
                }
            })
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
                    slug: createSlug(`${newJuris.tribunal?.name} ${newJuris.comarca} ${newJuris.numeroProcesso}`),

                    tipoJudiciario: newJuris.tipo,
                    instancia: newJuris.instancia,
                    tribunal: newJuris.tribunal?.name,
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
        } else {

            const newJuris = await prisma.jurisprudencia.create({
                data: {
                    updated: true,
                    checkSum,
                    estado,
                    instancia: "PRIMEIRA_INSTANCIA",
                    source,
                    tipo,
                    tribunal: {
                        connectOrCreate: {
                            create: {
                                name: tribunal,
                                slug: createSlug(tribunal)
                            },
                            where: {
                                slug: createSlug(tribunal)
                            }
                        }
                    },
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

                },
                include: {
                    tribunal: true
                }
            })

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
                    slug: createSlug(`${newJuris.tribunal?.name} ${newJuris.comarca} ${newJuris.numeroProcesso}`),

                    tipoJudiciario: newJuris.tipo,
                    instancia: newJuris.instancia,
                    tribunal: newJuris.tribunal?.name,
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
    } catch (err) {
        sendAlertToTelegram(`
    🛑Erro em: handle-code-lawBlock🛑
        Erro: ${err}
        `);
        return Promise.reject(err)
    }
}

