import { getRepository } from 'typeorm'
import { PageBrowser } from '../../../types'
import MrCrawler from '../../../lib/MrCrawler'
import Category from '../../../models/Category'
import SubCategory from '../../../models/SubCategory'
import Crawler from '../../../models/Crawler'
import Law from '../../../models/Law'
import SearchService from '../../../utils/Search'
import { Readability } from '@mozilla/readability'
import { JSDOM } from 'jsdom'
import notify from '../../../utils/slackNotifier'

const searchService = new SearchService()

interface EsCategories {
  categories?: string[];
  subCategories?: string[];
  categoriesIds?: string[] | number[];
  subCategoriesIds?: string[] | number[];
}

export default class DefaultCrawler extends MrCrawler {
  async customBeforeLauchPage({ page }: PageBrowser) {
    const startUrl = this.urlsToVisit?.shift()
    if (startUrl) {
      this.crawlerSession!.parentUrl = startUrl
      await page.goto(startUrl, { timeout: 0 })
    }
  }

  /**
   * Crawl a page
   */

  async crawlPage({ page, browser }: PageBrowser) {
    console.log(this.selectors.page)

    await this.waitContentSelector({ page, browser })

    const links = await this.getContentLinks(page, {
      selector: this.selectors.page.contentIndex as string,
      baseUrlProp: this.baseUrl as string
    })

    if (!links) {
      await notify({
        error: true,
        title: 'Erro',
        errorMsg: 'There are an error. The Crawler cannot found the selector for urls index',
        crawler: {
          id: this.id!,
          name: this.name!
        }
      })
      throw new Error('CrawlPage: There are an error. The Crawler cannot found the selector for urls index')
    }

    this.urlsFoundInPageToVisit = links

    if (this.urlsFoundInPageToVisit?.length !== 0) {
      await this.openNewTabAndScrape({ page, browser })
    }
  }

  private async waitContentSelector({ page, browser }: PageBrowser) {
    try {
      await page.waitForSelector(this.selectors.page.contentIndex as string, { timeout: 5000 })
    } catch {
      console.log('handling error')
      return await this.afterPageCrawl({ page, browser })
    }
  }

  async openNewTabAndScrape({ browser }: PageBrowser) {
    const page2 = await this.setupPage(browser)

    while (this.urlsFoundInPageToVisit?.length !== 0) {
      const url = this.urlsFoundInPageToVisit?.shift()
      if (url) {
        const response = await page2.goto(url, { timeout: 0, waitUntil: 'domcontentloaded' })
        console.log(page2.url())

        if (response) {
          if (response.status() !== 500 || response.status() !== 404 || response.status() !== 403) {
            this.crawlerSession!.currentUrl = url

            const title = await this.getTitle(page2)
            const content = await this.getContent(page2, this.selectors.page.content as string)

            await this.useStorageDriver({
              title: title.text,
              content: content.text,
              contentHtml: content.html
            })
          }
        }
      }
    }
    await page2.close()
  }

  /**
   *
   * @param law Add a new document to Elastic Search
   */
  async upsertESDoc(law: Law, categories: EsCategories) {
    try {
      await searchService.upsertDoc({
        indexName: 'law',
        document: {
          docId: law.id.toString(),
          docType: 'lei',
          url: law.url,
          title: law.title,
          updatedAt: law.updatedAt,
          textContent: law.textContent,
          slug: law.slug,
          lawId: law.id,
          categories: categories.categories,
          categoriesIds: categories.categoriesIds,
          subCategories: categories.subCategories,
          subCategoriesIds: categories.subCategoriesIds
        }
      })
    } catch (err) {
      await notify({
        error: true,
        title: 'upsertESDoc: Erro',
        errorMsg: `${err}`,
        crawler: {
          id: this.id!,
          name: this.name!
        }
      })
      throw new Error(`ElasticSearch UpsertDoc: ${err}`)
    }
  }

  async useStorageDriver(data: { title: string, content: string, contentHtml: string }) {
    const {
      title,
      content,
      contentHtml
    } = data

    const {
      id: crawlerId,
      categories,
      subCategories,
      currentSession: {
        currentUrl,
        parentUrl
      },
      selectors: {
        page: {
          content: pageContentSelector
        }
      }
    } = this.getThisCrawler()

    const categoryRepo = getRepository(Category)
    const subCategoryRepo = getRepository(SubCategory)
    const crawlerRepo = getRepository(Crawler)
    const lawRepo = getRepository(Law)

    /**
     * category.map(({ name, slug, ...rest }) => rest).map(el => el.id)
     * removes name and slug from category
     * returns category id.
     *
     */

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getCategoriesIds = categories.map(({ name, slug, ...rest }) => rest).map(el => el.id)
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getSubCategoriesIds = subCategories.map(({ name, slug, ...rest }) => rest).map(el => el.id)
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const categoriesNames = categories.map(({ articles, crawlers, ...rest }) => rest).map(el => el.name)
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const categoriesIds = categories.map(({ articles, crawlers, ...rest }) => rest).map(el => el.id)
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const subCategoriesNames = subCategories.map(({ articles, crawlers, ...rest }) => rest).map(el => el.name)
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const subCategoriesIds = subCategories.map(({ articles, crawlers, ...rest }) => rest).map(el => el.id)

    const foundCategories = await categoryRepo.findByIds(getCategoriesIds)
    const foundSubCategories = await subCategoryRepo.findByIds(getSubCategoriesIds)
    const foundCrawler = await crawlerRepo.findOne(crawlerId)

    const cleanHtml = await this.clearHtml(contentHtml, currentUrl!)

    try {
      const existsLaw = await lawRepo.findOne({ where: { url: currentUrl } })

      if (!existsLaw) {
        console.log('RUNNING CREATE')
        const newLaw = lawRepo.create()
        newLaw.title = title
        newLaw.published = true
        newLaw.parentUrl = parentUrl!
        newLaw.htmlContent = cleanHtml
        newLaw.textContent = content
        newLaw.categories = foundCategories
        newLaw.subCategories = foundSubCategories
        newLaw.contentHtmlSelector = pageContentSelector!
        newLaw.crawler = foundCrawler!
        newLaw.url = currentUrl!
        newLaw.updatedAt = new Date()
        newLaw.createdAt = new Date()
        await lawRepo.save(newLaw)

        await this.upsertESDoc(newLaw, {
          categories: categoriesNames,
          categoriesIds: categoriesIds,
          subCategories: subCategoriesNames,
          subCategoriesIds: subCategoriesIds
        })
        return newLaw
      }
      console.log('RUNNING UPDATE')
      existsLaw.title = title
      existsLaw.published = true
      existsLaw.parentUrl = parentUrl!
      existsLaw.htmlContent = cleanHtml
      existsLaw.textContent = content
      existsLaw.categories = foundCategories
      existsLaw.subCategories = foundSubCategories
      existsLaw.contentHtmlSelector = pageContentSelector!
      existsLaw.crawler = foundCrawler!
      existsLaw.updatedAt = new Date()
      await lawRepo.save(existsLaw)
      await this.upsertESDoc(existsLaw, {
        categories: categoriesNames,
        categoriesIds: categoriesIds,
        subCategories: subCategoriesNames,
        subCategoriesIds: subCategoriesIds
      })
      return existsLaw
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
      throw new Error(`TypeORM upsert Doc: ${err}`)
    }
  }

  clearHtml(html: string, url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const doc = new JSDOM(html, {
        url: url
      })
      const reader = new Readability(doc.window.document, {
        keepClasses: true
      })
      // @ts-ignore
      const cleanHtml = reader.parse().content

      if (cleanHtml) {
        return resolve(cleanHtml)
      } else {
        reject(Error('Cannot clean html'))
      }
    })
  }

  async afterPageCrawl({ page, browser }: PageBrowser) {
    const nextUrlToVisit = this.urlsToVisit!.shift()

    console.log('next urkl', nextUrlToVisit)
    if (nextUrlToVisit) {
      await page.goto(nextUrlToVisit)
      await this.crawl({ page, browser })
    } else {
      await page.close()
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

      await browser.close()
      return Promise.resolve()
    }
  }
}
