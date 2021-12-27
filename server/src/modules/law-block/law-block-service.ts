import prisma from '@lib/prisma'
import { BlockType } from "@prisma/client"
import { upsert as elasticSearchUpsert, remove as elasticSearchRemove } from '@modules/elasticsearch/elasticsearch-service'
import slugify from 'slugify'

type IterateInsertParams = {
    data: any[]
    masterParentId: string
    name: string
    codeName: string
    masterLawBlock: any
}

type UpdateParams = {
    oldData: any[]
    newData: any[]
    masterParentId: string
    name: string
    codeName: string
    masterLawBlock: any
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
}

async function insertArticle({ article, masterParentId, codeName }: {
    article: any,
    masterParentId?: string,
    codeName: string
}): Promise<{ id: string, name: string, type: BlockType }> {
    const newArticle = await prisma.lawBlock.create({
        data: {
            ...(masterParentId && {
                parentBlock: {
                    connect: {
                        id: masterParentId
                    }
                }
            }),
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
                connect: {
                    value: article.slug.value
                }
            },
            urlSlug: createSlug(`${article.slug.value} ${article.name} ${handleArticleType(article.type)} `)
        }
    })

    await elasticSearchUpsert({
        docId: newArticle.id,
        document: {
            type: article.type as BlockType,
            name: article.name,
            title: `${codeName} artigo ${article.name}`,
            value: article.value,
            originalText: article.originalText,
            searchText: article.searchText,
            searchString: article.searchString,
            identifier: article.identifier,
            source: article.source,
            slug: newArticle.urlSlug
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
            const { id, name, type } = await insertArticle({ article, codeName, masterParentId })
            lastInsert.id = id
            lastInsert.name = name
            lastInsert.type = 'ARTIGO_LEI'
            lastArticleId = id
        }

        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = 'PARAGRAFO_UNICO_LEI'
            }
        }

        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = 'PARAGRAFO_LEI'
                lastParagraphId = id
            }
        }
        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        // Lida as hipóteses possíveis de parágrafos

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastParagraphId = id
            }
        }

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastParagraphId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastParagraphId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        // Lida com as hipóteses possíveis de incisos
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastInciseId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
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
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastInciseId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

    }
}
export async function updateLawBlockFromArray({
    oldData,
    newData,
    masterParentId,
    codeName }: UpdateParams) {

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
    for (const article of oldData) {

        // Lida com as hipóteses possíveis de artigos

        if (article.type as BlockType == 'ARTIGO_LEI') {
            const { id, name, type } = await insertArticle({ article, codeName, masterParentId })
            lastInsert.id = id
            lastInsert.name = name
            lastInsert.type = 'ARTIGO_LEI'
            lastArticleId = id
        }

        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = 'PARAGRAFO_UNICO_LEI'
            }
        }

        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = 'PARAGRAFO_LEI'
                lastParagraphId = id
            }
        }
        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'ARTIGO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        // Lida as hipóteses possíveis de parágrafos

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastParagraphId = id
            }
        }

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastParagraphId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        else if (lastInsert.type == 'PARAGRAFO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastParagraphId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

        // Lida com as hipóteses possíveis de incisos
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'ALINEA_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastInciseId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
                lastInciseId = id
            }
        }
        else if (lastInsert.type == 'INCISO_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
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
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastInciseId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'INCISO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'PARAGRAFO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }
        else if (lastInsert.type == 'ALINEA_LEI' && article.type as BlockType == 'PARAGRAFO_UNICO_LEI') {
            if (lastInsert.id) {
                //@ts-ignore
                const { id, name, type } = await insertArticle({ article, codeName, masterParentId: lastArticleId })
                lastInsert.id = id
                lastInsert.name = name
                lastInsert.type = type
            }
        }

    }
}

export const findBlockAndAllContentById = async (id: string) => {
    //@TODO improve this content include loop
    const blocks = await prisma.lawBlock.findUnique({
        where: {
            id: id
        },
        include: {
            content: {
                include: {
                    content: {
                        include: {
                            content: {
                                include: {
                                    content: {
                                        include: {
                                            content: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    return blocks
}
export const findBlockById = async (id: string) => {
    const block = await prisma.lawBlock.findUnique({
        where: {
            id: id
        },
        include: {
            parentBlock: true,
            content: {
                include: {
                    content: true
                }
            }
        }

    })
    return block
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