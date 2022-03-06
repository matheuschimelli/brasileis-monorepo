
/**
 * Transforms a string without any paragraph into paragraphs for a better reading experience.
 * 
 * @param str 
 * @returns 
 */
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