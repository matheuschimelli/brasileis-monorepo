import dayjs from '@lib/dayjs'
import prisma from '@lib/prisma'
import { createSlug } from '@modules/law-block/law-block-service'
import { Jurisprudencia } from '@modules/types'
import { stringToParagraph } from '@modules/utils/render'

const ITEMS_PER_PAGE = 10

export const findAll = async (tribunal: string, page: number) => {

    const skipItems = Number(page) ? (Number(page) - 1) * ITEMS_PER_PAGE : 0;

    const data = await prisma.jurisprudencia.findMany({
        where: {
            tribunal: {
                slug: tribunal
            }
        },
        orderBy: {
            dataJulgamento: "desc"
        },
        take: ITEMS_PER_PAGE,
        skip: skipItems,
        select: {
            id: true,
            tribunal: {
                select: {
                    name: true,
                    slug: true
                }
            },
            numeroProcesso: true,
            ementa: true,
            dataJulgamento: true,
            dataPublicacao: true,
            relator: true

        },

    })

    const foundTribunal = await prisma.tribunal.findUnique({
        where: {
            slug: tribunal,
        },
        select: {
            _count: true,
            name: true,
            slug: true
        }
    })

    const count = await prisma.jurisprudencia.count({
        where: {
            tribunal: {
                slug: tribunal
            }
        }
    })

    return { tribunal: foundTribunal, jurisprudencias: data, count, itemsPerPage: ITEMS_PER_PAGE }
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
    const skipItems = Number(page) ? (Number(page) - 1) * ITEMS_PER_PAGE : 0;

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
        take: ITEMS_PER_PAGE,
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

export const findAllTribunais = async () => {
    const tribunais = await prisma.tribunal.findMany({
        select: {
            name: true,
            slug: true
        }
    })
    return tribunais
}