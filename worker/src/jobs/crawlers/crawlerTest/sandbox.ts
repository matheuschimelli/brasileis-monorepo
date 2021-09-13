/* eslint-disable @typescript-eslint/no-unused-vars */
import Apify, { PuppeteerHandlePage } from 'apify'
import dotenv from 'dotenv'
import { Job } from 'bull'
import jobResults from '../../jobResults'

const normalizeString = (str: string) => {
    return str.toLowerCase()
        .replace(/(\r\n|\n|\r)/gm, ' ')
        .replace(/\s{2,}/g, ' ')
        .replace(/[\u200B-\u200D\uFEFF]/g, '')
        .replace(/[§:;,.]/g, '')
        .replace(/[/()-]/g, ' ') // .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\s{2,}/g, ' ')
        .trim()
}

export default async function (job: Job) {
    const jobData = job.data
    const urlsToVisit = jobData.urlsToVisit

    // console.log('job data', job.data)
    console.log(urlsToVisit)

    try {
        job.progress(10)
        const requestQueue = await Apify.openRequestQueue(job.id.toString());

        for (const url of urlsToVisit) {
            await requestQueue.addRequest({ url: url });
        }


        const crawler = new Apify.PuppeteerCrawler({
            requestQueue,
            async handlePageFunction({ request, page }) {

                const title = await page.title();
                const url = page.url()
                const content = await page.content();
                const body = await page.$eval('body', (el => el.textContent))
                const h1s = await page.$$eval('h1', (els => els.map(h1 => h1.textContent)))
                const bs = await page.$$eval('b', (els => els.map(b => b.textContent)))
                const paragraphs = await page.$$eval('p', (els => els.map(p => p.textContent)))

                await jobResults.queue.add({
                    queue: 'CrawlerTest',
                    jobData: job.data,
                    result: {
                        page: {
                            title,
                            url,
                            content,
                            bodyText: normalizeString(body!),
                            h1s: JSON.stringify(h1s),
                            bs: JSON.stringify(bs),
                            paragraphs: JSON.stringify(paragraphs)
                        }
                    }
                });
            },
            maxRequestsPerCrawl: 10,
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
