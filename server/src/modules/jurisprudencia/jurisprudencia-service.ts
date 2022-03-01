import dayjs from '@lib/dayjs'
import prisma from '@lib/prisma'
import { createSlug } from '@modules/law-block/law-block-service'
import { Jurisprudencia } from '@modules/types'
import { stringToParagraph } from '@modules/utils/render'

export const findAll = async () => {
    const data = await prisma.jurisprudencia.findMany({})
    return data
}

export const findOneById = async (id: string) => {
    const data = await prisma.jurisprudencia.findUnique({
        where: {
            id
        },
        include: {
            tribunal: true
        }
    })

    const jurisTitle = `${data?.tribunal?.name} - ${data?.comarca} - ${data?.numeroProcesso}`

    console.log(stringToParagraph(data?.integra!))

    return {
        title: jurisTitle,
        ...data,
        integra: stringToParagraph(data?.integra!).json,
    }
}

export const search = async (searchString: string) => {
    const data = await prisma.jurisprudencia.findMany({
        where: {
            ementa: {
                search: searchString
            }
        }
    })
    return data
}

export const create = async (newJuris: Jurisprudencia) => {
    const data = await prisma.jurisprudencia.create({
        data: {

            ...newJuris,
            tribunal: {
                connectOrCreate: {
                    where: {
                        name: newJuris.tribunal,
                        slug: createSlug(newJuris.tribunal)
                    },
                    create: {
                        name: newJuris.tribunal,
                        slug: createSlug(newJuris.tribunal)
                    }
                }
            }
        }
    })
    return data
}

export const update = async (id: string, juris: Jurisprudencia) => {
    const data = await prisma.jurisprudencia.update({
        where: {
            id
        },
        data: {
            ...juris,
            tribunal: {
                connectOrCreate: {
                    where: {
                        name: juris.tribunal,
                        slug: createSlug(juris.tribunal)
                    },
                    create: {
                        name: juris.tribunal,
                        slug: createSlug(juris.tribunal)
                    }
                }
            }
        }
    })
    return data
}

export const remove = async (id: string) => {
    const data = await prisma.jurisprudencia.delete({
        where: {
            id
        }
    })
    return data
}

export const feed = async ({ page }: { page: Number }) => {
    const itemPerPage = 8
    const skipItems = Number(page) ? (Number(page) - 1) * itemPerPage : 0;

    const today = dayjs().toISOString()
    const fiveDaysAgo = dayjs().subtract(5, 'day').toISOString()

    const latest = await prisma.jurisprudencia.findMany({
        where: {
            dataPublicacao: {
                lte: today,
                gte: fiveDaysAgo
            }
        },
        orderBy: {
            dataPublicacao: 'desc'
        },
        take: itemPerPage,
        skip: skipItems,
        select: {
            id: true,
            numeroProcesso: true,
            ementa: true,
            tribunal: true,
            dataPublicacao: true,
            dataJulgamento: true,
            createdAt: true,
            updated: true
        }
    })
    return latest
}