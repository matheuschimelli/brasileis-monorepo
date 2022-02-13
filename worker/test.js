const { chromium } = require('playwright');

async function run() {
    const browser = await chromium.launch({
        headless: false
    })
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

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
            const content = await page.$eval(".resultTable.jurisprudencia", (e) => {
                return Array.from(e.querySelectorAll("a")).map(a => a.href).filter(a => a.includes("https"))
            })
            console.log(content)

            //await page.$eval('tr:nth-child(2) > td > #navigator > .navRight > .arrowNextOn', elem => elem.click());
            await page.dispatchEvent('tr:nth-child(2) > td > #navigator > .navRight > .arrowNextOn', 'click');
        }
    }
    await goNext()

    //await browser.close()
}

run()