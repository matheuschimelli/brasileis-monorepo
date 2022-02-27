import { Job } from "bull";
import { crawlerTJPRJurisprudenciaWorker } from "../../";
import { playwrightCrawler } from "../../../lib/crawler-base";
import { getLinksWithDateFromTJPR } from "../../../lib/crawling-utils";
import dayjs from "../../../lib/dayjs";


export default async function (job: Job) {
    try {
        const { browser, navigationPromise, page } = await playwrightCrawler()

        await page.setDefaultNavigationTimeout(0);

        await page.goto('https://portal.tjpr.jus.br/jurisprudencia/publico/pesquisa.do?actionType=pesquisar', {
            waitUntil: 'domcontentloaded'
        })

        await navigationPromise

        await page.waitForSelector('tr:nth-child(2) > td > #navigator > .navRight > .arrowNextOn')


        function filterLinks(linksAndDates: any[]) {

            const isYesterday = (date: string | Date) => dayjs(date, "DD/MM/YYYY").isYesterday()
            const isToday = (date: string | Date) => dayjs(date, "DD/MM/YYYY").isToday()

            const finalDates = linksAndDates.map((item) => {
                if (item.date) {
                    if (isToday(item.date) || isYesterday(item.date)) {
                        return item
                    }
                }
            })
            return finalDates
        }


        const goNext = async () => {
            while (true) {

                await page.waitForSelector(".resultTable.jurisprudencia", {
                    state: "visible"
                })
                const dataToBeFormated = await page.evaluate(function () {

                    function getLinksWithDateFromTJPR() {
                        const tableContent = Array.from(document.querySelector(".resultTable.jurisprudencia tbody")!.children)
                        const tableLines = tableContent.map(e => e.querySelector(".juris-tabela-propriedades")).filter(e => !!e)

                        const textFromTableLines = tableLines.map(el => ({
                            url: el!.querySelector("a")!.href,
                            text: el!.textContent!
                        })).filter(e => !!e).filter(e => !!e && !!e.url)

                        function getTableDate(text: string) {
                            const regexDate = /([0-9][0-9])\/([0-9][0-9])\/([0-9][0-9][0-9][0-9])/g;
                            const match = regexDate.test(text)
                            if (match) {
                                return text.match(regexDate)![0]
                            }
                            return null
                        }

                        const linksAndDates = textFromTableLines.map(e => {
                            if (e.url && e.text) {
                                return {
                                    url: e.url,
                                    date: getTableDate(e.text)
                                }
                            }
                        }).filter(e => !!e).filter(e => !!e && !!e.date)

                        return linksAndDates
                    }
                    return getLinksWithDateFromTJPR()
                });

                const data = filterLinks(dataToBeFormated).filter(e => !!e)

                if (data.length === 0) {
                    console.log("Sem mais datas")
                    console.log("encerrando")
                    await browser.close()
                    break;

                }

                for (const link of data) {
                    if (link.url) {
                        await crawlerTJPRJurisprudenciaWorker.add({
                            queue: "TJPRJurisprudencia Worker",
                            source: link.url,
                            result: null
                        })
                    }
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