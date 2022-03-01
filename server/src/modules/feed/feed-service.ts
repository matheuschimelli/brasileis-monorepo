import prisma from '@lib/prisma'
import { FeedItem } from '@modules/types'


export const createFeed = async (name: string) => {
    await prisma.feed.create({
        data: {
            name: name,
        }
    })
}

export const createFeedItem = async ({ title, content, topicId, lawBlockId }: FeedItem) => {
    const newFeedItem = await prisma.feedItem.create({
        data: {
            title,
            content,
            topic: {
                connect: {
                    id: topicId
                }
            },
            lawBlock: {
                connect: {
                    id: lawBlockId
                }
            }

        }
    })

    return newFeedItem
}

export const generateUserFeed = async (userId: string, take: number, skip: number) => {
    const feedItems = await prisma.feedItem.findMany({
        skip,
        take,
        where: {
            topic: {
                followers: {
                    some: {
                        id: userId
                    }
                }
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            topic: {
                select: {
                    id: true,
                    name: true,
                    description: true,
                    updatedAt: true,
                    lawBlock: {
                        select: {
                            id: true,
                            name: true,
                            source: true,
                            updatedAt: true
                        }
                    }
                }
            },
            feed: {
                select: {
                    id: true,
                    name: true,
                    updatedAt: true
                }
            },
            lawBlock: {
                select: {
                    id: true,
                    title: true,
                    value: true,
                    slug: true,
                    name: true,
                    source: true,
                    updatedAt: true,
                    createdAt: true,
                    version: true
                }
            },
            readBy: false
        }
    })

    for (const feed of feedItems) {
        await prisma.feedItem.update({
            where: {
                id: feed.id
            },
            data: {
                readBy: {
                    connect: {
                        id: userId
                    }
                }
            }
        })
    }

    return feedItems
}