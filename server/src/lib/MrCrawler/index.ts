/* eslint-disable @typescript-eslint/no-unused-vars */
import { EventEmitter } from 'events'
import { PageData, PageBrowser, Crawler, Notification } from '../../types'
import { Page, Browser } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

import notify from '../../utils/slackNotifier'
import { Category } from '../../models/Category'
import { SubCategory } from '../../models/SubCategory'

// @TODO fix all type errors workarounded with ts-ignore

export default class MrCrawler extends EventEmitter {
  public name?: string;
  public id?: string | number;
  public categories?: Category[];
  public subCategories?: SubCategory[];
  public enableLogs?: boolean;
  public debug?: boolean;
  public headless?: boolean;
  public baseUrl?: string;
  public redisConnection?: {
    host: string;
    port: number;
  }

  public startUrl?: string;
  public urlsToVisit?: string[]
  public urlsFoundInPageToVisit?: string[]
  public followBaseUrl?: boolean;
  public selectors: {
    page: {
      title?: string;
      content?: string;
      /**
       * Content which contains a list with urls to be crawled.
       */
      contentIndex?: string;
    }
  }

  public useFallBackForAll?: boolean;
  public useContentIndexFallBack?: boolean;

  public crawlerSession?: {
    parentUrl?: string,
    currentUrl?: string;
    previousUrl?: string;
    nextUrl?: string;
    urlsToVisit?: string[];
    urlsFoundInPageToVisit?: string[];
    usingRedis?: boolean;
    currentPage?: Page
  }

  private sessionBrowser?: Browser;

  constructor(params: Crawler) {
    super()
    console.log('CRAWLER PARAMS')
    console.log(params)
    this.name = params.name
    this.id = params.id
    this.categories = params.categories
    this.subCategories = params.subCategories
    this.enableLogs = params.enableLogs
    this.debug = params.debug
    this.headless = params.headless
    this.baseUrl = params.baseUrl
    this.redisConnection = params.redisConnection
    this.startUrl = params.startUrl
    this.urlsToVisit = params.urlsToVisit
    this.urlsFoundInPageToVisit = params.urlsFoundInPageToVisit
    this.followBaseUrl = params.followBaseUrl
    this.selectors = {
      page: {
        title: params.selectors.page.title,
        content: params.selectors.page.content,
        /**
           * Content which contains a list with urls to be crawled.
           */
        contentIndex: params.selectors.page.contentIndex
      }
    }
    this.useFallBackForAll = undefined
    this.useContentIndexFallBack = undefined
    this.crawlerSession = {
      currentPage: undefined,
      currentUrl: undefined,
      nextUrl: undefined,
      parentUrl: undefined,
      previousUrl: undefined,
      urlsToVisit: undefined,
      urlsFoundInPageToVisit: undefined,
      usingRedis: false
    }
    this.sessionBrowser = undefined
  }

  async lauchBrowser() {
    const browser = await puppeteer
      .use(StealthPlugin())
      .launch({
        headless: true, // this.headless,
        ignoreHTTPSErrors: true,
        args: [
          '--disable-gpu',
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--disable-infobars',
          '--window-position=0,0',
          '--ignore-certifcate-errors',
          '--ignore-certifcate-errors-spki-list']
      })
    // @ts-ignore
    this.sessionBrowser = browser
    const page = await browser.newPage()
    // await page.evaluateOnNewDocument(preloadFile)
    // @ts-ignore
    await this.beforeLauchPage({ page, browser })
    // @ts-ignore
    await this.customBeforeLauchPage({ page, browser })
    // @ts-ignore
    await this.crawl({ page, browser })
  }

  async runCrawler() {
    try {
      console.log('Starting Browser')
      await this.lauchBrowser()
    } catch (err) {
      await notify({
        error: true,
        title: 'Erro',
        errorMsg: `${err}`,
        crawler: {
          id: this.id!,
          name: this.name!
        }
      })
      if (this.sessionBrowser) {
        await this.sessionBrowser.close()
      }
      throw new Error(`RunCrawler: ${err}`)
    }
  }

  async enableRequestInterception(page: Page) {
    try {
      page.on('dialog', (dialog) => {
        dialog.dismiss()
      })

      page.on('request', (request) => {
        if (['image',
          'stylesheet',
          'font',
          'texttrack',
          'object',
          'beacon',
          'csp_report',
          'imageset'].includes(request.resourceType())) {
          return request.abort()
        }
        return request.continue()
      })
    } catch (error) {
      throw new Error(`EnableRequestInterception: ${error}`)
    }
  }

  async crawl({ page, browser }: PageBrowser) {
    await this.crawlPage({ page, browser })
    await this.afterPageCrawl({ page, browser })
  }

  async beforeLauchPage({ page, browser }: PageBrowser) {
    this.emit('log', 'before crawl')
    await page.setRequestInterception(true)
    // TODO

    await this.enableRequestInterception(page)
    // page.setDefaultTimeout(0)
  }

  async customBeforeLauchPage({ page, browser }: PageBrowser) {
    throw new Error('customBeforeLauchPage not overrriden')
  }

  async crawlPage({ page, browser }: PageBrowser) {
    throw new Error('CrawlPage is not overridden!')
  }

  async afterPageCrawl({ page, browser }: PageBrowser) {
    throw new Error('AfterPageCrawl is not overridden!')
  }

  /**
   * getPageData
   * @param page Puppeteer page should be passed
   * @param selectors Selectors which should be setted to be scraped/. {title, contentSelector, baseUrl}
   */
  async getPageData(page: Page, { titleSel, contentSel, contentIndex, baseUrl }: { titleSel: string, contentSel: string, contentIndex: string; baseUrl: string }): Promise<PageData> {
    console.log(page.url())
    const pageData = await page.evaluate(async (titleSelProp, contentSelProp, contentIndexProp, baseUrlProp) => {
      const rmSpaceBreak = (str: string) => {
        return str.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s{2,}/g, ' ').replace(/[\u200B-\u200D\uFEFF]/g, '').trim()
      }
      const fixString = (str: string) => {
        return str.toLowerCase()
          .replace(/(\r\n|\n|\r)/gm, ' ')
          .replace(/\s{2,}/g, ' ')
          .replace(/[\u200B-\u200D\uFEFF]/g, '')
          .replace(/[§:;,.]/g, '')
          .replace(/[/()-]/g, ' ') // .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/\s{2,}/g, ' ')
          .trim()
      }
      const title = rmSpaceBreak(document.querySelector(titleSelProp).innerText) || rmSpaceBreak(document.querySelector('h1')!.innerText || rmSpaceBreak(document.querySelector('title')!.innerText))
      const contentSelectors = [
        contentSelProp,
        '#content',
        '#container',
        '#main',
        '#article',
        '#post',
        '.content',
        '.container',
        '.main',
        '.article',
        '.post',
        'container',
        'article',
        'main',
        'body'
      ]
      const content = fixString(contentSelectors.map(el => document.querySelector(el)).filter(el => !!el)[0].innerText)

      const htmlContent = rmSpaceBreak(contentSelectors.map(el => document.querySelector(el)).filter(el => !!el)[0].innerHTML)

      /**
       * If the content selector couldn't be found
       * it fallbacks to a given selector list which contains
       * all selectors a page could have.
       */
      const fallBackSelector = contentSelectors.map(el => document.querySelector(el)).filter(el => !!el)[0]

      const contentWithUrls = document.querySelector(contentIndexProp) || document.querySelector(contentSelProp) || document.querySelector(fallBackSelector)
      const allContentIndexAnchors = Array.from(contentWithUrls.querySelectorAll('a'))
        .map((a: any) => { return a.href })
        .filter((link) => { return link.includes(baseUrlProp) })
        .filter(function (el) {
          return el != null
        })
        .filter(function (el) {
          return el.indexOf('.pdf') === -1
        })
        .filter(function (el) {
          return el.indexOf('.js') === -1
        })
        .filter(function (el) {
          return el.indexOf('.txt') === -1
        })
        .filter(function (el) {
          return el.indexOf('.xls') === -1
        })
        .filter(function (el) {
          return el.indexOf('.doc') === -1
        })
        .filter(function (el) {
          return el.indexOf('.docx') === -1
        })
        .filter(function (el) {
          return el.indexOf('.xlsx') === -1
        })
        .filter(function (elem, index, self) {
          return index === self.indexOf(elem)
        })

      const allAnchors = Array.from(document.querySelectorAll('a'))
        .map((a: any) => { return a.href })
        .filter((link) => { return link.includes(baseUrlProp) })
        .filter(function (el) {
          return el != null
        })
        .filter(function (elem, index, self) {
          return index === self.indexOf(elem)
        })

      const anchors = allAnchors.filter(function (item, pos) {
        return allAnchors.indexOf(item) === pos
      })

      const h1Element = Array.from(document.querySelectorAll('h1')).map((h1) => {
        return rmSpaceBreak(h1.innerText)
      }
      ).filter(function (el) { return el != null })

      const h2Element = Array.from(document.querySelectorAll('h2')).map((h2) => {
        return rmSpaceBreak(h2.innerText)
      }
      ).filter(function (el) { return el != null })

      const h3Element = Array.from(document.querySelectorAll('h3')).map((h3) => {
        return rmSpaceBreak(h3.innerText)
      }
      ).filter(function (el) { return el != null })

      const h4Element = Array.from(document.querySelectorAll('h4')).map((h4) => {
        return rmSpaceBreak(h4.innerText)
      }
      ).filter(function (el) { return el != null })

      const pElement = Array.from(document.querySelectorAll('p')).map((pEl) => {
        return rmSpaceBreak(pEl.innerText)
      }
      ).filter(function (el) { return el != null })

      const bElement = Array.from(document.querySelectorAll('b')).map((bEl) => {
        return rmSpaceBreak(bEl.innerText)
      }
      ).filter(function (el) { return el != null })

      const iElement = Array.from(document.querySelectorAll('i')).map((iEl) => {
        return rmSpaceBreak(iEl.innerText)
      }
      ).filter(function (el) { return el != null })

      const pageHTML = rmSpaceBreak(document.querySelector('html')!.innerHTML)

      const pageText = rmSpaceBreak(document.querySelector('html')!.innerText)

      async function getCleanHTML(elementSelector: any) {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          const parser = new DOMParser()
          const pageHTMLSOurce = elementSelector.innerHTML
          const elToGetAttrRemoved = parser.parseFromString(pageHTMLSOurce, 'text/html')
          const anchors = Array.from(elToGetAttrRemoved.querySelectorAll('a'))
          const htmlElements = ['h1', 'h2', 'div', 'p', 'b', 'a', 'span']
          const decretosRegex = /((decreto)|(lei)(artigo))+( )+(\d+(\.\d{2,4})?)+(,| |\.)+(de|do|da)+( )+(((\d+)-(\d+)-(\d+))|((\d+)\/(\d+)\/(\d+))|((\d+) de (\d+) de (\d+)))/gi

          function removeHTMLAttrs() {
            for (const singleElment of htmlElements) {
              const p = Array.from(elToGetAttrRemoved.querySelectorAll(singleElment))
              for (const el of p) {
                for (var i = el.attributes.length - 1; i >= 0; i--) {
                  el.removeAttribute(el.attributes[i].name)
                }
              }
            }
          }
          function removeAnchorKeepText() {
            for (const anchor of anchors) {
              var parentEl = anchor.parentNode
              while (anchor.firstChild) {
                parentEl!.insertBefore(anchor.firstChild, anchor)
              }
              parentEl!.removeChild(anchor)
            }
          }
          function removeHtmlElement(element: string) {
            var el = elToGetAttrRemoved.querySelectorAll(element)
            for (var i = 0; i < el.length; i++) {
              el[i].parentNode!.removeChild(el[i])
            }
          }
          function rmSpaceBreak(str: string) {
            return str.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s{2,}/g, ' ').replace(/[\u200B-\u200D\uFEFF]/g, '').trim()
          }
          removeHTMLAttrs()
          removeAnchorKeepText()
          removeHtmlElement('img')
          removeHtmlElement('iframe')

          const htmlContentToBeFixed = rmSpaceBreak(elToGetAttrRemoved.body.innerHTML)
          const decretosMatch = htmlContentToBeFixed.match(decretosRegex)

          var textToBeReplaced = htmlContentToBeFixed

          function findAndFixText(wordFound: string) {
            return new Promise<void>((resolve, reject) => {
              textToBeReplaced = textToBeReplaced.replace(wordFound, `<a href='/finder?term=${wordFound}' id="lawReference">${wordFound}</a>`)
              resolve()
            }
            )
          }

          async function findAndReplace(matches: any) {
            if (matches) {
              var nArray = matches.filter(function (item: any, pos: any) {
                return matches.indexOf(item) === pos
              })
              for (const found of nArray) {
                await findAndFixText(found)
              }
            }
          }

          findAndReplace(decretosMatch).then(() => {
            resolve(textToBeReplaced)
            // document.querySelector("#dvRich").innerHTML = textToBeReplaced
          })
        }
        )
      }
      // const cleanedHTML = await getCleanHTML(fallBackSelector)

      return {
        title,
        content,
        htmlContent,
        // cleanedHTML,
        anchors,
        h1Element,
        h2Element,
        h3Element,
        h4Element,
        pElement,
        bElement,
        iElement,
        pageHTML,
        pageText,
        allContentIndexAnchors
      }
    }, titleSel, contentSel, contentIndex, baseUrl)

    return {
      title: pageData.title,
      content: pageData.content,
      contentHtml: pageData.htmlContent,
      // cleanHTML: pageData.cleanedHTML,
      h1: pageData.h1Element,
      h2: pageData.h2Element,
      h3: pageData.h3Element,
      h4: pageData.h4Element,
      b: pageData.bElement,
      i: pageData.iElement,
      anchors: pageData.anchors,
      pageHTML: pageData.pageHTML,
      pageText: pageData.pageText,
      contentIndexUrls: pageData.allContentIndexAnchors
    }
  }

  /**
   * Page Selectors Utils
   */
  async getTitle(page: Page) {
    const title = await page.evaluate((titleSel) => {
      const titleSelectors = [titleSel, 'h1', 'h2', 'h3', 'title']
      const text = titleSelectors.map(el => document.querySelector<HTMLElement>(el)!).filter(el => !!el)[0].innerText
      const html = titleSelectors.map(el => document.querySelector<HTMLElement>(el)!).filter(el => !!el)[0].innerHTML
      return { text, html }
    }, this.selectors.page.title as string)
    return {
      html: this.removeBreakSpace(title.html),
      text: this.removeBreakSpace(title.text)
    }
  }

  async getContent(page: Page, selector: string) {
    const title = await page.evaluate((sel) => {
      const contentSelectors = [
        sel,
        '#content',
        '#container',
        '#main',
        '#article',
        '#post',
        '.content',
        '.container',
        '.main',
        '.article',
        '.post',
        'container',
        'article',
        'main',
        'body'
      ]
      const text = contentSelectors.map(el => document.querySelector<HTMLElement>(el)!).filter(el => !!el)[0].innerText
      const html = contentSelectors.map(el => document.querySelector<HTMLElement>(el)!).filter(el => !!el)[0].innerHTML
      return { text, html }
    }, selector)
    return {
      html: this.removeBreakSpace(title.html),
      text: this.normalizeString(title.text)
    }
  }

  async getContentLinks(page: Page, { selector, baseUrlProp }: { selector: string, baseUrlProp: string }) {
    const links = await page.evaluate((sel, urlPattern) => {
      const contentSelectors = [
        sel,
        '#content',
        '#container',
        '#main',
        '#article',
        '#post',
        '.content',
        '.container',
        '.main',
        '.article',
        '.post',
        'container',
        'article',
        'main',
        'body'
      ]
      const links = contentSelectors.map(el => document.querySelector<HTMLElement>(el)!).filter(el => !!el)[0]
      const allContentIndexAnchors = Array.from(links.querySelectorAll('a'))
        .map((a: HTMLAnchorElement) => { return a.href })
        .filter((link) => {
          if (link.includes(urlPattern)) {
            return link
          }
        })
        .filter(function (el) {
          return el != null
        })
        .filter(function (el) {
          return el.indexOf('.pdf') === -1
        })
        .filter(function (el) {
          return el.indexOf('.js') === -1
        })
        .filter(function (el) {
          return el.indexOf('.txt') === -1
        })
        .filter(function (el) {
          return el.indexOf('.xls') === -1
        })
        .filter(function (el) {
          return el.indexOf('.doc') === -1
        })
        .filter(function (el) {
          return el.indexOf('.docx') === -1
        })
        .filter(function (el) {
          return el.indexOf('.xlsx') === -1
        })
        .filter(function (el) {
          return el.indexOf('.midi') === -1
        })
        .filter(function (el) {
          return el.indexOf('.zip') === -1
        })
        .filter(function (el) {
          return el.indexOf('.csv') === -1
        })
        .filter(function (elem, index, self) {
          return index === self.indexOf(elem)
        })

      return allContentIndexAnchors
    }, selector, baseUrlProp)
    return links
  }

  async getPageLinks(page: Page, urlFilter: string) {
    const links = await page.evaluate((baseUrlProp) => {
      const allAnchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a'))
        .map((a: HTMLAnchorElement) => { return a.href })
        .filter((link) => { return link.includes(baseUrlProp) })
        .filter(function (el) {
          return el != null
        })
        .filter(function (elem, index, self) {
          return index === self.indexOf(elem)
        })
      return allAnchors
    }, urlFilter)
    return links
  }

  async getFullPage(page: Page) {
    const fullPage = await page.evaluate(() => {
      const text = document.querySelector('html')!.innerText
      const html = document.querySelector('html')!.innerText
      return { text, html }
    })
    return {
      html: this.removeBreakSpace(fullPage.html),
      text: this.normalizeString(fullPage.text)
    }
  }

  /**
   * Crawler Utils
   */

  /**
    * Normalize a string removing
    * all kinds of spaces and break lines.
    * Also remove dots and commas
    * @param str
    */
  normalizeString(str: string) {
    return str.toLowerCase()
      .replace(/(\r\n|\n|\r)/gm, ' ')
      .replace(/\s{2,}/g, ' ')
      .replace(/[\u200B-\u200D\uFEFF]/g, '')
      .replace(/[§:;,.]/g, '')
      .replace(/[/()-]/g, ' ') // .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim()
  }

  /**
   * Removes all breakspaces and trim a string
   * @param str
   */
  removeBreakSpace(str: string) {
    return str
      .replace(/(\r\n|\n|\r)/gm, ' ')
      .replace(/\s{2,}/g, ' ')
      .replace(/[\u200B-\u200D\uFEFF]/g, '')
      .trim()
  }

  // @ts-ignore
  public async setupPage(browser: puppeteer.Browser) {
    const page2 = await browser.newPage()
    await page2.setRequestInterception(true)
    await this.enableRequestInterception(page2)

    return page2
  }

  public getThisCrawler() {
    return {
      name: this.name,
      id: this.id,
      categories: this.categories,
      subCategories: this.subCategories,
      enableLogs: this.enableLogs,
      headless: this.headless,
      redis: this.redisConnection,
      baseUrl: this.baseUrl,
      startUrl: this.startUrl,
      urlsToVisit: this.urlsToVisit,
      urlsFoundInPageToVisit: this.urlsFoundInPageToVisit,
      followBaseUrl: this.followBaseUrl,
      selectors: this.selectors,
      currentSession: {
        parentUrl: this.crawlerSession?.parentUrl,
        currentUrl: this.crawlerSession?.currentUrl,
        previousUrl: this.crawlerSession?.previousUrl,
        nextUrl: this.crawlerSession?.nextUrl,
        urlsToVisit: this.crawlerSession?.urlsToVisit,
        urlsFoundInPageToVisit: this.crawlerSession?.urlsFoundInPageToVisit,
        usingRedis: this.crawlerSession?.usingRedis,
        currentPage: this.crawlerSession?.currentPage
      }
    }
  }
}
