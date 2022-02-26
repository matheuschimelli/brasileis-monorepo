import axios from 'axios'
import cheerio from 'cheerio';
import { Job } from "bull";
import { sendResult } from "../../";
import { fixString, lastItemFromArray } from '../../../lib/crawling-utils';
import dayjs from '../../../lib/dayjs';

export default async function (job: Job) {
    const jobData = job.data
    const url = jobData.source

    try {
        const res = await axios.get(url)

        if (res.statusText !== "OK") throw new Error(`Pagina indisponível ${url}`)

        const pageHtml = res.data
        const $ = cheerio.load(pageHtml)
        const pageText = $("body").text()

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
                                var d = dayjs(date)
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
                data["ementa"] = lastItemFromArray(rows)
                data["integra"] = lastItemFromArray(rows)
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

