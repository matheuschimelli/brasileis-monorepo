// @ts-nocheck
import { Job } from "bull";
import Apify from 'apify'
import type { Page } from "puppeteer";
import { sendResult } from "../../";
import { runOnSandbox } from '../../../lib/job-utils'

export default async function (job: Job) {
    try {
        const jobData = job.data
        console.log("STARTING CRALER")

        const browser = await Apify.launchPlaywright({
            launchOptions: {
                headless: false,
                args: [
                    '--disable-gpu',
                    '--disable-dev-shm-usage',
                    '--disable-setuid-sandbox',
                    '--no-first-run',
                    '--no-sandbox',
                    '--no-zygote',
                    '--single-process',
                ],
            }
        })

        console.log('Opening web page...');
        const page: Page = await browser.newPage();

        await page.goto('http://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm');

        await page.addScriptTag({ path: "script.js" })

        await page.evaluate(() => {
            alert("working")
        });


        // Get all "Did you know" items from the page.
        const results = await page.$$eval('div#mp-dyk > ul li', (nodes: any) => nodes.map((node: any) => node.innerText.replace('...', 'Did you know')));

        await sendResult({
            queue: jobData.queue,
            data: jobData.jobData,
            result: { data: job.data, results }
        })
        // Close browser
        await browser.close();
        console.log("DONEE")
    } catch (err) {
        console.log(err)
        return Promise.reject(err)
    }

}