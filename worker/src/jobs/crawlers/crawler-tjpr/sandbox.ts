import { Job } from "bull";
import { crawlerTJPRJurisprudenciaWorker } from "../../";
import { playwrightCrawler } from "../../../lib/crawler-base";

export default async function (job: Job) {

    try {
        const { browser, navigationPromise, page } = await playwrightCrawler()

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
