import prisma from '@lib/prisma'
import { BlockType } from "@prisma/client"
import { upsert as elasticSearchUpsert, remove as elasticSearchRemove } from '@modules/elasticsearch/elasticsearch-service'
import slugify from 'slugify'
import { createFeedItem } from '@modules/feed/feed-service'

type IterateInsertParams = {
    data: any[]
    masterParentId: string
    name: string
    codeName: string
    masterLawBlock: any
}

type UpdateParams = {
    oldData?: any[]
    newData?: any[]
    parentId?: string
    name?: string
    codeName?: string
    masterLawBlock?: any,
    masterBlockId?: string,
    topicId: string
}
export const allBlocks = async () => {
    return await prisma.lawBlock.findMany({
        include: {
            content: true,
            _count: true,

        }
    })
}
/**
 * Como indexar um código, decreto ou etc
 * 1. crie um lawBlock inicial do tipo da lei que está sendo criada ex: CODIGO
 * 2. Com o id retornado 
 */

const createSlug = (str: string) => {
    return slugify(str)

}

const handleArticleType = (articleType: BlockType) => {
    if (articleType == 'ARTIGO_LEI') return 'art'
    if (articleType == 'CODIGO') return 'c'
    if (articleType == 'DECRETO') return 'dec'
    if (articleType == 'INCISO_LEI') return 'inciso'
    if (articleType == 'PARAGRAFO_LEI') return 'paragrafo'
    if (articleType == 'PARAGRAFO_UNICO_LEI') return 'paragrafo unico'
    if (articleType == 'ALINEA_LEI') return 'alinea'
}

async function insertArticle({ article, parentId, codeName, masterParentId }: {
    article: any,
    parentId?: string,
    codeName: string,
    masterParentId: string
}): Promise<{ id: string, name: string, type: BlockType }> {
    const newArticle = await prisma.lawBlock.create({
        data: {
            ...(parentId && {
                parentBlock: {
                    connect: {
                        id: parentId
                    }
                }
            }),
            index: article.index,
            type: article.type as BlockType,
            name: article.name,
            title: `${codeName} artigo ${article.name}`,
            value: article.value,
            originalText: article.originalText,
            searchText: article.searchText,
            searchString: article.searchString,
            identifier: article.identifier,
            source: article.source,
            slug: {
                connectOrCreate: {
                    where: {
                        value: article.slug.value
                    },
                    create: {
                        value: article.slug.value,
                        title: 'CDC'
                    }
                }
            },
            urlSlug: createSlug(`${article.slug.value} ${article.name} ${handleArticleType(article.type)} `),
            belongsTo: {
                connect: {
                    id: masterParentId
                }
            }
        }
    })

    await elasticSearchUpsert({
        docId: newArticle.id,
        document: {
            blockType: article.type as BlockType,
            name: article.name,
            title: `${codeName} artigo ${article.name}`,
            value: article.value,
            originalText: article.originalText,
            searchText: article.searchText,
            searchString: article.searchString,
            identifier: article.identifier,
            source: article.source,
            slug: newArticle.urlSlug!
        }
    })

    return {
        id: newArticle.id,
        name: newArticle.name!,
        type: article.type
    }
}
export async function createLawBlockFromArray({ data, masterParentId, codeName }: IterateInsertParams) {

    var lastInsert = {
        type: null,
        id: null
    } as {
        id: null | string,
        type: BlockType | null,
        name: string | null
    }

    var lastArticleId: string | null = null
    var lastInciseId: string | null = null
    var lastParagraphId: string | null = null

    const dataToCreate = data
    /**
     * artigo
     *  - paragrafo unico
     * 
     *  - paragrafo
     *  - - inciso
     *  - - - alinea
     * 
     *  - - inciso
     * 
     *  - - inciso
     *  - - - alinea
     */
    for (const article of dataToCreate) {

        // Lida com as hipóteses possíveis de artigos

        if (article.type as BlockType == 'ARTIGO_LEI') {
            const { id, name, type } = await insertArticle({ article, codeName, parentId: masterParentId, masterParentId })
            lastInsert.id = id
            lastInsert.name = name
            lastInsert.type = 'ARTIGO_LEI'
            lastArticleId = id
        }

        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = 'PARAGRAFO_UNICO_LEI'
            }
        }

        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = 'PARAGRAFO_LEI'
                lastParagraphId = id
            }
        }
        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        // Lida as hipóteses possíveis de parágrafos

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastParagraphId = id
            }
        }

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        // Lida com as hipóteses possíveis de incisos
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        // Lida com as hipóteses possíveis de alíneas
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

    }
}
export async function updateLawBlockFromArray(
    { newData, masterBlockId, topicId }: UpdateParams) {

    const masterBlockData = await prisma.lawBlock.findUnique({ where: { id: masterBlockId } })

    if (masterBlockData) {
        for (const newArticle of newData!) {
            const oldArticle = await prisma.lawBlock.findFirst({
                where: {
                    belongsTo: {
                        id: masterBlockId,
                    },
                    type: newArticle.type,
                    source: newArticle.source,
                    title: newArticle.title,
                    name: newArticle.name,
                    identifier: newArticle.identifier,
                    slug: {
                        value: {
                            contains: newArticle.slug
                        }
                    }
                },
                include: {
                    belongsTo: {
                        select: {
                            name: true,

                        }
                    }
                }
            })
            if (oldArticle) {
                if (oldArticle.value !== newArticle.value) {

                    const articleToBeUpdated = await prisma.lawBlock.findUnique({
                        where: {
                            id: oldArticle.id
                        }
                    })

                    if (articleToBeUpdated) {
                        // crate a new lawblock and replace the old onw with the new one

                        const articleUpdate1 = await prisma.lawBlock.create({

                            data: {
                                ...(articleToBeUpdated.parentBlockId && {
                                    parentBlock: {
                                        connect: {
                                            id: articleToBeUpdated.parentBlockId
                                        }
                                    }
                                }),
                                isActive: true,
                                index: articleToBeUpdated.index,
                                type: newArticle.type as BlockType,
                                name: newArticle.name,
                                title: `${masterBlockData.title} artigo ${newArticle.name}`,
                                value: newArticle.value,
                                originalText: newArticle.originalText,
                                searchText: newArticle.searchText,
                                searchString: newArticle.searchString,
                                identifier: newArticle.identifier,
                                source: newArticle.source,
                                slug: {
                                    connectOrCreate: {
                                        where: {
                                            value: newArticle.slug.value
                                        },
                                        create: {
                                            value: newArticle.slug.value,
                                            title: `${masterBlockData.title}`
                                        }
                                    }
                                },
                                urlSlug: createSlug(`${newArticle.slug.value} ${newArticle.name} ${handleArticleType(newArticle.type)} `),
                                belongsTo: {
                                    connect: {
                                        id: masterBlockData.id
                                    }
                                }
                            }
                        })

                        // set the old article as outdated
                        const articleUpdate = await prisma.lawBlock.update({
                            where: {
                                id: oldArticle.id
                            },
                            data: {
                                isActive: false,
                                index: null,
                                value: newArticle.value,
                                originalText: newArticle.originalText,
                                title: 'Artigo alterado ou revogado'
                            }
                        })

                        await createFeedItem({
                            title: `Alteração de artigo do ${oldArticle.belongsTo?.name}`,
                            content: JSON.stringify({
                                description: `O artigo ${oldArticle.name} do ${oldArticle.belongsTo?.name} foi alterado`,
                                lawBlockId: `${articleUpdate.id}`,
                                importance: 'hight'
                            }),
                            topicId: topicId,
                            lawBlockId: articleUpdate.id
                        })
                    }
                }
            }
        }
    }
}

export const findAll = async (id: string, skip: number, take?: number) => {
    const block = await prisma.lawBlock.findFirst({
        where: {
            id
        },
        include: {
            slug: true,
            ownsBlocks: {
                skip,
                take: take || 10,
                orderBy: {
                    index: 'asc'
                }
            }
        }
    })

    if (block) {
        console.log(block.ownsBlocks)

        return {
            details: {
                title: block.title,
                description: block.value,
                updatedAt: block.updatedAt,
                createdAt: block.createdAt,
                slug: block.slug?.value,
                blockType: block.type
            },
            content: block.ownsBlocks
        }
    }
}

export const generateTextType = (articleType: BlockType) => {
    if (articleType == 'ARTIGO_LEI') return 'artigo'
    if (articleType == 'CODIGO') return 'código'
    if (articleType == 'DECRETO') return 'decreto'
    if (articleType == 'INCISO_LEI') return 'inciso'
    if (articleType == 'PARAGRAFO_LEI') return 'parágrafo'
    if (articleType == 'ALINEA_LEI') return 'alínea'
    return ''
}

const renderName = (name: string) => {

    const number = Number(name)

    if (number) {
        if (number < 11) {
            return `${name}°`
        }
    }
    return name
}

export const findBlockById = async (id: string) => {
    const block = await prisma.lawBlock.findUnique({
        where: {
            id: id
        },
        include: {
            slug: {
                select: {
                    title: true,
                    value: true
                }
            },
            belongsTo: {
                select: {
                    title: true,
                    name: true,
                    type: true,
                }
            },
            parentBlock: {
                select: {
                    title: true,
                    name: true,
                    value: true,
                    type: true,
                    id: true,
                    updatedAt: true,
                    createdAt: true
                }
            },
            content: {
                orderBy: {
                    index: 'asc'
                }
            },
        }

    })

    if (block) {


        const generateTitle = (parentBlockTitle: string, blockType: BlockType) => {

            if (blockType !== "ARTIGO_LEI") {
                const parentArticleType = block.parentBlock?.type!
                const parentArticleName = block.parentBlock?.name

                return `${parentBlockTitle} ${generateTextType(parentArticleType)} ${parentArticleName} ${generateTextType(blockType)} ${renderName(block.name!)}`

            }

            return `${parentBlockTitle} ${generateTextType(blockType)} ${renderName(block.name!)}`
        }
        //  ${block.parentBlock ? generateTitle(block.parentBlock.type) : ''} ${block.parentBlock ? block.parentBlock.name : ''} ${generateTitle(block.type)} ${block.name}
        return {
            details: {
                title: generateTitle(block?.belongsTo?.title!, block.type),
                description: block.value,
                updatedAt: block.updatedAt,
                createdAt: block.createdAt,
                slug: block.slug?.value,
                blockType: block.type
            },
            block: block
        }
    }
    throw new Error("Nada encontrado")
}

export const search = async (query: string) => {
    const result = await prisma.lawBlock.findMany({
        where: {
            value: {
                search: query
            }
        }

    })
    return result
}


export const removeLawBlock = async (id: string) => {

    const lawBlock = await prisma.lawBlock.delete({
        where: {
            id
        }
    })
    await elasticSearchRemove({ documentId: lawBlock.id })
    return lawBlock
}

export const contentLawBlockNumbers = async (id: string) => {
    const lawBlock = await prisma.lawBlock.findFirst({
        where: {
            id
        },
        select: {
            name: true,
            ownsBlocks: {
                select: {
                    name: true,
                    id: true,
                    slug: {
                        select: {
                            title: true,
                            value: true
                        }
                    }
                },
                where: {
                    type: 'ARTIGO_LEI'
                },
                orderBy: {
                    index: 'asc'
                },

            },
            value: true,
        }
    })
    if (!lawBlock) throw new Error("Bloco de lei não encontrado")

    return lawBlock.ownsBlocks
}