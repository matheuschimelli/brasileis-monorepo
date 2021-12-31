import prisma from '@lib/prisma'

export const index = async (page: number) => {
    const skipItems = Number(page) ? (Number(page) - 1) * 10 : 0;

    const crawlers = await prisma.crawlerType.findMany({
        skip: skipItems,
        take: 10
    })
    return crawlers
}

export const show = async (id: string) => {
    const crawler = await prisma.crawlerType.findUnique({
        where: {
            id: id
        }
    })
    return crawler
}

export const create = async ({
    name,
    description,
    customCode
}: {
    name: string,
    description: string,
    customCode: string
}) => {
    const newCrawler = await prisma.crawlerType.create({
        data: {
            name,
            description,
            customCode
        }
    })
    return newCrawler
}

export const update = async ({
    id,
    name,
    description,
    customCode
}: {
    id: string,
    name: string,
    description: string,
    customCode: string
}) => {
    const newCrawler = await prisma.crawlerType.update({
        where: {
            id
        },
        data: {
            name,
            description,
            customCode
        }
    })
    return newCrawler
}


export const remove = async (id: string) => {
    const crawler = await prisma.crawlerType.delete({
        where: {
            id
        }
    })
    return crawler
}