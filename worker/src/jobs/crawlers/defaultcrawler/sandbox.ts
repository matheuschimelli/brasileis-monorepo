import Apify from 'apify'
import { Job } from 'bull'
import jobResults from '../../jobResults'
import { cleanHtml, normalizeString } from '../../../lib/crawler/utils'


export default async function (job: Job) {
    const jobData = job.data
    const urlsToVisit = jobData.urlsToVisit

    console.log(urlsToVisit)

    try {
        job.progress(10)
        const oldRequestQueue = await Apify.openRequestQueue("DefaultCrawler");
        await oldRequestQueue.drop()

        const requestQueue = await Apify.openRequestQueue("DefaultCrawler");


        for (const url of urlsToVisit) {
            await requestQueue.addRequest({ url: url });
        }


        const crawler = new Apify.PuppeteerCrawler({
            requestQueue,
            async handlePageFunction({ request, page }) {

                const title = await page.title();
                const url = page.url()
                const content = await page.content();
                const body = await page.evaluate(() => document.querySelector("body")?.innerText)

                const h1s = await page.$$eval('h1', (els => els.map(h1 => h1.textContent)))
                const bs = await page.$$eval('b', (els => els.map(b => b.textContent)))
                const paragraphs = await page.$$eval('p', (els => els.map(p => p.textContent)))

                const { htmlContent } = cleanHtml(content, url)

                await jobResults.queue.add({
                    queue: 'DefaultCrawler',
                    jobData: job.data,
                    operation: 'SaveData',
                    model: 'Law',
                    result: {
                        page: {
                            title,
                            url,
                            content: htmlContent,
                            bodyText: normalizeString(body!),
                            h1s: JSON.stringify(h1s),
                            bs: JSON.stringify(bs),
                            paragraphs: JSON.stringify(paragraphs)
                        }
                    }
                });
            },
            maxRequestsPerCrawl: 0,
            launchContext: {
                stealth: true,

            }
        });

        await crawler.run();
        await job.progress(100);

    } catch (error) {
        console.log(error)
        return Promise.reject(new Error(error as string))
    }
}
