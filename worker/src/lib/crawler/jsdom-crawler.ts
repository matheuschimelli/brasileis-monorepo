import axios from 'axios'
import { DOMWindow, JSDOM } from 'jsdom'

type Html = string

const lawParser = (window: DOMWindow, document: Document, crawlerData: any) => {

    if (document) {
        var rawParagraphs: any = null
        var orderedArray: any[] = []

        const matchArticlesRegex = /^(^(Art|art|Artigo|artigo). ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)).*$)/;
        const matchArticleNumber = /^((^(Art|art|Artigo|artigo). ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+))(-?[A-Z]?))|(^(Art|art|Artigo|artigo) ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+))(-?[A-Z]?)))/;
        const matchRomanNumber = /^(^(^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})) (-))/;
        const matchParagraph = /^((§) ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)))/;
        const matchAlinea = /^(([a-zA-Z])(\)) .*(;))/;
        const matchAlineaLetter = /^(([a-zA-Z])(\)))/;
        const matchParagrafoUnico = /^(Parágrafo único)/;
        const paragraphEndStartIncise = /^(§ ([0-9]+).*(:))/;
        const matchDot = /(\.)$/;
        const matchOStart = /^(°|º|)/;
        const paragraphSymbol = /(§)/;
        const matchArticleNumberBeginning = /^(^([+-]?([0-9]+\.?[0-9]*|\.[0-9]+))(-?[A-Z]?))/;
        const matchTituloSecao = /(^(TÍTULO|CAPÍTULO|SEÇÃO) (M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})).*)/
        const paragraphAlineaRegex = /^((^(^(^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})) (-))).*(:))/;

        const removeAnchors = () => {
            // remove anchors
            Array.from(document.querySelector("body")!.querySelectorAll("a")).forEach((e: any) => e.remove())
            Array.from(document.querySelector("body")!.querySelectorAll("script")).forEach(e => e.remove())
            // remove all strikes
            Array.from(document.querySelector("body")!.querySelectorAll("strike")).forEach(e => e.remove())


            // remove spans with a line stroke
            var allSpans = Array.from(document.querySelectorAll("span"))
            var allPs = Array.from(document.querySelectorAll("p"))
            var allDiv = Array.from(document.querySelectorAll("div"))
            var allFont = Array.from(document.querySelectorAll("font"))

            var reg = /(text-decoration: line-through;)/

            for (const span of allSpans) {
                var css = span.style.cssText
                if (reg.test(css)) span.remove()
            }
            for (const p of allPs) {
                var css = p.style.cssText
                if (reg.test(css)) p.remove()
            }
            for (const div of allDiv) {
                var css = div.style.cssText
                if (reg.test(css)) div.remove()
            }
            for (const font of allFont) {
                var css = font.style.cssText
                if (reg.test(css)) font.remove()
            }


            // remove all anchors
            Array.from(document.querySelectorAll("a")).forEach(a => a.remove())

            // remove all line strike elements
            Array.from(document.querySelectorAll("strike")).forEach(strike => strike.remove())

            // remove all line-throught elements css
            // NOT WORKING ON JSDOM @TODO FIX LATER
            // const allElements = document.querySelectorAll("*")
            // Array.from(document.querySelectorAll("*")).forEach((htmlElement) => {
            //     //@ts-ignore
            //     const styles = Object.values(htmlElement.style).filter(e => e !== "")
            //     console.log("styles", styles)

            //     for (const style of styles) {
            //         console.log("STRLE", style)

            //         if (style) {
            //             //@ts-ignore
            //             const itIncludesStyle = style.indexOf("line-through")
            //             if (itIncludesStyle !== -1) {
            //                 htmlElement.remove()
            //             }
            //         }
            //     }
            // })
        }


        function getParagraphs(el: string) {
            var content = document.querySelector(el)
            var paragraphs = Array.from(content!.querySelectorAll("p"))
            rawParagraphs = paragraphs
        }

        function isLawArticle(str: string) {
            if (str.match(matchArticleNumber) && str.match(matchArticleNumber)![0]) {
                return true
            }
            return false
        }
        function isLawParagrafoUnico(str: string) {
            if (str.match(matchParagrafoUnico) && str.match(matchParagrafoUnico)![0]) {
                return true
            }
            return false
        }
        function isLawParagrph(str: string) {
            if (str.match(matchParagraph) && str.match(matchParagraph)![0]) {
                return true
            }
            return false
        }
        function isTituloSecao(str: string) {
            if (str.match(matchTituloSecao) && str.match(matchTituloSecao)![0]) {
                return true
            }
            return false
        }

        function isParagraphIncise(str: string) {
            if (str.match(paragraphEndStartIncise) && str.match(paragraphEndStartIncise)![0]) {
                return true
            }
            return false
        }

        function hasAlineasOnIncise(str: string) {
            if (str.match(paragraphAlineaRegex) && str.match(paragraphAlineaRegex)![0]) {
                return true
            }
            return false
        }

        function isAlinea(str: string) {
            if (str.match(matchAlinea) && str.match(matchAlinea)![0]) {
                return true
            }
            return false
        }

        function isIncise(str: string) {
            if (str.match(matchRomanNumber) && str.match(matchRomanNumber)![0]) {
                return true
            }
            return false
        }

        function getArticleNumber(str: string) {
            if (str.match(matchArticleNumber)) {
                return str.match(matchArticleNumber)![0].replace("Art. ", "").replace("art. ", "").replace(new RegExp(matchDot), "").trim()
            }
            return null
        }
        function getInciseNumber(str: string) {
            if (str.match(matchRomanNumber)) {

                return str.match(matchRomanNumber)![0].replace("-", "").trim()
            }
            return null
        }

        function getLawParagraphNumber(str: string) {
            if (str.match(matchParagraph)) {
                return str.match(matchParagraph)![0].replace("§", "").trim()
            }
            return null
        }
        function getAlineaLetter(str: string) {
            if (str.match(matchAlineaLetter)) {
                return str.match(matchAlineaLetter)![0].replace(")", "").trim()
            }
            return null
        }

        function getText(str: string) {
            return str.replace("Art. ", "").replace("art. ", "").replace(new RegExp(matchArticleNumberBeginning), "").replace(new RegExp(matchOStart), "").replace("Parágrafo Único. ", "").replace(new RegExp(matchParagrafoUnico), "").replace(new RegExp(matchRomanNumber), "").replace(new RegExp(matchParagraph), "").replace("°", "").replace("º", "").replace("\n", " ").trim()
        }

        function getNumber(str: string) {
            const articleNumber = getArticleNumber(str)
            const inciseNumber = getInciseNumber(str)
            const lawParagraphNumber = getLawParagraphNumber(str)
            const alineaLetter = getAlineaLetter(str)

            if (articleNumber) {
                return articleNumber
            }
            if (inciseNumber) {
                return inciseNumber
            }
            if (lawParagraphNumber) {
                return lawParagraphNumber
            }
            if (alineaLetter) {
                return alineaLetter
            }
            return 'Parágrafo Único'
        }

        function getParagraphType(paragraph: string) {
            if (isTituloSecao(paragraph))
                return 'TITULO_SECAO'
            if (isLawArticle(paragraph))
                return 'ARTIGO_LEI'
            if (isLawParagrph(paragraph))
                return 'PARAGRAFO_LEI'
            if (isLawParagrafoUnico(paragraph))
                return 'PARAGRAFO_UNICO_LEI'
            if (isIncise(paragraph))
                return 'INCISO_LEI'
            if (isAlinea(paragraph))
                return 'ALINEA_LEI'

        }

        function handleType(lawType: string) {
            if (lawType == 'ARTIGO_LEI') {
                return 'art.'
            }
            if (lawType == 'INCISO') {
                return 'inciso.'
            }
            if (lawType == 'PARAGRAFO_UNICO_LEI') {
                return 'Parágrafo único.'
            }
            if (lawType == 'PARAGRAFO_LEI') {
                return '§'
            }
            if (lawType == 'ALINEA_LEI') {
                return 'alínea.'
            }
        }

        function orderedProcessor(paragraph: any, index: number) {
            paragraph = paragraph.textContent.trim()

            if (paragraph !== '') {
                orderedArray.push({
                    index,
                    type: getParagraphType(paragraph),
                    name: getNumber(paragraph),
                    value: getText(paragraph),
                    originalText: paragraph,
                    source: window.location.href,
                    version: 1,
                    searchText: '',
                    identifier: crawlerData.slug,
                    slug: {
                        value: crawlerData.slug
                    }
                })
            }
        }

        function processParagraphsOrderedList() {
            if (rawParagraphs.length !== 0) {
                rawParagraphs.forEach((el: any, index: number) => orderedProcessor(el, index))
            }
        }

        const run = () => {
            removeAnchors();
            getParagraphs("body")
            processParagraphsOrderedList()
            orderedArray = orderedArray.filter(({ type }) => type !== undefined);
            return orderedArray
        }
        return run()
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

    const articles = lawParser(window, document, crawlerData)

    return articles

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
        const articles = processHtml(html, url, jobData)
        const pageText = getPageText(html, url)

        return { articles, pageHtml: html, pageText }

    } catch (err: any) {
        throw new Error(err)
    }
}