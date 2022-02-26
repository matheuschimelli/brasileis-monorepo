import dayjs from '@lib/dayjs'
import prisma from '@lib/prisma'
import { Instancia, TipoJudiciario } from '@prisma/client'
type Jurisprudencia = {
    updated: boolean,
    source: string
    checkSum: string
    tipo: TipoJudiciario
    instancia: Instancia
    tribunal: string
    estado: string
    comarca: string
    dataJulgamento: Date
    dataPublicacao: Date
    ementa: string
    integra: string
    numeroProcesso: string
    orgaoJulgador: string
    relator: string
    segredoDeJustica: string
    keyWords: string

}

export const stringToParagraph = (str: string) => {
    const regLei = /(lei (.*)?.*(art\.|art|artigo|artigo\.)?( )?([0-9]{1,}))/gi
    const regexConstituicao = /((art\.|art|artigo\.|artigo)( ).*( da | do | de )(CRFB\/88|CF|carta magna|constituicao|constituicao federal|constituição federal))/gi;

    const arrayOfWords = str.split(" ")
    const regfinalWord = /(^\w{3,})(\.)$/g;
    const regWordWithPeriod = /([a-z]{4,})(\.)(.*)?/gi;

    const final = arrayOfWords.map((word, index, arr) => {
        const normalizedWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/(“|”)/g, "")
        const match = regWordWithPeriod.test(normalizedWord)

        if (word.includes("arts")) return word
        if (word.includes("movs")) return word

        if (index == 0) return `<p> ${word}`
        if (arr.length - 1 === index) return ` ${word} </p>`
        if (match) return `${word.replace(".", ".</p><br/><p>")}`
        return word
    })

    return {
        html: final.join(" "),
        json: final.join(" ").split(/<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/g).filter(e => !!e).filter(e => e !== "").map(e => e.trim())
    }
}


export const findAll = async () => {
    const data = await prisma.jurisprudencia.findMany({})
    return data
}

export const findOneById = async (id: string) => {
    const data = await prisma.jurisprudencia.findUnique({
        where: {
            id
        }
    })
    const jurisTitle = `${data?.tribunal} - ${data?.comarca} - ${data?.numeroProcesso}`



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