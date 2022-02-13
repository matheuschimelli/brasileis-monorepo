import { Job } from "bull";
import { chromium } from "playwright";
import { crawlerTJPRJurisprudenciaWorker, sendResult } from "../../";


export default async function (job: Job) {
    const RESOURCE_EXCLUSTIONS = ['image', 'stylesheet', 'media', 'font', 'other'];


    try {
        const browser = await chromium.launch({
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

        await page.goto('https://portal.tjpr.jus.br/jurisprudencia/publico/pesquisa.do?actionType=pesquisar', {
            waitUntil: 'domcontentloaded'
        })

        await navigationPromise

        await page.waitForSelector('tr:nth-child(2) > td > #navigator > .navRight > .arrowNextOn')

        const goNext = async () => {

            while (true) {
                await page.waitForSelector(".resultTable.jurisprudencia", {
                    state: "visible"
                })
                const pageLinks = await page.$eval(".resultTable.jurisprudencia", (e) => {
                    return Array.from(e.querySelectorAll("a")).map(a => a.href).filter(a => a.includes("https"))
                })
                for (const link of pageLinks) {
                    await crawlerTJPRJurisprudenciaWorker.add({
                        queue: "TJPRJurisprudencia Worker",
                        source: link,
                        result: null
                    })
                }

                //await page.$eval('tr:nth-child(2) > td > #navigator > .navRight > .arrowNextOn', elem => elem.click());
                await page.dispatchEvent('tr:nth-child(2) > td > #navigator > .navRight > .arrowNextOn', 'click');
            }
        }
        await goNext()

        await browser.close()

    } catch (error) {
        console.log(error)
        return Promise.reject(error)
    }

}