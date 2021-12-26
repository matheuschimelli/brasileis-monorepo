// @ts-nocheck
import { Job } from "bull";
import Apify from 'apify'
import type { Page } from "puppeteer";
import { sendResult } from "../../";

export default async function (job: Job) {
  try {
    const jobOptions = job.data
    const jobData = jobOptions.jobData

    const browser = await Apify.launchPuppeteer({
      // useChrome: true,
      stealth: true,
      launchOptions: {
        headless: true,
        args: [
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--no-first-run',
          '--no-sandbox',
          '--no-zygote',
          '--single-process',
        ],
      }
    })

    const page: Page = await browser.newPage();

    await page.goto(jobData.source, { timeout: 0, waitUntil: 'load' });

    const articles = await page.evaluate(() => {
      const lawParser = () => {
        var rawParagraphs = null
        var orderedArray = []

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
          Array.from(document.querySelector("body").querySelectorAll("a")).forEach(e => e.remove())
        }

        function getParagraphs(el) {
          var content = document.querySelector(el)
          var paragraphs = Array.from(content.querySelectorAll("p"))
          rawParagraphs = paragraphs
        }

        function isLawArticle(str) {
          if (str.match(matchArticleNumber) && str.match(matchArticleNumber)[0]) {
            return true
          }
          return false
        }
        function isLawParagrafoUnico(str) {
          if (str.match(matchParagrafoUnico) && str.match(matchParagrafoUnico)[0]) {
            return true
          }
          return false
        }
        function isLawParagrph(str) {
          if (str.match(matchParagraph) && str.match(matchParagraph)[0]) {
            return true
          }
          return false
        }
        function isTituloSecao(str) {
          if (str.match(matchTituloSecao) && str.match(matchTituloSecao)[0]) {
            return true
          }
          return false
        }

        function isParagraphIncise(str) {
          if (str.match(paragraphEndStartIncise) && str.match(paragraphEndStartIncise)[0]) {
            return true
          }
          return false
        }

        function hasAlineasOnIncise(str) {
          if (str.match(paragraphAlineaRegex) && str.match(paragraphAlineaRegex)[0]) {
            return true
          }
          return false
        }

        function isAlinea(str) {
          if (str.match(matchAlinea) && str.match(matchAlinea)[0]) {
            return true
          }
          return false
        }

        function isIncise(str) {
          if (str.match(matchRomanNumber) && str.match(matchRomanNumber)[0]) {
            return true
          }
          return false
        }

        function getArticleNumber(str) {
          if (str.match(matchArticleNumber)) {
            return str.match(matchArticleNumber)[0].replace("Art. ", "").replace("art. ", "").replace(new RegExp(matchDot), "").trim()
          }
          return null
        }
        function getInciseNumber(str) {
          if (str.match(matchRomanNumber)) {

            return str.match(matchRomanNumber)[0].replace("-", "").trim()
          }
          return null
        }

        function getLawParagraphNumber(str) {
          if (str.match(matchParagraph)) {
            return str.match(matchParagraph)[0].replace("§", "").trim()
          }
          return null
        }
        function getAlineaLetter(str) {
          if (str.match(matchAlineaLetter)) {
            return str.match(matchAlineaLetter)[0].replace(")", "").trim()
          }
          return null
        }

        function getText(str) {
          return str.replace("Art. ", "").replace("art. ", "").replace(new RegExp(matchArticleNumberBeginning), "").replace(new RegExp(matchOStart), "").replace("Parágrafo Único. ", "").replace(new RegExp(matchParagrafoUnico), "").replace(new RegExp(matchRomanNumber), "").replace(new RegExp(matchParagraph), "").replace("°", "").replace("º", "").replace("\n", " ").trim()
        }

        function getNumber(str) {
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

        function getParagraphType(paragraph) {
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

        function handleType(lawType) {
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
        function orderedProcessor(paragraph) {
          paragraph = paragraph.innerText.trim()

          if (paragraph !== '') {
            orderedArray.push({
              type: getParagraphType(paragraph),
              name: getNumber(paragraph),
              value: getText(paragraph),
              originalText: paragraph,
              source: window.location.href,
              version: 1,
              searchText: '',
              identifier: 'cdc',
              slug: {
                value: 'cdc'
              }
            })
          }
        }

        function processParagraphsOrderedList() {
          if (rawParagraphs.length !== 0) {
            rawParagraphs.forEach(el => orderedProcessor(el))
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
      }
      return lawParser()
    });

    await sendResult({
      queue: jobOptions.queue,
      data: jobData,
      result: { data: job.data, result: articles }
    })
    // Close browser
    await browser.close();
  } catch (err) {
    console.log(err)
    return Promise.reject(err)
  }

}