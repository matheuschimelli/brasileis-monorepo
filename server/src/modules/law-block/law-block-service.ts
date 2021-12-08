import prisma from '@lib/prisma'
import { BlockType, LawBlock } from "@prisma/client"

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


export const parseArticle = async (article: any) => {
    console.log("ITERATINGS")
    console.log(article)

}
// function iterate(arr) {
//     for (const item of arr) {
//         if (item.content && item.content.length !== 0) {
//             tempArray.push(item)
//             console.log(item)
//             iterate(item.content)
//         } else {
//             tempArray.push(item)

//             console.log(item)
//         }
//     }
// }
const tempArray = []

function iterate(arr: any[], callBack?: (data: any) => Promise<void>) {

    for (const item of arr) {
        if (item.content && item.content.length !== 0) {
            tempArray.push(item)
            console.log(item)
            iterate(item.content)
        } else {
            tempArray.push(item)
            console.log(item)
        }
    }
}
export const createLawBlock = async (data: any[]) => {
    iterate(data, parseArticle)
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