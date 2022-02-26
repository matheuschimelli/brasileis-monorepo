import axios from "axios";
import cheerio from 'cheerio';

import { chromium } from "playwright";

export const playwrightCrawler = async () => {
    const RESOURCE_EXCLUSTIONS = ['image', 'stylesheet', 'media', 'font', 'other'];

    const browser = await chromium.launch({
        chromiumSandbox: false,
        headless: true,
        args: [
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote',
            '--single-process',
            '--disable-accelerated-2d-canvas'
        ],
    })
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

    await page.route('**/*', (route) => {
        return RESOURCE_EXCLUSTIONS.includes(route.request().resourceType())
            ? route.abort()
            : route.continue()
    });
    return {
        browser,
        page,
        navigationPromise
    }
}

export const axiosCrawler = async (url: string) => {
    const res = await axios.get(url)
    if (res.statusText !== "OK") throw new Error(`Pagina indisponível ${url}`)

    const pageHtml = res.data
    const $ = cheerio.load(pageHtml)

    return {
        html: pageHtml,
        $
    }

}