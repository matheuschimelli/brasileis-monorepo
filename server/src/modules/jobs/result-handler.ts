import prisma from "@lib/prisma"

type ResultHandlerOptions = {
    queue: string
    lawBlockId: string
    source: string
    slug: string
    crawler: any

}

export const resultHandler = async (result: ResultHandlerOptions) => {

    const masterLawBlock = await prisma.lawBlock.findFirst({
        where: {
            parentBlock: null,
            source: result.source,
            slug: {
                value: result.slug
            },
            content: {
                every: {
                    value: {
                        not: null
                    }

                }
            },
            Crawler: {
                name: result.crawler.name
            }
        },
        include: {
            content: true
        }
    })

    if (!masterLawBlock) {
        const newMasterLawBlock = await prisma.lawBlock.create({
            data: {
                Crawler: {
                    connect: {
                        id: result.crawler.id
                    }
                },
                slug: {
                    connectOrCreate: {
                        where: {
                            value: result.slug
                        },
                        create: {
                            title: result.crawler.name,
                            value: result.slug,
                        }
                    }
                }
            }
        })
    }

}