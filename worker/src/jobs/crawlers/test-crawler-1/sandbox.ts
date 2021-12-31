/* eslint-disable @typescript-eslint/no-unused-vars */
import Apify, { PuppeteerHandlePage } from 'apify'
import dotenv from 'dotenv'
import { Job } from 'bull'
import jobResults from '../../job-results'

const launchContext = {
    useChrome: true,
    stealth: true,
    launchOptions: {
        headless: true,
    },
};

export default async function (job: Job) {

    const jobId = job.id.toString() || "list"
    const urlsToVisit = job.data.urlsToVisit

    console.log('job data', job.data)

    try {
        job.progress(10)
        const requestQueue = await Apify.openRequestQueue(job.id.toString());
        await requestQueue.addRequest({ url: 'https://news.ycombinator.com/news' });


        const crawler = new Apify.PuppeteerCrawler({
            requestQueue,
            async handlePageFunction({ request, page }) {
                console.log(request.url);
                const pageContent = await page.content()

                await Apify.utils.enqueueLinks({
                    page,
                    requestQueue,
                    baseUrl: 'https://news.ycombinator.com',
                });
                await jobResults.queue.add({ result: { page: pageContent } })
            },
            maxRequestsPerCrawl: 10,
            launchContext: {
                stealth: true,
            }
        });

        await crawler.run();
    } catch (error) {
        console.log(error)
        return Promise.reject(new Error(error as string))
    }
}
