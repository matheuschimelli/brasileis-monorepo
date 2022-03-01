import prisma from '@lib/prisma'
import { Topic } from '@modules/types'


export const findAll = async () => {
    const allTopics = await prisma.category.findMany({})
    return allTopics
}

export const findOneById = async (id: string) => {
    const category = await prisma.category.findUnique({
        where: {
            id
        },
        include: {
            lawBlocks: true,
            feedItems: true,
        }
    })

    return category
}

export const create = async (topicData: Topic) => {

    const newTopic = await prisma.category.create({
        data: {
            name: topicData.description!,
            description: topicData.description!,
        }
    })
    return newTopic
}

export const update = async (category: Topic) => {
    const updateTopic = await prisma.category.update({
        where: {
            id: category.id!
        },
        data: {
            name: category.description!,
            description: category.description!,
        }
    })
    return updateTopic
}

export const remove = async (id: string) => {
    const removeTopic = await prisma.category.delete({
        where: {
            id
        }
    })
    return removeTopic
}