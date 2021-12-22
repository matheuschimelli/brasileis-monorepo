import prisma from '@lib/prisma'

export const index = async (page: number) => {
    const skipItems = Number(page) ? (Number(page) - 1) * 10 : 0;

    const crawlers = await prisma.crawler.findMany({
        skip: skipItems,
        take: 10
    })
    return crawlers
}

export const show = async (id: string) => {
    const crawler = await prisma.crawler.findUnique({
        where: {
            id: id
        }
    })
    return crawler
}

export const create = async ({ cron,
    description,
    name,
    isUrlOnly,
    notifyUpdates,
    source
}: {
    cron: string,
    description: string,
    name: string,
    isUrlOnly: boolean,
    lawBlockId: string,
    notifyUpdates: boolean,
    source: string,
}) => {
    const newCrawler = await prisma.crawler.create({
        data: {
            cron,
            description,
            name,
            isUrlOnly,
            notifyUpdates,
            source,
        }
    })
    return newCrawler
}

export const remove = async (id: string) => {
    const crawler = await prisma.crawler.findUnique({
        where: {
            id
        }
    })
    return crawler
}