import prisma from "@lib/prisma";
import { Job } from "bull";
import { removeOldBlocksFromESWorker } from "../jobs";

const handler = async (job: Job) => {
    const jobData = job.data
    const masterBlock = await prisma.lawBlock.findUnique({
        where: {
            id: jobData.masterBlockId
        },
        include: {
            content: {
                include: {
                    content: {
                        include: {
                            content: {
                                include: {
                                    content: {
                                        include: {
                                            content: {
                                                include: {
                                                    content: {
                                                        include: {
                                                            content: {
                                                                include: {
                                                                    content: true
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    if (masterBlock) {
        const contentBlocks = masterBlock.content

        for (const block of contentBlocks) {
            await removeOldBlocksFromESWorker.add({
                blockId: block.id
            })
        }
    }
}

export default handler