import axios from 'axios'
import { DOMWindow, JSDOM } from 'jsdom'

type Html = string

const getPageData = (window: DOMWindow, document: Document, crawlerData: any) => {

    if (document) {
        const fixString = (str: string) => {
            return str.replace(/(\r\n|\n|\r)/gm, " ").replace(/\r?\n|\r/g, " ").replace(/\t/g, " ").replace(/\s\s+/g, ' ').trim()
        }

        const getEmentaDados = () => {
            let el = Array.from(document.querySelectorAll('div:is([style*="display: none;"])'))
            return el[0]!.textContent

        }

        const last = (array: any[]) => {
            return array[array.length - 1];
        }

        //const dadosJuris = document.querySelector('div:is([style*="display: none;"])').textContent;
        const content = document.querySelector("table.resultTable.linksacizentados.juris-dados-completos>tbody")

        var rows = Array.from(content!.childNodes).map(e => e.textContent).filter(e => !!e)

        //@ts-ignore
        rows = rows.map(e => fixString(e))

        const regex = {
            numeroProcesso: {
                regex: /^(Processo: (.*) )/,
                replace: ["Processo: "]
            },
            segredoDeJustica: {
                regex: /^(Segredo de Justiça: (.*))/,
                replace: ["Segredo de Justiça: "]
            },
            relator: {
                regex: /^(Relator\(a\): (.*)[^\n]+)/,
                replace: ["Relator(a): "]
            },
            tipoRelator: {
                regex: /([\n].*)/g,
                replace: ["Relator(a):"],
            },
            orgaoJulgador: {
                regex: /(Órgão Julgador: (.*))/,
                replace: ["Órgão Julgador: "],
            },
            comarca: {
                regex: /(Comarca: (.*))/,
                replace: ["Comarca: "],
            },
            dataJulgamento: {
                regex: /(Data do Julgamento: ([0-9][0-9](\/)[0-9][0-9](\/)[0-9][0-9][0-9][0-9]))/,
                replace: ["Data do Julgamento: "],
            },
            dataPublicacao: {
                regex: /(Fonte\/Data da Publicação: ( )?([0-9][0-9](\/)[0-9][0-9](\/)[0-9][0-9][0-9][0-9]))/,
                replace: ["Fonte/Data da Publicação: ", "Fonte/Data da Publicação:  "],
            },
            ementa: {
                regex: /((Ementa)(.*))/,
                replace: ["Ementa "]
            },
            integra: {
                regex: /((Íntegra do Acórdão Ocultar Acórdão Atenção: O texto abaixo representa a transcrição de Acórdão. Eventuais imagens serão suprimidas.)(.*))/,
                replace: ["Íntegra do Acórdão Ocultar Acórdão Atenção: O texto abaixo representa a transcrição de Acórdão. Eventuais imagens serão suprimidas."]
            }
        }

        const findData = (row: string) => {
            const keys = Object.keys(regex)

            return keys.map((key) => {
                //@ts-ignore
                const reg = regex[key].regex
                //@ts-ignore
                const toReplace = regex[key]["replace"]
                const matchIt = row.match(reg)
                if (matchIt && matchIt.length !== 0) {
                    if (toReplace && toReplace.length !== 0) {
                        return toReplace.map((textToReplace: string) => {
                            return {
                                [key]: row.replace(textToReplace, "").replace("00:00:00", "").trim()
                            }
                        }
                        )[0]
                    }
                }
            }
            ).filter(e => !!e)[0]
        }

        var a = rows.map((row) => {
            //@ts-ignore
            return findData(row)

        }
        ).filter(e => !!e)

        const getData = () => {
            const data = Object.assign({}, ...a)

            data["ementa"] = `${data["ementa"]}`

            if (!data["ementa"] || !data["integra"]) {
                data["ementa"] = last(rows)
                data["integra"] = last(rows)
            }
            return data
        }

        return getData()
    } else {
        throw new Error("JSDOM: Document is undefined or doesn't exist. ")
    }
}

export const request = async (url: string): Promise<Html> => {
    try {
        const {
            data,
            statusText
        } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
            },
            responseType: 'arraybuffer'
        })

        const fixedData: string = data.toString('latin1')

        if (statusText == 'OK') return fixedData

        throw new Error("Page is unavaliable")

    } catch (error: any) {
        throw new Error(error)
    }
}

export const processHtml = (html: Html, url: string, crawlerData: any) => {
    const dom = new JSDOM(html, {
        resources: "usable",
        runScripts: "dangerously",
        url
    });

    const window = dom.window
    const document = dom.window.document
    const pageData = getPageData(window, document, crawlerData)
    return pageData

}

const getPageText = (html: string, url: string) => {
    const dom = new JSDOM(html, {
        resources: "usable",
        runScripts: "dangerously",
        url
    });

    const window = dom.window
    const document = dom.window.document

    var body = document.querySelector("body")
    var singleText = Array.from(body!.querySelectorAll("p"))
    var pageText = singleText.map(e => e.textContent!.trim()).join()
    const text = pageText.replace("\t", " ").replace("  ", " ").replace("\n", " ").replace("\n\n", "").replace(/(\r\n|\n|\r)/gm, "").trim()
    return text
}

export const crawlJsDom = async (url: string, jobData: any) => {
    try {
        const html = await request(url)
        const data: any = processHtml(html, url, jobData)
        const pageText = getPageText(html, url)

        return { data, pageHtml: html, pageText }

    } catch (err: any) {
        throw new Error(err)
    }
}