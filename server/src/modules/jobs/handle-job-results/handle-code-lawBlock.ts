import prisma from "@lib/prisma"
import { createLawBlockFromArray } from "@modules/law-block/law-block-service"
import { BlockType } from "@prisma/client"
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
            parentBlock: null,
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
            Crawler: {
                name: crawlerParams.name
            }
        },
        include: {
            content: true
        }
    })

    if (!masterLawBlock) {
        const newMasterLawBlock = await prisma.lawBlock.create({
            data: {
                isActive: true,
                title: crawlerParams.mainBlockTitle,
                type: crawlerParams.blockType,
                Crawler: {
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
        if (newMasterLawBlock) {
            const masterParentId = newMasterLawBlock.id

            await createLawBlockFromArray({
                data: jobData.articles,
                codeName: newMasterLawBlock.title!,
                masterParentId,
                name: newMasterLawBlock.title!,
                masterLawBlock: newMasterLawBlock
            })
        }

    } else {
        const oldPageText = masterLawBlock.originalText
        const newPageText = jobData.pageText

        if (oldPageText?.trim() !== newPageText.trim()) {
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
                    isActive: true,
                    version: newBlockVersion,
                    title: crawlerParams.mainBlockTitle,
                    type: crawlerParams.blockType,
                    Crawler: {
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
                    data: jobData.articles,
                    codeName: newBlock.title!,
                    masterParentId,
                    name: newBlock.title!,
                    masterLawBlock: newBlock
                })
            }

        }

    }
}