import { processOnWorker } from '@lib/bull';
import prisma from '@lib/prisma'

type CrawlerInput = {
    id?: string
    cron: string,
    description: string,
    name: string,
    lawBlockId: string,
    source: string,
    crawlerTypeId: string,
    slug: string,
    mainBlockTitle: string,
    mainBlockDescription: string,
    version: number
    isUrlOnly?: boolean
    notifyUpdates?: boolean

}
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

export const create = async ({
    cron,
    description,
    name,
    source,
    mainBlockDescription,
    mainBlockTitle,
    version,
    crawlerTypeId,
    slug
}: CrawlerInput) => {
    const newCrawler = await prisma.crawler.create({
        data: {
            cron,
            description,
            name,
            isUrlOnly: false,
            notifyUpdates: true,
            source,
            mainBlockTitle,
            mainBlockDescription,
            version,
            slug,
            crawlerType: {
                connect: {
                    id: crawlerTypeId
                }
            }
        }
    })
    return newCrawler
}

export const update = async ({
    id,
    cron,
    description,
    name,
    source,
    mainBlockDescription,
    mainBlockTitle,
    version,
    isUrlOnly,
    notifyUpdates,
    crawlerTypeId,
    slug
}: CrawlerInput) => {
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
            mainBlockTitle,
            mainBlockDescription,
            version,
            slug,
            crawlerType: {
                connect: {
                    id: crawlerTypeId
                }
            }
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
        await processOnWorker({
            id: crawler.id,
            queue: crawler.crawlerType.name,
            jobData: {
                ...crawler
            }
        })
        return { success: true }
    }
    return { success: false }
}