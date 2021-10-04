"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const apify_1 = __importDefault(require("apify"));
const jobResults_1 = __importDefault(require("../../jobResults"));
const normalizeString = (str) => {
    return str.toLowerCase()
        .replace(/(\r\n|\n|\r)/gm, ' ')
        .replace(/\s{2,}/g, ' ')
        .replace(/[\u200B-\u200D\uFEFF]/g, '')
        .replace(/[§:;,.]/g, '')
        .replace(/[/()-]/g, ' ') // .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
};
async function default_1(job) {
    const jobData = job.data;
    const urlsToVisit = jobData.urlsToVisit;
    console.log(urlsToVisit);
    try {
        job.progress(10);
        const requestQueue = await apify_1.default.openRequestQueue();
        for (const url of urlsToVisit) {
            await requestQueue.addRequest({ url: url });
        }
        const crawler = new apify_1.default.PuppeteerCrawler({
            requestQueue,
            async handlePageFunction({ request, page }) {
                const title = await page.title();
                const url = page.url();
                const content = await page.content();
                const body = await page.evaluate(() => { var _a; return (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.innerText; });
                const h1s = await page.$$eval('h1', (els => els.map(h1 => h1.textContent)));
                const bs = await page.$$eval('b', (els => els.map(b => b.textContent)));
                const paragraphs = await page.$$eval('p', (els => els.map(p => p.textContent)));
                await jobResults_1.default.queue.add({
                    queue: 'DefaultCrawler',
                    jobData: job.data,
                    operation: 'SaveData',
                    model: 'Law',
                    result: {
                        page: {
                            title,
                            url,
                            content,
                            bodyText: normalizeString(body),
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
    }
    catch (error) {
        console.log(error);
        return Promise.reject(new Error(error));
    }
}
exports.default = default_1;
//# sourceMappingURL=sandbox.js.map