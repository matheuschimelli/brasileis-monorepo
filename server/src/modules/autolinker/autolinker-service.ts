import prisma from "@lib/prisma";
import { generateInternalSearch } from "@modules/elasticsearch/elasticsearch-service";
import { findAllWithoutPagination, findOneById } from '@modules/jurisprudencia/jurisprudencia-service'

/**
 * Autolinker
 * 
 * Autolinker tries to atomatically look for relations between
 * LawBlock database and Jurisprudencia database.
 * 
 * It looks for patterns similarity using RegEx (regular expressions) but
 * it can and should be changed to NLP or Machine Learning.
 * 
 * How it works.
 * 
 * 1. Get all Jurisprudencias on database Jurisprudencia
 * 2. Send to a worker processor to process data
 * 3. The processor will divide a given string into an array of strings
 * 4. Each string will be analised using different regex to try to find law citations
 * 5. when a citation is found, the function will do a search on ElasticSearch to find the give law citation
 * 6. It will return the first result and with the result ID, it will add an relation between LawBlock <-> Jurisprudencia
 * 
 */


export const allJurisprudencias = async () => {
    const jurisprudencias = await findAllWithoutPagination()

    if (!jurisprudencias || jurisprudencias.length == 0) throw new Error("There is no Jurisprudencias on database.")
    return jurisprudencias

}

/**
 * 
 * @param id @type string
 */
export const processJurisprudencia = async (id: string) => {
    const jurisprudencia = await findOneById(id)

    if (!jurisprudencia) throw new Error(`Jurisprudencia with given id ${id} was not found.`)

    let ementa: string | string[] | null | undefined = jurisprudencia.ementa

    if (!ementa) throw new Error(`Ementa for Jurisprudencia with given id ${id} was not found.`)

    ementa = ementa
        .split(" ")
        .map(e => e.toLowerCase())
        .filter(e => !!e)
        .filter(e => e !== "")


}

export const extractLeiFromJurisprudencia = (jurisprudencia: string) => {

    jurisprudencia = jurisprudencia.toLocaleLowerCase()

    const regexes = [{
        1: `((CPP|CPC15|CPC15|CPC|LCP|CC|CP)(\.)? (art)(\.)?( )?([0-9.]{1,7})(?:[^§]{1,20})?(§\s?\d{1,3})?.{1,20}?)`
    }, {
        2: `((SUMULA|SÚMULA)(\.)?( )?([0-9.]{1,7})( )?(do|da|de|dos|das)( )?(superior tribunal de justiça|supremo tribunal federal|conselho nacioanl de justiça|stf|stj|cnj))`
    }, {
        3: `(art\.?|artigos?|arts\.?) ([0-9.]{1,7})(?:[^§]{1,20})?(§\s?\d{1,3})?.{1,20}?(CPC|CPP|C[oOÓó]digo de Processo Penal|C[oOÓó]digo de Processo Civil|C[oOÓó]digo Penal|CP(?!C)|CPC|CTB|C[oOÓó]digo de Tr[âa]nsito Brasileiro|Lei de Execuções Penais|Constituição da República|[0-9]{1,3}.[0-9]{3}(\/[0-9]{2,4})?)`
    }]


    const matches = regexes.map((reg) => {
        const objectKey = Object.keys(reg)[0]

        //@ts-ignore 😎
        const regex = new RegExp(reg[objectKey], "gmi")

        const matches = jurisprudencia.match(regex)

        if (matches && matches.length !== 0) {
            return matches.map(e => e.toLowerCase().replace("’", "").replace("‘", ""))
        }
    })

    const filteredArrays = matches.filter(e => !!e && e.length !== 0)

    //@ts-ignore
    return [].concat.apply([], filteredArrays);

}

export const getBlocks = async (lawReferecences: string[]) => {
    try {
        console.log("lawReferecences", lawReferecences)

        const result = lawReferecences.map(async (lawReferece) => {
            const { results } = await generateInternalSearch(lawReferece, 1, null)
            console.log("results", results)

            if (results && results.length !== 0) {

                const firstResult = results[0]
                console.log("FIRST RESULT", firstResult)

                const lawBlock = await prisma.lawBlock.findUnique({
                    where: {
                        id: firstResult._id
                    }
                })
                if (lawBlock) return { id: lawBlock.id, data: lawReferece }
            }
        })

        const resultsPromised = await Promise.all(result)
        console.log("resultsPromised", resultsPromised)

        return resultsPromised

    } catch (error) {
        console.log("ERRRORRR")
        console.log(error)
    }

}