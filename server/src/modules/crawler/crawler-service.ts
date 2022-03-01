import { processOnWorker } from '@lib/bull';
import prisma from '@lib/prisma'
import { CrawlerInput } from '@modules/types';

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
        },
        include: {
            categories: true
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
    slug,
    blockType,
    categories
}: CrawlerInput) => {
    const getCategories = () => {
        return categories.map((category: any) => {
            if (category.id) return { id: category.id }
            return { id: category }
        })
    }
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
            version: Number(version),
            slug,
            blockType,
            crawlerType: {
                connect: {
                    id: crawlerTypeId
                }
            },
            categories: {
                connect: getCategories()

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
    slug,
    blockType,
    categories
}: CrawlerInput) => {
    console.log("CATEGORIES", categories)
    const getCategories = () => {
        return categories.map((category: any) => {
            if (category.id) return { id: category.id }
            return { id: category }
        })
    }

    console.log(getCategories())

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
            version: Number(version),
            slug,
            blockType,
            crawlerType: {
                connect: {
                    id: crawlerTypeId
                }
            },
            categories: {
                set: getCategories()
            }
        },
        include: {
            categories: true
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