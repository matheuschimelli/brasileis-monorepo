import prisma from '@lib/prisma'
import { BlockType } from "@prisma/client"
import { upsert as elasticSearchUpsert, remove as elasticSearchRemove } from '@modules/elasticsearch/elasticsearch-service'
import slugify from 'slugify'
import { createFeedItem } from '@modules/feed/feed-service'

type CreateLawBlockFromArrayParams = {
    data: any[]
    masterParentId: string
    name: string
    codeName: string
    masterLawBlock: any
    version?: number
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
export const getTotalOfBlocks = async () => {
    return await prisma.lawBlock.count()
}

export const getAllBlocksIds = async () => {
    return await prisma.lawBlock.findMany({
        select: {
            id: true
        }
    })
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

export const createSlug = (str: string) => {

    return slugify(str, {
        replacement: '-',
        remove: /[*+~()'"!:@]/g,
        lower: true,
        strict: true,
        locale: 'vi',
        trim: true
    })
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

async function insertArticle({ article, parentId, codeName, masterParentId, version }: {
    article: any,
    parentId?: string,
    codeName: string,
    masterParentId: string
    version?: number
}): Promise<{ id: string, name: string, type: BlockType }> {

    const blockVersion = () => version ? version : 1

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
            version: blockVersion(),
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
export async function createLawBlockFromArray({ data, masterParentId, codeName, version }: CreateLawBlockFromArrayParams) {

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
            const { id, name, type } = await insertArticle({ article, codeName, parentId: masterParentId, masterParentId, version })
            lastInsert.id = id
            lastInsert.name = name
            lastInsert.type = 'ARTIGO_LEI'
            lastArticleId = id
        }

        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = 'PARAGRAFO_UNICO_LEI'
            }
        }

        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = 'PARAGRAFO_LEI'
                lastParagraphId = id
            }
        }
        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        // Lida as hipóteses possíveis de parágrafos

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastParagraphId = id
            }
        }

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        // Lida com as hipóteses possíveis de incisos
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
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
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, parentId: lastArticleId, masterParentId, version })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

    }
}
export async function updateLawBlockFromArray(
    { newData, masterBlockId, topicId }: UpdateParams) {

    const masterBlockData = await prisma.lawBlock.findUnique({
        where: { id: masterBlockId }
    })

    if (masterBlockData) {
        await createLawBlockFromArray({
            data: newData!,
            masterLawBlock: masterBlockData,
            masterParentId: masterBlockData.id,
            version: masterBlockData.version,
            name: masterBlockData.title!,
            codeName: masterBlockData.title!
        })
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

export const findBlockForReindex = async (id: string) => {
    const block = await prisma.lawBlock.findUnique({
        where: {
            id
        },
        include: {
            belongsTo: {
                select: {
                    title: true,
                    name: true
                }
            },
            slug: {
                select: {
                    value: true
                }
            }
        }
    })
    /**
     * 
     *     await elasticSearchUpsert({
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

     */

    return block
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

            if (blockType != "ARTIGO_LEI") {
                const parentArticleType = block.parentBlock?.type!
                const parentArticleName = block.parentBlock?.name

                return `${parentBlockTitle} ${generateTextType(parentArticleType)} ${parentArticleName} ${generateTextType(blockType)} ${renderName(block.name!)}`

            }

            if (blockType = "ALINEA_LEI") {
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

export const getIndexOfLawBlocks = async () => {

    const codigoBlocks = await prisma.lawBlock.findMany({
        where: {
            type: 'CODIGO',
            isActive: true,
        },
        orderBy: {
            title: 'asc'
        },
        select: {
            title: true,
            id: true,
            slug: {
                select: {
                    value: true
                }
            }
        }
    })

    return {
        codigo: codigoBlocks
    }
}