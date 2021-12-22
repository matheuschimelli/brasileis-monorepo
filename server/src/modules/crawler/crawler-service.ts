import prisma from '@lib/prisma'
import { runQueue } from '@modules/jobs/jobs';

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

export const update = async ({
    id,
    cron,
    description,
    name,
    isUrlOnly,
    notifyUpdates,
    source
}: {
    id: string,
    cron: string,
    description: string,
    name: string,
    isUrlOnly: boolean,
    lawBlockId: string,
    notifyUpdates: boolean,
    source: string,
}) => {
    const updateCrawler = await prisma.crawler.update({
        where: {
            id
        },
        data: {
            cron,
            description,
            name,
            isUrlOnly,
            notifyUpdates,
            source,
        }
    })
    return updateCrawler
}

export const remove = async (id: string) => {
    const crawler = await prisma.crawler.delete({
        where: {
            id
        }
    })
    return crawler
}

export const runCrawler = async (crawlerId: string) => {
    const crawler = await prisma.crawler.findUnique({
        where: {
            id: crawlerId
        },
        include: {
            crawlerType: true
        }
    })
    if (crawler && crawler.crawlerType) {
        const crawlerType = crawler.crawlerType.name
        const queue = runQueue(crawlerType)
        if (queue) {
            await queue.add({})
            return { success: true }
        }
    }
    return { success: false }
}