// @ts-check
import prisma from "@lib/prisma";
import { findAllWithoutPagination, findOneById } from '@modules/jurisprudencia/jurisprudencia-service'
import { } from 'node-nlp'

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