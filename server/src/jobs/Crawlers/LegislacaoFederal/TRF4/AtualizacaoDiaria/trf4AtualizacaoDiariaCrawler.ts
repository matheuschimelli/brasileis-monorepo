import { Page } from 'puppeteer'
import { PageBrowser, Crawler } from '../../../../../types'
import MrCrawler from '../../../../../lib/MrCrawler'
import dayjs from 'dayjs'
import notify from '../../../../../utils/slackNotifier'

export default class TRF4CrawlerAtualizacoDiaria extends MrCrawler {
  public currentRelator?: string
  public relatores?: string[]

  constructor(params: Crawler) {
    super(params)
    this.currentRelator = undefined
    this.relatores = []
  }

  async customBeforeLauchPage({ page }: PageBrowser) {
    const startUrl = 'https://jurisprudencia.trf4.jus.br/pesquisa/pesquisa.php'

    this.crawlerSession!.parentUrl = startUrl
    const navigationPromise = page.waitForNavigation()

    await page.goto(startUrl, { timeout: 0 })

    await navigationPromise

    await this.setupOptions(page)

    await navigationPromise

    const finalDate = dayjs().format('DD/MM/YYYY')
    const startDate = dayjs().subtract(1, 'day').format('DD/MM/YYYY')

    await this.setupCrawlDate(page, startDate, finalDate)

    await this.setResultsPerPage(page, '50')

    await page.waitForSelector('table > tbody > tr:nth-child(1) > td > .botao:nth-child(1)')
    await page.click('table > tbody > tr:nth-child(1) > td > .botao:nth-child(1)')
  }

  /**
   * Crawl a page
   */

  async crawlPage({ page }: PageBrowser) {
    const navigationPromise = page.waitForNavigation()
    await navigationPromise
    console.log('evaluating')

    const pageJson = await this.getTableData(page)
    console.log(pageJson)
  }

  async getTableData(page: Page) {
    console.log('inside function')
    const data = await page.evaluate(() => {
      // var reg = /^(TRF4)[0-9]{8}/
      var tableRows = Array.from(document.querySelectorAll<HTMLTableRowElement>('#frmDocumentos > table.tab_resultado > tbody > tr'))

      // any type on these items because we never know what they change.
      var tempArray: any = []
      var finalArray: any = []
      var tempObj: any = {}

      tableRows.forEach((row, index, arrayCheck) => {
        var tableCols = Array.from(row.querySelectorAll<HTMLTableDataCellElement>('.td_resultado'))

        /**
       * TRF4 data is divided in colunmns.
       * exaple: id|colunm titles|values|
       *
       * The if below verify if the first column is the colunm id,
       * that is the max items per page is 50
       */
        if (row.innerText.length >= 3) {
          if (tableCols[0] && tableCols[1]) {
            /**
             * Checks if the table item is not empty or has a empty value
             */
            if (tableCols[0].innerText !== '' && tableCols[1].innerText !== '') {
              // Sanitize string
              // TODO change this function to a util
              var item = tableCols[0].innerText
                .trim()
                .replace('\n', '')
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')

              var value = tableCols[1].innerText.trim()

              // get links
              var links = Array.from(tableCols[1].querySelectorAll('a')).map(link => link.href)

              // get citacao id
              var citacao = Array.from(tableCols[1].querySelectorAll('img')).map(img => img.getAttribute('onclick'))

              if (links.length !== 0 && citacao.length !== 0) {
                tempArray.push({
                  [item]: value
                })
                tempArray.push({
                  links
                })
                tempArray.push({
                  citacao
                })
                tempObj[item] = value
                tempObj.citacao = citacao
                tempObj.links = links
              } else {
                tempArray.push({
                  [item]: value
                })
                tempObj[item] = value
              }
            }
          }
        } else {
          // TODO improve this logic. Change if to check object instead of array
          if (tempArray.length !== 0) {
            finalArray.push(tempObj)
            // clear items from temp object and temp array
            tempArray = []
            tempObj = {}
          }
        }
        if (index === arrayCheck.length - 1) {
          finalArray.push(tempObj)
        }
      })

      return finalArray
    })
    return data
  }

  async setupOptions(page: Page) {
    await page.waitForSelector('#frmPesquisar > table > tbody > tr:nth-child(1) > td:nth-child(2)')
    await page.click('#frmPesquisar > table > tbody > tr:nth-child(1) > td:nth-child(2)')

    await page.waitForSelector('table #lblTipoTodos')
    await page.click('table #lblTipoTodos')

    await page.waitForSelector('table #lblInteiroTeor')
    await page.click('table #lblInteiroTeor')
  }

  async setupCrawlDate(page: Page, startDate: string, finalDate: string) {
    await page.waitForSelector('table #dataIni')
    await page.type('table #dataIni', startDate)

    await page.waitForSelector('table #dataFim')
    await page.type('table #dataFim', finalDate)
  }

  async setResultsPerPage(page: Page, resultNumber: string) {
    await page.waitForSelector('table #docsPagina')
    await page.click('table #docsPagina')

    await page.select('table #docsPagina', resultNumber)

    await page.waitForSelector('table #docsPagina')
    await page.click('table #docsPagina')
  }

  async afterPageCrawl({ page, browser }: PageBrowser) {
    try {
      await page.waitForSelector('#sbmProximaPagina')
      await page.click('#sbmProximaPagina')

      await this.crawl({ page, browser })
    } catch (error) {
      console.log(error)
      console.log('Done. Crawler Finished from function')
      await notify({
        error: false,
        title: 'Crawler concluso',
        crawler: {
          id: this.id!,
          name: this.name!
        }
      })
      this.emit('done', { done: true, message: 'No more urls to Crawl' })

      // await browser.close()
      return Promise.resolve()
    }
  }
}

/*
function getTableTRF4 () {
// var reg = /^(TRF4)[0-9]{8}/
  var tableRows = Array.from(document.querySelectorAll('#frmDocumentos > table.tab_resultado > tbody > tr'))

  var tempArray = []
  var finalArray = []
  var tempObj = {}

  tableRows.forEach((row, index, arrayCheck) => {
    var tableCols = Array.from(row.querySelectorAll('.td_resultado'))

    // check if is the id.
    if (row.innerText.length > 3) {
      if (tableCols[0] && tableCols[1]) {
        if (tableCols[0].innerText !== '' && tableCols[1].innerText !== '') {
          var item = tableCols[0].innerText.trim().replace('\n', '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          var value = tableCols[1].innerText.trim()
          var links = Array.from(tableCols[1].querySelectorAll('a')).map(link => link.href)
          var citacao = Array.from(tableCols[1].querySelectorAll('img')).map(img => img.getAttribute('onclick'))
          if (links.length !== 0 && citacao.length !== 0) {
            tempArray.push({
              [item]: value
            })
            tempArray.push({
              links
            })
            tempArray.push({
              citacao
            })
            tempObj[item] = value
            tempObj.citacao = citacao
            tempObj.links = links
          } else {
            tempArray.push({
              [item]: value

            })
            tempObj[item] = value
          }
        }
      }
    } else {
      console.log('-- -- - - -- - -  -')
      if (tempArray.length !== 0) {
        // console.log(tempObj)
        finalArray.push(tempObj)
        tempArray = []
        tempObj = {}
      }
    }
    if (index === arrayCheck.length - 1) {
      finalArray.push(tempObj)
    }
  }
  )

  console.table(finalArray)
}
*/
