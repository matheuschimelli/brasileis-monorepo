import prisma from '@lib/prisma'
import { BlockType } from "@prisma/client"

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
            }
        }
    })

    return {
        id: newArticle.id,
        name: newArticle.name!,
        type: article.type
    }
}
async function iterate(arr: any[]) {
    var codeName = 'Código de Defesa do Consumidor'
    var masterParentId = "ckx1xpqsk0044wzu8jbf3jpil"

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
    for (const article of arr) {

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
export const createLawBlock = async (data: any[]) => {
    iterate(data)
    return data[0]
}

export const removeLawBlock = async (id: string) => {

    const lawBlock = await prisma.lawBlock.delete({
        where: {
            id
        }
    })
    return lawBlock
}