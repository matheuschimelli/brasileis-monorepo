import Category from '../models/Category'
import SubCategory from '../models/SubCategory'

declare interface CrawlerParams {
    id: string|number,
    name?: string,
    categories?: Category[],
    subCategories?: SubCategory[],
    selectors?: {
      page: {
        title: string
        content: string,
        contentIndex: string
      }
    },
    baseUrl?: string,
    crawlerType: 'axios'|'puppeteer'|'custom'
    headless?: boolean,
    followBaseUrl?: boolean,
    urlsToVisit?:string[]
}

class CrawlerBase {
    public id: string|number
    public name?: string
    public categories?: Category[]
    public subCategories?: SubCategory[]
    public selectors?: {
        page: {
          title: string
          content: string,
          contentIndex: string
        }
      }

    public baseUrl?: string
    public crawlerType: 'axios'|'puppeteer'|'custom'
    public headless?: boolean
    public followBaseUrl?: boolean
    public urlsToVisit?:string[]

    constructor (params:CrawlerParams) {
      this.id = params.id
      this.name = params.name
      this.categories = params.categories
      this.subCategories = params.subCategories
      this.selectors = params.selectors
      this.baseUrl = params.baseUrl
      this.crawlerType = params.crawlerType
      this.headless = params.headless
      this.followBaseUrl = params.followBaseUrl
      this.urlsToVisit = params.urlsToVisit
    }

    public async run () {
      await this.execute()
    }

    public async execute () {
      throw new Error('Not overriden')
    }
}

export default CrawlerBase
