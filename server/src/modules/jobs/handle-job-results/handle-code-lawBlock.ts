import prisma from "@lib/prisma"
import { createFeedItem } from "@modules/feed/feed-service"
import {
    createLawBlockFromArray,
    updateLawBlockFromArray,
    generateTextType
} from "@modules/law-block/law-block-service"
import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service"
import { BlockType } from "@prisma/client"
import { removeOldBlocksFromES } from "../jobs"
import { JobResult } from "./handle-job-results-handler"

type CrawlerParams = {
    id: string;
    name: string;
    description: string;
    isUrlOnly: boolean;
    source: string;
    cron: string;
    notifyUpdates: true;
    slug: string;
    mainBlockTitle: string;
    mainBlockDescription: string;
    version: 1;
    createdAt: string;
    updatedAt: string;
    lawBlockId: string;
    crawlerTypeId: string;
    blockType: BlockType;
    topicId?: string;

    crawlerType: {
        id: string;
        name: string;
        description: string;
        customCode: null;
        createdAt: string;
        updatedAt: string;
    };
}
export const handleLawBlockCode = async ({ jobData, crawlerParams }: { jobData: JobResult, crawlerParams: CrawlerParams }) => {
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
            const newMasterLawBlock = await prisma.lawBlock.create({
                data: {

                    isActive: true,
                    type: crawlerParams.blockType,
                    source: crawlerParams.source,
                    title: crawlerParams.mainBlockTitle,
                    originalText: jobData.result.pageText,
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

                await createFeedItem({

                    title: `Novo ${generateTextType(crawlerParams.blockType)} adicionado ${crawlerParams.blockType}`,
                    content: JSON.stringify({
                        description: `Novo ${generateTextType(crawlerParams.blockType)}`,
                        lawBlockId: `${crawlerParams.id}`
                    }),
                    topicId: crawlerParams.topicId!,
                    lawBlockId: newMasterLawBlock.id
                })
            }

        } else {

            console.log(`mater block exist checking content ${masterLawBlock.id}`)

            const oldPageText = masterLawBlock.originalText
            const newPageText = jobData.result.pageText

            if (oldPageText?.trim() !== newPageText.trim()) {
                console.log(`mater block HAS UPDATE ${masterLawBlock.id}`)

                await updateLawBlockFromArray({
                    newData: jobData.result.articles,
                    masterBlockId: masterLawBlock.id,
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

