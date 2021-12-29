import prisma from "@lib/prisma"
import { createLawBlockFromArray } from "@modules/law-block/law-block-service"
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

        if (newMasterLawBlock) {
            const masterParentId = newMasterLawBlock.id

            await createLawBlockFromArray({
                data: jobData.result.articles,
                codeName: newMasterLawBlock.title!,
                masterParentId,
                name: newMasterLawBlock.title!,
                masterLawBlock: newMasterLawBlock
            })
        }

    } else {

        console.log(`mater block exist checking content ${masterLawBlock.id}`)

        const oldPageText = masterLawBlock.originalText
        const newPageText = jobData.result.pageText

        if (oldPageText?.trim() !== newPageText.trim()) {
            console.log(`mater block HAS UPDATE ${masterLawBlock.id}`)

            await prisma.lawBlock.update({
                where: {
                    id: masterLawBlock.id
                },
                data: {
                    isActive: false
                }
            })
            const newBlockVersion = masterLawBlock.version++

            const newBlock = await prisma.lawBlock.create({
                data: {
                    version: newBlockVersion,
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
            if (newBlock) {
                const masterParentId = newBlock.id
                await createLawBlockFromArray({
                    data: jobData.result.articles,
                    codeName: newBlock.title!,
                    masterParentId,
                    name: newBlock.title!,
                    masterLawBlock: newBlock
                })
                await removeOldBlocksFromES.add({ masterBlockId: masterLawBlock.id })
            }

        } else {
            console.log("master block not need to update")
            return Promise.resolve()
        }

    }
}