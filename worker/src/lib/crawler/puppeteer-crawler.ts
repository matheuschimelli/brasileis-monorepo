import puppeteer, { Browser, Page } from 'puppeteer'

type CrawlerParams = {
    headless?: false
}

export default class Crawler {
    headless: boolean | undefined

    constructor(params: CrawlerParams) {
        this.headless = params.headless
    }
    async lauchBrowser() {
        const browser = await puppeteer.launch({
            headless: this.headless,
            args: [
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--disable-setuid-sandbox',
                '--no-first-run',
                '--no-sandbox',
                '--no-zygote',
                '--single-process',
                '--disable-accelerated-2d-canvas'
            ]
        })
        const page = await browser.newPage()

        await this.beforeCrawl(page, browser)
        await this.internalCrawl(page, browser)
    }

    async internalCrawl(page: Page, browser: Browser) {

        await this.crawl(page, browser)
        await this.afterCrawl(page, browser)

    }
    async beforeCrawl(page: Page, browser: Browser) {
        throw new Error('CrawlPage is not overridden!')

    }

    async crawl(page: Page, browser: Browser) {
        throw new Error('CrawlPage is not overridden!')
    }

    async afterCrawl(page?: Page, browser?: Browser) {
        throw new Error('AfterPageCrawl is not overridden!')
    }

    run() {
        this.lauchBrowser()
            .then(() => console.log("Running Crawler"))
            .catch(e => {
                throw new Error(e)
            })
    }
}