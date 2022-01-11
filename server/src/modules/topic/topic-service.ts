import prisma from '@lib/prisma'

type Topic = {
    id?: string
    name?: string
    description?: string
}
export const findAll = async () => {
    const allTopics = await prisma.topic.findMany({})
    return allTopics
}

export const findOneById = async (id: string) => {
    const topic = await prisma.topic.findUnique({
        where: {
            id
        },
        include: {
            lawBlock: true,
            feedItems: true,
        }
    })

    return topic
}

export const create = async (topicData: Topic) => {

    const newTopic = await prisma.topic.create({
        data: {
            name: topicData.description!,
            description: topicData.description!,
        }
    })
    return newTopic
}

export const update = async (topic: Topic) => {
    const updateTopic = await prisma.topic.update({
        where: {
            id: topic.id!
        },
        data: {
            name: topic.description!,
            description: topic.description!,
        }
    })
    return updateTopic
}

export const remove = async (id: string) => {
    const removeTopic = await prisma.topic.delete({
        where: {
            id
        }
    })
    return removeTopic
}