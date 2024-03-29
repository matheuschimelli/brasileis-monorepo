import { createHash } from 'crypto'
import prisma from "@lib/prisma"
//import { createFeedItem } from "@modules/feed/feed-service"
import {
    createLawBlockFromArray,
    updateLawBlockFromArray,
} from "@modules/law-block/law-block-service"
import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service"
import { removeOldBlocksFromES } from "../jobs"
import { CrawlerParams, JobResult } from "@modules/types"


export const handleLawBlockCode = async (
    {
        jobData,
        crawlerParams
    }: {
        jobData: JobResult,
        crawlerParams: CrawlerParams
    }) => {

    try {
        const masterLawBlock = await prisma.lawBlock.findFirst({
            where: {
                isActive: true,
                type: crawlerParams.blockType,
                source: crawlerParams.source,
                slug: {
                    value: crawlerParams.slug
                },
                content: {
                    every: {
                        value: {
                            not: null
                        }

                    }
                },
                crawler: {
                    name: crawlerParams.name
                }
            },
            include: {
                content: true
            }
        })

        console.log(`block exists? ${masterLawBlock?.id}`)

        if (!masterLawBlock) {
            const dataCheckSum = createHash('sha256').update(`${jobData.result.pageText}`).digest('hex')

            const newMasterLawBlock = await prisma.lawBlock.create({
                data: {

                    isActive: true,
                    type: crawlerParams.blockType,
                    source: crawlerParams.source,
                    title: crawlerParams.mainBlockTitle,
                    originalText: jobData.result.pageText,
                    checksum: dataCheckSum,
                    crawler: {
                        connect: {
                            id: crawlerParams.id
                        }
                    },
                    slug: {
                        connectOrCreate: {
                            where: {
                                value: crawlerParams.slug
                            },
                            create: {
                                title: crawlerParams.mainBlockTitle,
                                value: crawlerParams.slug,
                            }
                        }
                    },

                }
            })
            console.log(`CREATED NEW BLOCK ${newMasterLawBlock?.id}`)

            /*
            adicionar no painel do crawler
             - topico a ser listado
            */

            if (newMasterLawBlock) {
                const masterParentId = newMasterLawBlock.id

                await createLawBlockFromArray({
                    data: jobData.result.articles,
                    codeName: newMasterLawBlock.title!,
                    masterParentId,
                    name: newMasterLawBlock.title!,
                    masterLawBlock: newMasterLawBlock
                })

                // await createFeedItem({

                //     title: `Novo ${generateTextType(crawlerParams.blockType)} adicionado ${crawlerParams.blockType}`,
                //     content: JSON.stringify({
                //         description: `Novo ${generateTextType(crawlerParams.blockType)}`,
                //         lawBlockId: `${crawlerParams.id}`
                //     }),
                //     topicId: crawlerParams.topicId!,
                //     lawBlockId: newMasterLawBlock.id
                // })
            }

        } else {
            const originalChecksum = masterLawBlock.checksum
            const newCheckSum = createHash('sha256').update(`${jobData.result.pageText}`).digest('hex') // use obData.result.pageHtml to test

            if (originalChecksum !== newCheckSum) {
                console.log(`mater block HAS UPDATE ${masterLawBlock.id}`)

                const dataCheckSum = createHash('sha256').update(`${jobData.result.pageText}`).digest('hex')
                var version = masterLawBlock.version

                const newVersion = ++version

                console.log("version", newVersion)

                const newMasterLawBlock = await prisma.lawBlock.create({
                    data: {

                        isActive: true,
                        type: crawlerParams.blockType,
                        source: crawlerParams.source,
                        title: crawlerParams.mainBlockTitle,
                        originalText: jobData.result.pageText,
                        checksum: dataCheckSum,
                        version: newVersion,
                        crawler: {
                            connect: {
                                id: crawlerParams.id
                            }
                        },
                        slug: {
                            connectOrCreate: {
                                where: {
                                    value: crawlerParams.slug
                                },
                                create: {
                                    title: crawlerParams.mainBlockTitle,
                                    value: crawlerParams.slug,
                                }
                            }
                        },

                    }
                })
                console.log("RESULT ARTICLES", jobData.result.articles)
                await updateLawBlockFromArray({
                    newData: jobData.result.articles,
                    masterBlockId: newMasterLawBlock.id,
                    topicId: crawlerParams.topicId!
                })


                await removeOldBlocksFromES.add({ masterBlockId: masterLawBlock.id })

            } else {
                console.log("master block not need to update")
                return Promise.resolve()
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

