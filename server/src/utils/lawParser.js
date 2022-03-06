const types = ['NORMA', 'PORTARIA', 'DECRETO', 'LEI', 'JURISPRUDENCIA', 'ARTIGO_LEI', 'PARAGRAFO_LEI', 'INCISO_LEI', 'ALINEA_LEI', 'PARAGRAFO_UNICO_LEI', 'INFO', 'CODIGO']

class LawParser {
    constructor(slug) {
        this.slug = slug
        this.tempArticle = {}
        this.currentArticleNumber = null

        this.rawParagraphs = []
        this.articles = []
        this.temporaryContent = []

        this.matchArticlesRegex = /^(^(Art|art|Artigo|artigo). ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)).*$)/;
        this.matchArticleNumber = /^((^(Art|art|Artigo|artigo). ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+))(-?[A-Z]?))|(^(Art|art|Artigo|artigo) ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+))(-?[A-Z]?)))/;
        this.matchRomanNumber = /^(^(^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})) (-))/;
        this.matchParagraph = /^((§) ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)))/;
        this.matchParagrafoUnico = /^(Parágrafo único)/;
        this.paragraphEndStartIncise = /^(§ ([0-9]+).*(:))/;
        this.matchDot = /(\.)$/;
        this.matchOStart = /^(°|º|)/;
        this.paragraphSymbol = /(§)/;
        this.matchArticleNumberBeginning = /^(^([+-]?([0-9]+\.?[0-9]*|\.[0-9]+))(-?[A-Z]?))/;

        this.lastInsertArticle = true
        this.lastInsertIncise = false
        this.lastInsertParagraph = false
        this.willBeIncise = false;
    }

    generateLawBlock() {
        return {
            id: '',
            code: '',
            slug: '',
            properties: {
                value: '',
                id: '',
                number: ''
            },
            type: '',
            content: [],
            createdAt: '',
            updatedAt: '',
            crawlerId: '',
        }
    }

    removeAnchors() {
        Array.from(document.querySelector("body").querySelectorAll("a")).forEach(e => e.remove())

    }

    getParagraphs(el) {
        var content = document.querySelector(el)
        var paragraphs = Array.from(content.querySelectorAll("p"))
        this.rawParagraphs = paragraphs

    }

    isLawArticle(str) {
        if (str.match(this.matchArticleNumber) && str.match(this.matchArticleNumber)[0]) {
            return true
        }
        return false
    }
    isLawParagrafoUnico(str) {
        if (str.match(this.matchParagrafoUnico) && str.match(this.matchParagrafoUnico)[0]) {
            return true
        }
        return false
    }
    isLawParagrph(str) {
        if (str.match(this.matchParagraph) && str.match(this.matchParagraph)[0]) {
            return true
        }
        return false
    }

    isParagraphIncise(str) {
        if (str.match(this.paragraphEndStartIncise) && str.match(this.paragraphEndStartIncise)[0]) {
            return true
        }
        return false
    }

    isIncise(str) {
        if (str.match(this.matchRomanNumber) && str.match(this.matchRomanNumber)[0]) {
            return true
        }
        return false
    }

    getArticleNumber(str) {
        if (str.match(this.matchArticleNumber)) {
            return str.match(this.matchArticleNumber)[0].replace("Art. ", "").replace("art. ", "").replace(new RegExp(this.matchDot), "").trim()
        }
        return null
    }
    getInciseNumber(str) {
        if (str.match(this.matchRomanNumber)) {

            return str.match(this.matchRomanNumber)[0].replace("-", "").trim()
        }
        return null
    }

    getLawParagraphNumber(str) {
        if (str.match(this.matchParagraph)) {
            return str.match(this.matchParagraph)[0].replace("§", "").trim()
        }
        return null
    }

    getText(str) {
        return str.replace("Art. ", "").replace("art. ", "").replace(new RegExp(this.matchArticleNumberBeginning), "").replace(new RegExp(this.matchOStart), "").replace("Parágrafo Único. ", "").replace(new RegExp(this.matchParagrafoUnico), "").replace(new RegExp(this.matchRomanNumber), "").replace(new RegExp(this.matchParagraph), "").replace("°", "").replace("º", "").trim()
    }

    getNumber(str) {
        const articleNumber = this.getArticleNumber(str)
        const inciseNumber = this.getInciseNumber(str)
        const lawParagraphNumber = this.getLawParagraphNumber(str)

        if (articleNumber) {
            return articleNumber
        }
        if (inciseNumber) {
            return inciseNumber
        }
        if (lawParagraphNumber) {
            return lawParagraphNumber
        }

    }

    generateProperties(paragraph, number) {

        return {
            id: '',
            isRef: false,
            title: '',

            value: this.getText(paragraph),
            number: number || this.getNumber(paragraph),
            identifier: `${this.slug} art.${this.getNumber(paragraph)}`,
            comment: '',
            year: 1990,
            author: '',
            subsOnly: false,
            searchString: `${this.slug} art.${this.getNumber(paragraph)}`,
            slug: {
                value: 'cdc90'
            }
        }
    }

    processSingleParagraph(paragraph) {
        paragraph = paragraph.innerText.trim()

        // Verifica se é um Artigo de Lei
        if (this.isLawArticle(paragraph)) {
            // push it whenever finds it is a paragraph
            this.lastInsertArticle = true
            this.articles.push(this.tempArticle)

            this.tempArticle = {}
            this.tempIncises = []
            this.tempParagraphs = []
            this.temporaryContent = []

            this.currentArticleNumber = this.getNumber(paragraph)

            this.tempArticle.type = 'ARTIGO_LEI'
            this.tempArticle.source = window.location.href
            this.tempArticle.content = this.temporaryContent
            this.tempArticle.version = 1

            this.tempArticle.properties = this.generateProperties(paragraph)
        }

        // Verifica se é Parágrafo Único de Lei
        if (this.isLawParagrafoUnico(paragraph)) {
            this.lastInsertArticle = false
            this.willBeInsice = false

            this.temporaryContent.push({
                number: this.currentArticleNumber,
                properties: this.generateProperties(paragraph, 'Parágrafo Único'),

                content: [],
                type: 'PARAGRAFO_UNICO_LEI'
            })
        }

        // Verifica se é um Parágrafo normal de artigo de Lei
        if (this.isLawParagrph(paragraph)) {
            this.lastInsertArticle = false
            this.willBeInsice = false

            this.temporaryContent.push({
                number: this.currentArticleNumber,
                properties: this.generateProperties(paragraph, this.currentArticleNumber),
                content: [],
                type: 'PARAGRAFO'
            })
        }

        if (this.isParagraphIncise(paragraph)) {
            this.lastInsertArticle = false
            this.willBeInsice = true
        }

        // Verifica se é um inciso de artigo de lei
        if (this.isIncise(paragraph)) {
            this.lastInsertArticle = false

            // Verifica se é um inciso de um parágrafo de Lei
            if (this.willBeInsice) {
                var lastContent = this.temporaryContent.slice(-1)[0]

                if (lastContent && lastContent.content) {

                    lastContent.content.push({
                        number: this.currentArticleNumber,
                        properties: this.generateProperties(paragraph, this.currentArticleNumber),

                        type: 'INCISO'
                    })

                }

            } else {
                // Verifica se é um inciso comum de artigo de lei
                this.temporaryContent.push({
                    number: this.currentArticleNumber,
                    properties: this.generateProperties(paragraph, this.currentArticleNumber),
                    type: 'INCISO'
                })

            }
        }
    }

    processParagraphs() {
        if (this.rawParagraphs.length !== 0) {
            this.rawParagraphs.forEach(el => this.processSingleParagraph(el))
        }
    }

    start() {
        this.removeAnchors()
        this.getParagraphs("body")
        this.processParagraphs()
        this.articles = this.articles.filter(value => Object.keys(value).length !== 0)
        console.log(this.articles)
    }
}

var parser = new LawParser("cdc90")
parser.start()

function loop(ar) {
    ar.forEach((item) => {
        if (item.content && item.content.length !== 0) {
            loop(item.content)
        } else {
            console.log(item)
        }
    }
    )
}

function iterate(ar) {
    ar.forEach((item) => {
        if (item.content && item.content.length !== 0) {
            loop(item.content)
        } else {
            console.log(item)
        }
    }
    )
}
