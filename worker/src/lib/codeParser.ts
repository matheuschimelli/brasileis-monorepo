var body = document.querySelector("body")
var ps = Array.from(body!.querySelectorAll("p"))
var matchArticlesRegex = /^(^(Art|art). ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)).*$)/;
var matchArticleNumber = /^(^(Art|art). ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+))(-?[A-Z]?))/;
var matchRomanNumber = /^(^(^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})) (-))/;
var matchParagraph = /^((§) ([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)))/;

var matchDot = /(\.)$/;
var matchOStart = /^(o)/;
var matchArticleNumberBeginning = /^(^([+-]?([0-9]+\.?[0-9]*|\.[0-9]+))(-?[A-Z]?))/;

/*
1. pega todos os pPs
2. fazer um loop para identificar se são artigos
3. se for artigo coloca num objeto temporário
4. verifica se o proximo item é artigo ou inciso
5. se for inciso adiciona no objeto de art temporario
6. se for artigo limpa o objeto e cria um novo artigo
*/

var articles = []

function isEmpty(obj: any) {
    return Object.keys(obj).length === 0;
}

var tempArticle = {
    id: '',
    number: '',
    text: '',
    incises: [] as any[],
    paragraphs: [] as any[]
}
var tempIncises: any[] = []
var tempParagraphs: any[] = []

var lastInsertArticle = true

var processEl = (el: any) => {
    var pText = el.innerText.trim()

    if (pText.match(matchArticleNumber) && pText.match(matchArticleNumber)[0]) {

        articles.push(tempArticle)
        //@ts-ignore
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

    }
    if (pText.match(matchRomanNumber) && pText.match(matchRomanNumber)[0]) {
        lastInsertArticle = false

        var inciseNumber = pText.match(matchRomanNumber)[0]
        console.log(inciseNumber)
        tempIncises.push({
            articleNumber: tempArticle.number,
            paragraph: inciseNumber.replace("-", "").trim(),
            text: pText.replace("Art. ", "").replace("art. ", "").replace(new RegExp(matchRomanNumber), "").trim()
        })
    }

    if (pText.match(matchParagraph) && pText.match(matchParagraph)[0]) {
        lastInsertArticle = false

        var inciseNumber = pText.match(matchParagraph)[0]
        console.log(inciseNumber)

        tempParagraphs.push({
            articleNumber: tempArticle.number,
            incise: inciseNumber.replace("-", "").trim(),
            text: pText.replace("Art. ", "").replace("art. ", "").replace(new RegExp(matchParagraph), "").trim()
        })
    }

}

ps.forEach((el) => {
    processEl(el)

})
