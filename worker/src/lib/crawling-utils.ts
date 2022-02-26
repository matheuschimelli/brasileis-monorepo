import dayjs from './dayjs'

// TJPR extract date
export function getLinksWithDateFromTJPR() {
    const tableContent = Array.from(document.querySelector(".resultTable.jurisprudencia tbody")!.children)
    const tableLines = tableContent.map(e => e.querySelector(".juris-tabela-propriedades")).filter(e => !!e)

    const textFromTableLines = tableLines.map(el => ({
        url: el!.querySelector("a")!.href,
        text: el!.textContent!
    }))

    function getTableDate(text: string) {
        const regexDate = /([0-9][0-9])\/([0-9][0-9])\/([0-9][0-9][0-9][0-9])/g;
        const match = regexDate.test(text)
        if (match) {
            return text.match(regexDate)![0]
        }
        return null
    }

    const linksAndDates = textFromTableLines.map(e => ({
        url: e.url,
        date: getTableDate(e.text)
    })).filter(e => !!e.date)

    function filterLinks(linksAndDates: any[]) {

        const isYesterday = (date: string | Date) => dayjs(date, "DD/MM/YYYY").isYesterday()
        const isToday = (date: string | Date) => dayjs(date, "DD/MM/YYYY").isToday()

        const finalDates = linksAndDates.map((item) => {
            if (item.date) {
                if (isToday(item.date) || isYesterday(item.date)) {
                    return item
                }
            }
        })
        return finalDates
    }

    return filterLinks(linksAndDates)
}

export function fixString(str: string) {
    return str.replace(/(\r\n|\n|\r)/gm, " ")
        .replace(/\r?\n|\r/g, " ")
        .replace(/\t/g, " ")
        .replace(/\s\s+/g, ' ').trim()
}
export function lastItemFromArray(array: any[]) {
    return array[array.length - 1];
}