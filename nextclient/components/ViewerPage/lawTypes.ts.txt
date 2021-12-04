export interface ArticleBlock {
    id: string;
    code: string; //relationship

    properties: {
        title: string
    },

    type: 'ARTICLE' | 'INCISE' | 'PARAGRAPH' | 'ALIENEA';
    number: string;
    content: [];
    parent?: ArticleBlock['id'];

    text: string;
    paragraphs?: ArticleBlock[];
    incises?: ArticleBlock[];
    alineas?: ArticleBlock[];

    createdAt: Date;
    updatedAt: Date;

    crawlerId: string; //relationship


}

class LawParser {
    constructor() {
        this.tempArticle = {}

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

        console.log(this.rawParagraphs)
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
        return str.match(this.matchArticleNumber)[0].replace("Art. ", "").replace("art. ", "").replace(new RegExp(this.matchDot), "").trim()
    }
    getInciseNumber(str) {
        return str.match(this.matchRomanNumber)[0].replace("-", "").trim()
    }

    getLawParagraphNumber(str) {
        console.log(str)
        return str.match(this.matchParagraph)[0].replace("§", "").trim()
    }

    getText(str) {
        return str.replace("Art. ", "").replace("art. ", "").replace(new RegExp(this.matchArticleNumberBeginning), "").replace(new RegExp(this.matchOStart), "").replace("Parágrafo Único. ", "").replace(new RegExp(this.matchParagrafoUnico), "").replace(new RegExp(this.matchRomanNumber), "").replace(new RegExp(this.matchParagraph), "").replace("°", "").replace("º", "").trim()
    }

    processSingleParagraph(paragraph) {
        paragraph = paragraph.innerText.trim()

        if (this.isLawArticle(paragraph)) {
            // push it whenever finds it is a paragraph
            this.lastInsertArticle = true
            this.articles.push(this.tempArticle)

            this.tempArticle = {}
            this.tempIncises = []
            this.tempParagraphs = []
            this.temporaryContent = []

            this.tempArticle.properties = {
                value: this.getText(paragraph),
                number: this.getArticleNumber(paragraph)

            }
            this.tempArticle['type'] = 'ARTICLE'
            this.tempArticle.content = this.temporaryContent
        }

        if (this.isLawParagrafoUnico(paragraph)) {
            this.lastInsertArticle = false
            this.willBeInsice = false

            this.temporaryContent.push({
                articleNumber: this.tempArticle.number,
                properties: {
                    number: "Parágrafo Único",
                    value: this.getText(paragraph),
                },

                content: [],
                type: 'PARAGRAFO_UNICO'
            })
        }

        if (this.isLawParagrph(paragraph)) {
            this.lastInsertArticle = false
            this.willBeInsice = false

            this.temporaryContent.push({
                articleNumber: this.tempArticle.number,
                properties: {
                    number: this.getLawParagraphNumber(paragraph),
                    value: this.getText(paragraph),
                },
                content: [],
                type: 'PARAGRAFO'
            })
        }

        if (this.isParagraphIncise(paragraph)) {
            this.lastInsertArticle = false
            this.willBeInsice = true
        }

        if (this.isIncise(paragraph)) {
            this.lastInsertArticle = false

            if (this.willBeInsice) {
                var lastContent = this.temporaryContent.slice(-1)[0]

                if (lastContent && lastContent.content) {
                    lastContent.content.push({
                        articleNumber: this.tempArticle.number,
                        properties: {
                            number: this.getInciseNumber(paragraph),
                            value: this.getText(paragraph),
                        },
                        type: 'INCISO'
                    })
                }

            } else {

                this.temporaryContent.push({
                    articleNumber: this.tempArticle.number,
                    properties: {
                        value: this.getText(paragraph),
                        number: this.getInciseNumber(paragraph),
                    },
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
        console.log(this.articles)
    }

}

var parser = new LawParser()
parser.start()


/**
 * working code
 
 */
var body = document.querySelector("body")
Array.from(body.querySelectorAll("a")).forEach(e => e.remove())

var ps = [...Array.from(body.querySelectorAll("p"))]

var matchArticlesRegex = /^(^(Art|art|Artigo|artigo). ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)).*$)/;
var matchArticleNumber = /^((^(Art|art|Artigo|artigo). ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+))(-?[A-Z]?))|(^(Art|art|Artigo|artigo) ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+))(-?[A-Z]?)))/;
var matchRomanNumber = /^(^(^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})) (-))/;
var matchParagraph = /^((§) ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)))/;
var matchParagrafoUnico = /^(Parágrafo único)/;
var paragraphEndStartIncise = /^(§ ([0-9]+).*(:))/;

var matchDot = /(\.)$/;
var matchOStart = /^(°|º|)/;
var matchArticleNumberBeginning = /^(^([+-]?([0-9]+\.?[0-9]*|\.[0-9]+))(-?[A-Z]?))/;

/**
 
ARTIGO – PARÁGRAFO – INCISO - ALÍNEA – ITEM
 OU
 ARTIGO – INCISO – ALÍNEA – ITEM
 
 */

/*
1. pega todos os pPs
2. fazer um loop para identificar se são artigos
3. se for artigo coloca num objeto temporário
4. verifica se o proximo item é artigo ou inciso
5. se for inciso adiciona no objeto de art temporario
6. se for artigo limpa o objeto e cria um novo artigo
*/

var articles = []

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

/**
export interface ArticleBlock {
    id: string;
    code: string; //relationship
 
    properties: {
        title: string
    },
 
    type: 'ARTICLE' | 'INCISE' | 'PARAGRAPH' | 'ALIENEA';
    number: string;
    content: [];
    parent?: ArticleBlock['id'];
 
    text: string;
    paragraphs?: ArticleBlock[];
    incises?: ArticleBlock[];
    alineas?: ArticleBlock[];
 
    createdAt: Date;
    updatedAt: Date;
 
    crawlerId: string; //relationship
 
 
}
**/
var tempArticle = {
    id: '',
    code: '',
    slug: '',
    properties: {},
    type: '',
    number: '',
    text: '',
    content: [],
    incises: [],
    createdAt: '',
    updatedAt: '',
    crawlerId: ''
}
var tempIncises = []
var tempParagraphs = []

var lastInsertArticle = true
var lastInsertIncise = false
var lastInsertParagraph = false
var willBeInsice = false;

var processEl = (el) => {
    var pText = el.innerText.trim()

    /* match article*/
    if (pText.match(matchArticleNumber) && pText.match(matchArticleNumber)[0]) {

        articles.push(tempArticle)
        tempArticle = {}
        tempIncises = []
        tempParagraphs = []

        lastInsertArticle = true

        console.log("artigo")

        var artNumber = pText.match(matchArticleNumber)[0].replace("Art. ", "").replace("art. ", "")

        tempArticle['number'] = artNumber.replace(new RegExp(matchDot), "").trim()
        tempArticle['text'] = pText.replace("Art. ", "").replace("art. ", "").replace(new RegExp(matchArticleNumberBeginning), "").replace(new RegExp(matchOStart), "").trim()
        tempArticle['incises'] = tempIncises
        tempArticle['paragraphs'] = tempParagraphs
        tempArticle['type'] = 'ARTICLE'

    }
    /* end match article*/

    /* match paragrafo unico*/
    if (pText.match(matchParagrafoUnico) && pText.match(matchParagrafoUnico)[0]) {
        lastInsertArticle = false
        willBeInsice = false

        var inciseNumber = pText.match(matchParagrafoUnico)[0]
        console.log(inciseNumber)

        tempParagraphs.push({
            articleNumber: tempArticle.number,
            paragraph: "Parágrafo Único",
            text: pText.replace("Parágrafo Único. ", "").replace(new RegExp(matchParagrafoUnico), "").trim(),
            incises: [],
            type: 'PARAGRAFO_UNICO'
        })
    }
    /*end of match paragrafo unico*/

    /* match paragraph*/
    if (pText.match(matchParagraph) && pText.match(matchParagraph)[0]) {
        lastInsertArticle = false
        willBeInsice = false

        var inciseNumber = pText.match(matchParagraph)[0]
        console.log(inciseNumber)

        tempParagraphs.push({
            articleNumber: tempArticle.number,
            paragraph: inciseNumber.replace("-", "").trim(),
            text: pText.replace("Art. ", "").replace("art. ", "").replace(new RegExp(matchParagraph), "").trim(),
            incises: [],
            type: 'PARAGRAFO'
        })
    }
    /*end of match paragraph*/

    /* match paragraph incise*/
    if (pText.match(paragraphEndStartIncise) && pText.match(paragraphEndStartIncise)[0]) {
        lastInsertArticle = false
        willBeInsice = true
    }
    /*end of match paragraph incise*/

    /* match inciso*/
    if (pText.match(matchRomanNumber) && pText.match(matchRomanNumber)[0]) {
        lastInsertArticle = false

        if (willBeInsice) {
            var lastParagraph = tempParagraphs.slice(-1)[0]
            console.log("lastParagraph", lastParagraph)
            var inciseNumber = pText.match(matchRomanNumber)[0]

            if (lastParagraph && lastParagraph.incises) {
                lastParagraph.incises.push({
                    articleNumber: tempArticle.number,
                    paragraph: inciseNumber.replace("-", "").trim(),
                    text: pText.replace(new RegExp(matchRomanNumber), "").trim(),
                    type: 'INCISO'
                })
            }

        } else {

            console.log(pText.replace(new RegExp(matchRomanNumber), "").trim())

            var inciseNumber = pText.match(matchRomanNumber)[0]
            console.log(inciseNumber)
            tempIncises.push({
                articleNumber: tempArticle.number,
                paragraph: inciseNumber.replace("-", "").trim(),
                text: pText.replace(new RegExp(matchRomanNumber), "").trim(),
                type: 'INCISO'
            })
        }
    }
    /* end of match inciso*/

}

ps.forEach((el) => {
    processEl(el)
}
)
