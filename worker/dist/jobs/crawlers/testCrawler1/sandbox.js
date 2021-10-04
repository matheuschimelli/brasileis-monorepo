"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const apify_1 = __importDefault(require("apify"));
const jobResults_1 = __importDefault(require("../../jobResults"));
const launchContext = {
    useChrome: true,
    stealth: true,
    launchOptions: {
        headless: true,
    },
};
async function default_1(job) {
    const jobId = job.id.toString() || "list";
    const urlsToVisit = job.data.urlsToVisit;
    console.log('job data', job.data);
    try {
        job.progress(10);
        const requestQueue = await apify_1.default.openRequestQueue(job.id.toString());
        await requestQueue.addRequest({ url: 'https://news.ycombinator.com/news' });
        const crawler = new apify_1.default.PuppeteerCrawler({
            requestQueue,
            async handlePageFunction({ request, page }) {
                console.log(request.url);
                const pageContent = await page.content();
                await apify_1.default.utils.enqueueLinks({
                    page,
                    requestQueue,
                    baseUrl: 'https://news.ycombinator.com',
                });
                await jobResults_1.default.queue.add({ result: { page: pageContent } });
            },
            maxRequestsPerCrawl: 10,
            launchContext: {
                stealth: true,
            }
        });
        await crawler.run();
    }
    catch (error) {
        console.log(error);
        return Promise.reject(new Error(error));
    }
}
exports.default = default_1;
//# sourceMappingURL=sandbox.js.map