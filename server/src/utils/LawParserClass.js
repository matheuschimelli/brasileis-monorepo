const types = ['NORMA', 'PORTARIA', 'DECRETO', 'LEI', 'JURISPRUDENCIA', 'ARTIGO_LEI', 'PARAGRAFO_LEI', 'INCISO_LEI', 'ALINEA_LEI', 'PARAGRAFO_UNICO_LEI', 'INFO', 'CODIGO']

class LawParser {
    constructor(slug) {
        this.slug = slug
        this.tempArticle = {
            type: '',
            source: '',
            version: 1,
            isRef: false,
            title: '',
            value: '',
            identifier: '',
            year: new Date,
            subsOnly: false,
            searchString: '',
            slug: {
                value: ''
            },
            content: []
        }
        this.currentArticleNumber = null

        this.lastInsertType = null

        this.insertHistory = []

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

    clearTempArticle() {
        this.tempArticle = {
            type: '',
            source: '',
            version: 1,
            isRef: false,
            title: '',
            value: '',
            identifier: '',
            year: new Date,
            subsOnly: false,
            searchString: '',
            slug: {
                value: ''
            },
            content: []
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

    handleType(lawType) {
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

    generateArticle({ paragraph, number, type, content, parentType }) {
        return {
            type: type,
            blockNumber: number || this.getNumber(paragraph) || this.currentArticleNumber,

            identifier: `${this.slug} art.${this.currentArticleNumber} ${this.handleType(type)} ${this.getNumber(paragraph)}`,

            title: `Código de Defesa do Consumidor ${this.handleType(type)} ${this.getNumber(paragraph)}`,
            value: this.getText(paragraph),
            source: window.location.href,
            version: 1,
            isRef: false,

            year: new Date,
            subsOnly: false,
            searchString: `${this.slug} ${this.handleType(type)} ${this.getNumber(paragraph)}`,
            slug: {
                value: ''
            },
            content: content,
            comment: '',
            author: '',
            artigo: null,
            inciso: null,
            paragrafo: null,
            parentType: parentType
        }
    }

    getLastInsertType(currentType) {

        const history = this.insertHistory.reverse()
        var found = null

        if (currentType === history[0]) {
            for (const item of history) {
                if (item !== currentType) {
                    found = item
                    break;
                }
            }
        }

        return (found !== '' && found !== null && found !== undefined) ? found : currentType

    }

    processSingleParagraph(paragraph) {
        paragraph = paragraph.innerText.trim()

        // Verifica se é um Artigo de Lei
        if (this.isLawArticle(paragraph)) {
            // push it whenever finds it is a paragraph
            this.lastInsertArticle = true
            this.articles.push(this.tempArticle)

            this.clearTempArticle()
            this.lastInsertType = null

            this.tempIncises = []
            this.tempParagraphs = []
            this.temporaryContent = []

            var tempAr = this.generateArticle({
                paragraph,
                type: 'ARTIGO_LEI',
                content: this.temporaryContent,
                parentType: null,
            })

            this.insertHistory.push('ARTIGO_LEI')
            this.lastInsertType = this.getLastInsertType('ARTIGO_LEI')

            this.currentArticleNumber = this.getNumber(paragraph)

            this.tempArticle = tempAr

        }

        // Verifica se é Parágrafo Único de Lei
        if (this.isLawParagrafoUnico(paragraph)) {
            this.lastInsertArticle = false
            this.willBeInsice = false

            this.insertHistory.push('PARAGRAFO_UNICO_LEI')
            this.lastInsertType = this.getLastInsertType('PARAGRAFO_UNICO_LEI')

            this.temporaryContent.push(this.generateArticle({
                number: this.currentArticleNumber,
                paragraph: paragraph,
                content: [],
                type: 'PARAGRAFO_UNICO_LEI',
                parentType: this.lastInsertType,

            }))

        }

        // Verifica se é um Parágrafo normal de artigo de Lei
        if (this.isLawParagrph(paragraph)) {
            this.lastInsertArticle = false
            this.willBeInsice = false

            this.insertHistory.push('PARAGRAFO_LEI')
            this.lastInsertType = this.getLastInsertType('PARAGRAFO_LEI')

            this.temporaryContent.push(this.generateArticle({
                number: this.currentArticleNumber,
                paragraph: paragraph,
                content: [],
                type: 'PARAGRAFO_LEI',
                parentType: this.lastInsertType,

            }))

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
                    this.insertHistory.push('INCISO')
                    this.lastInsertType = this.getLastInsertType('INCISO')
                    lastContent.content.push(this.generateArticle({
                        number: this.currentArticleNumber,
                        paragraph: paragraph,
                        content: [],
                        type: 'INCISO',
                        parentType: this.lastInsertType,

                    }))

                }

            } else {
                this.insertHistory.push('INCISO')
                this.lastInsertType = this.getLastInsertType('INCISO')
                // Verifica se é um inciso comum de artigo de lei
                this.temporaryContent.push(this.generateArticle({
                    number: this.currentArticleNumber,
                    paragraph: paragraph,
                    content: [],
                    type: 'INCISO',
                    parentType: this.lastInsertType,

                }))

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
        console.log(this.insertHistory)
    }
}

var parser = new LawParser("cdc")
parser.start()

const tempArray = []

function iterate(arr) {
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
