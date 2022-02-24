import axios from 'axios'
import cheerio from 'cheerio';
import { Job } from "bull";
import { sendResult } from "../../";

export default async function (job: Job) {
    const jobData = job.data
    const url = jobData.source

    try {
        const res = await axios.get(url)

        if (res.statusText !== "OK") throw new Error(`Pagina indisponível ${url}`)

        const pageHtml = res.data
        const $ = cheerio.load(pageHtml)
        const pageText = $("body").text()


        const fixString = (str: string) => {
            return str.replace(/(\r\n|\n|\r)/gm, " ")
                .replace(/\r?\n|\r/g, " ")
                .replace(/\t/g, " ")
                .replace(/\s\s+/g, ' ').trim()
        }

        const last = (array: any[]) => {
            return array[array.length - 1];
        }

        const dadosJuris = () => {
            if ($('div:is([style*="display: none;"])')) {
                return $('div:is([style*="display: none;"])').text()
            }
            return ""
        }

        const content = $("table.resultTable.linksacizentados.juris-dados-completos>tbody").children()

        const arrayOfChilds = Array.from(content)

        var rows = arrayOfChilds
            .map(e => fixString($(e).text()))
            .filter(el => !!el)
            .map(e => fixString(e.toString()))

        const regex = {
            numeroProcesso: {
                regex: /^(Processo: (.*) )/,
                replace: ["Processo: "]
            },
            segredoDeJustica: {
                regex: /^(Segredo de Justiça: (.*))/,
                replace: ["Segredo de Justiça: "]
            },
            relator: {
                regex: /^(Relator\(a\): (.*)[^\n]+)/,
                replace: ["Relator(a): "]
            },
            tipoRelator: {
                regex: /([\n].*)/g,
                replace: ["Relator(a):"],
            },
            orgaoJulgador: {
                regex: /(Órgão Julgador: (.*))/,
                replace: ["Órgão Julgador: "],
            },
            comarca: {
                regex: /(Comarca: (.*))/,
                replace: ["Comarca: "],
            },
            dataJulgamento: {
                regex: /(Data do Julgamento: (.*))/,
                replace: ["Data do Julgamento: "],
            },
            dataPublicacao: {
                regex: /(Fonte\/Data da Publicação: ( )?(.*))/,
                replace: ["Fonte/Data da Publicação: ", "Fonte/Data da Publicação:  "],
            },
            ementa: {
                regex: /((Ementa)(.*))/,
                replace: ["Ementa "]
            },
            integra: {
                regex: /((Íntegra do Acórdão Ocultar Acórdão Atenção: O texto abaixo representa a transcrição de Acórdão. Eventuais imagens serão suprimidas.)(.*))/,
                replace: ["Íntegra do Acórdão Ocultar Acórdão Atenção: O texto abaixo representa a transcrição de Acórdão. Eventuais imagens serão suprimidas."]
            }
        }

        //@ts-ignore
        const findData = (row) => {
            const keys = Object.keys(regex)

            return keys.map((key) => {
                //@ts-ignore
                const reg = regex[key].regex
                //@ts-ignore
                const toReplace = regex[key]["replace"]
                const matchIt = row.match(reg)



                if (matchIt && matchIt.length !== 0) {
                    if (toReplace && toReplace.length !== 0) {
                        //@ts-ignore
                        return toReplace.map((textToReplace) => {
                            if (key == "dataPublicacao" || key == "dataJulgamento") {
                                const date = row
                                    .replace(textToReplace, "")
                                    .replace("Fonte/Data da Publicação:", "")
                                    .replace(/(\b[A-Z][A-Z]+\b )|([A-Z]+_[A-Z]+ )/, "")
                                    .trim()

                                var d = new Date(date)

                                return {
                                    [key]: d.toISOString()
                                }
                            } else {
                                return {
                                    [key]: row.replace(textToReplace, "").trim()
                                }
                            }
                        }
                        )[0]
                    }
                }
            }
            ).filter(e => !!e)[0]
        }

        var rowsData = rows.map((row) => {
            return findData(row)

        }
        ).filter(e => !!e)

        const getData = () => {
            const data = Object.assign({}, ...rowsData)

            data["ementa"] = `${data["ementa"]} ${dadosJuris()}`

            if (!data["ementa"] || !data["integra"]) {
                data["ementa"] = last(rows)
                data["integra"] = last(rows)
            }
            return data
        }

        const jurisData = getData()

        const result = {
            source: url,
            pageText: pageText,
            estado: "Paraná",
            tribunal: "TJPR",
            tipo: "JUSTICA_ESTADUAL",

            ...jurisData
        }

        sendResult({
            queue: 'TJPRJurisprudencia',
            data: {
                blockType: "JURISPRUDENCIA",
            },
            result: result
        })

        //  await browser.close()

    } catch (error) {
        console.log(error)
        return Promise.reject(error)
    }

}


// export default async function (job: Job) {
//     const jobData = job.data
//     const RESOURCE_EXCLUSTIONS = ['image', 'stylesheet', 'media', 'font', 'other'];


//     try {
//         const browser = await chromium.launch({
//             headless: true,
//             args: [
//                 '--disable-gpu',
//                 '--disable-dev-shm-usage',
//                 '--disable-setuid-sandbox',
//                 '--no-first-run',
//                 '--no-sandbox',
//                 '--no-zygote',
//                 '--single-process',
//                 '--disable-accelerated-2d-canvas'
//             ],
//         })
//         const page = await browser.newPage()
//         const navigationPromise = page.waitForNavigation()

//         page.on('console', async (msg) => {
//             const msgArgs = msg.args();
//             for (let i = 0; i < msgArgs.length; ++i) {
//                 console.log(await msgArgs[i].jsonValue());
//             }
//         });

//         await page.route('**/*', (route) => {
//             return RESOURCE_EXCLUSTIONS.includes(route.request().resourceType())
//                 ? route.abort()
//                 : route.continue()
//         });

//         await page.goto(jobData.source, {
//             waitUntil: 'domcontentloaded'
//         })

//         await navigationPromise

//         const pageUrl = await page.url()

//         const jurisData = await page.evaluate(() => {
//             //@ts-ignore
//             const fixString = (str) => {
//                 return str.replace(/(\r\n|\n|\r)/gm, " ").replace(/\r?\n|\r/g, " ").replace(/\t/g, " ").replace(/\s\s+/g, ' ').trim()
//             }

//             // const getEmentaDados = () => {
//             //     let el = Array.from(document.querySelectorAll('div:is([style*="display: none;"])'))
//             //     //@ts-ignore
//             //     return el[0].innerText

//             // }

//             //@ts-ignore
//             const last = (array) => {
//                 return array[array.length - 1];
//             }

//             //@ts-ignore
//             const dadosJuris = () => {
//                 if (document.querySelector('div:is([style*="display: none;"])')) {
//                     //@ts-ignore
//                     return document.querySelector('div:is([style*="display: none;"])').innerText
//                 }
//                 return ""
//             }
//             const content = document.querySelector("table.resultTable.linksacizentados.juris-dados-completos>tbody")

//             //@ts-ignore
//             var rows = Array.from(content.childNodes).map(e => e.innerText).filter(e => !!e)

//             rows = rows.map(e => fixString(e.toString()))

//             const regex = {
//                 numeroProcesso: {
//                     regex: /^(Processo: (.*) )/,
//                     replace: ["Processo: "]
//                 },
//                 segredoDeJustica: {
//                     regex: /^(Segredo de Justiça: (.*))/,
//                     replace: ["Segredo de Justiça: "]
//                 },
//                 relator: {
//                     regex: /^(Relator\(a\): (.*)[^\n]+)/,
//                     replace: ["Relator(a): "]
//                 },
//                 tipoRelator: {
//                     regex: /([\n].*)/g,
//                     replace: ["Relator(a):"],
//                 },
//                 orgaoJulgador: {
//                     regex: /(Órgão Julgador: (.*))/,
//                     replace: ["Órgão Julgador: "],
//                 },
//                 comarca: {
//                     regex: /(Comarca: (.*))/,
//                     replace: ["Comarca: "],
//                 },
//                 dataJulgamento: {
//                     regex: /(Data do Julgamento: (.*))/,
//                     replace: ["Data do Julgamento: "],
//                 },
//                 dataPublicacao: {
//                     regex: /(Fonte\/Data da Publicação: ( )?(.*))/,
//                     replace: ["Fonte/Data da Publicação: ", "Fonte/Data da Publicação:  "],
//                 },
//                 ementa: {
//                     regex: /((Ementa)(.*))/,
//                     replace: ["Ementa "]
//                 },
//                 integra: {
//                     regex: /((Íntegra do Acórdão Ocultar Acórdão Atenção: O texto abaixo representa a transcrição de Acórdão. Eventuais imagens serão suprimidas.)(.*))/,
//                     replace: ["Íntegra do Acórdão Ocultar Acórdão Atenção: O texto abaixo representa a transcrição de Acórdão. Eventuais imagens serão suprimidas."]
//                 }
//             }

//             //@ts-ignore
//             const findData = (row) => {
//                 const keys = Object.keys(regex)


//                 return keys.map((key) => {
//                     //@ts-ignore
//                     const reg = regex[key].regex
//                     //@ts-ignore
//                     const toReplace = regex[key]["replace"]
//                     const matchIt = row.match(reg)



//                     if (matchIt && matchIt.length !== 0) {
//                         if (toReplace && toReplace.length !== 0) {
//                             //@ts-ignore
//                             return toReplace.map((textToReplace) => {
//                                 if (key == "dataPublicacao" || key == "dataJulgamento") {
//                                     const date = row
//                                         .replace(textToReplace, "")
//                                         .replace("Fonte/Data da Publicação:", "")
//                                         .replace(/(\b[A-Z][A-Z]+\b )|([A-Z]+_[A-Z]+ )/, "")
//                                         .trim()

//                                     var d = new Date(date)

//                                     console.log(`${key} - ${typeof date} - ${d.toISOString()}`)

//                                     return {
//                                         [key]: d.toISOString()
//                                     }
//                                 } else {
//                                     return {
//                                         [key]: row.replace(textToReplace, "").trim()
//                                     }
//                                 }
//                             }
//                             )[0]
//                         }
//                     }
//                 }
//                 ).filter(e => !!e)[0]
//             }

//             var rowsData = rows.map((row) => {
//                 return findData(row)

//             }
//             ).filter(e => !!e)

//             const getData = () => {
//                 const data = Object.assign({}, ...rowsData)




//                 data["ementa"] = `${data["ementa"]} ${dadosJuris()}`

//                 if (!data["ementa"] || !data["integra"]) {
//                     data["ementa"] = last(rows)
//                     data["integra"] = last(rows)
//                 }
//                 return data
//             }
//             return getData()
//         })

//         const pageText = await page.evaluate(() => {
//             const text = document.body.innerText
//             return text
//         })

//         //console.log(jurisData)


//         const result = {
//             source: pageUrl,
//             pageText: pageText,
//             estado: "Paraná",
//             tribunal: "TJPR",
//             tipo: "JUSTICA_ESTADUAL",

//             ...jurisData
//         }

//         sendResult({
//             queue: 'TJPRJurisprudencia',
//             data: {
//                 blockType: "JURISPRUDENCIA",
//             },
//             result: result
//         })

//         //  await browser.close()

//     } catch (error) {
//         console.log(error)
//         return Promise.reject(error)
//     }

// }