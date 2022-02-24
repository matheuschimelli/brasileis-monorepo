import { createHash } from 'crypto'
import prisma from "@lib/prisma"
//import { createFeedItem } from "@modules/feed/feed-service"

import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service"
import { Instancia, TipoJudiciario } from "@prisma/client"

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
            await prisma.jurisprudencia.create({
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
                }
            })
        } else {
            const jurisCheckSum = juris.checkSum
            const jurisId = juris.id
            if (jurisCheckSum !== checkSum) {
                await prisma.jurisprudencia.create({
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

