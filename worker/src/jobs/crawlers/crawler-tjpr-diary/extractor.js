const fixString = (str) => {
    return str.replace(/(\r\n|\n|\r)/gm, " ").replace(/\r?\n|\r/g, " ").replace(/\t/g, " ").replace(/\s\s+/g, ' ').trim()
}

const getEmentaDados = () => {
    let el = Array.from(document.querySelectorAll('div:is([style*="display: none;"])'))
    return el[0].innerText

}

const dadosJuris = document.querySelector('div:is([style*="display: none;"])').innerText;

const content = document.querySelector("table.resultTable.linksacizentados.juris-dados-completos>tbody")
var rows = Array.from(content.childNodes).map(e => e.innerText).filter(e => !!e)

rows = rows.map(e => fixString(e))

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
        regex: /(Data do Julgamento: ([0-9][0-9](\/)[0-9][0-9](\/)[0-9][0-9][0-9][0-9]))/,
        replace: ["Data do Julgamento: "],
    },
    dataPublicacao: {
        regex: /(Fonte\/Data da Publicação: ( )?([0-9][0-9](\/)[0-9][0-9](\/)[0-9][0-9][0-9][0-9]))/,
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

const findData = (row) => {
    const keys = Object.keys(regex)

    return keys.map((key) => {
        const reg = regex[key].regex
        const toReplace = regex[key]["replace"]
        const matchIt = row.match(reg)
        if (matchIt && matchIt.length !== 0) {
            if (toReplace && toReplace.length !== 0) {
                return toReplace.map((textToReplace) => {
                    return {
                        [key]: row.replace(textToReplace, "")
                            .replace("00:00:00", "").trim()
                    }
                }
                )[0]
            }
        }
    }
    ).filter(e => !!e)[0]
}

var a = rows.map((row) => {
    return findData(row)

}
).filter(e => !!e)

const getData = () => {
    const data = Object.assign({}, ...a)

    data["ementa"] = `${data["ementa"]} ${dadosJuris}`

    return data

}

getData()