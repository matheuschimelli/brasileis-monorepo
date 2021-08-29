import axios from 'axios'
import { JSDOM } from 'jsdom'
import Crawler from '../../../../models/Crawler'
import dayjs from 'dayjs'
import Queue from '../../../Queue'
// import Queue from '../../../jobs/Queue'

interface TableResult {
    tipoAto:string;
    nAto:string;
    orgao:string;
    dataPublicacao:string;
    ementa:string;
    url:string;
}
function generateRequestParams () {
  return {
    method: 'GET',
    url: 'http://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action',
    params: {
      facetsExistentes: '',
      orgaosSelecionados: '',
      tiposAtosSelecionados: '',
      lblTiposAtosSelecionados: '',
      ordemColuna: '',
      ordemDirecao: '',
      tipoConsulta: 'formulario',
      tipoAtoFacet: '',
      siglaOrgaoFacet: '',
      anoAtoFacet: '',
      termoBusca: 'a',
      numero_ato: '',
      tipoData: '2',
      dt_inicio: '',
      dt_fim: '',
      ano_ato: '',
      x: '0',
      y: '0',
      optOrdem: 'relevancia'
    },
    headers: {
      cookie: 'JSESSIONID=0-B6s4F9wR0d6KY0_QsmuBORi3iIqvXDN-r6IV0z.sijut2node2',
      Connection: 'keep-alive',
      'Cache-Control': 'max-age=0',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
    }
  }
}

function removeBreakSpace (str: string) {
  return str
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .trim()
}

function fixDate (datetime:string) {
  if (dayjs(datetime, 'DD/MM/YYYY').isValid()) {
    return dayjs(datetime, 'DD/MM/YYYY').toISOString()
  }
  return datetime
}

function extractPageData (html:string, url:string) {
  const dom = new JSDOM(html, { url })
  const doc = dom.window.document

  return new Promise((resolve, reject) => {
    var tableRows = Array.from(doc.querySelectorAll('#tabelaAtos > tbody > tr'))
    tableRows.pop()// removes last row which contains pagination

    const tableItems = tableRows.map((row) => {
      var cols = Array.from(row.querySelectorAll('td'))
      if (cols[0] && cols[1] && cols[2] && cols[3] && cols[4]) {
        var tipoAto = removeBreakSpace(cols[0].textContent!)
        var nAto = removeBreakSpace(cols[1].textContent!)
        var orgao = removeBreakSpace(cols[2].textContent!)
        var data = removeBreakSpace(cols[3].textContent!)
        var ementa = removeBreakSpace(cols[4].textContent!)
        var url = cols[0].querySelector('a')!.href

        return {
          tipoAto,
          nAto,
          orgao,
          dataPublicacao: fixDate(data),
          ementa,
          url
        }
      }
    }).filter((item) => !!item)
    if (tableItems) {
      resolve(tableItems)
    } else {
      reject(Error('Cannot return table data'))
    }
  })
}

// var list = Array.from(document.querySelector('#p').children)

// var arr = list.map((el) => {
//  return el.value
// }
// )

/**
 * NormasReceitaFederal - Craw
 */

export default async function runNormasReceitaFederal (params: Crawler) {
  try {
    const response = await axios.request({
      method: 'GET',
      url: 'http://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action',
      params: {
        facetsExistentes: '',
        orgaosSelecionados: '',
        tiposAtosSelecionados: '',
        lblTiposAtosSelecionados: '',
        ordemColuna: '',
        ordemDirecao: '',
        tipoConsulta: 'formulario',
        tipoAtoFacet: '',
        siglaOrgaoFacet: '',
        anoAtoFacet: '',
        termoBusca: 'a',
        numero_ato: '',
        tipoData: '2',
        dt_inicio: '',
        dt_fim: '',
        ano_ato: '',
        x: '0',
        y: '0',
        optOrdem: 'relevancia',
        p: '1'
      },
      headers: {
        cookie: 'JSESSIONID=0-B6s4F9wR0d6KY0_QsmuBORi3iIqvXDN-r6IV0z.sijut2node2',
        Connection: 'keep-alive',
        'Cache-Control': 'max-age=0',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    })
    if (response.data) {
      const list: any = await extractPageData(response.data, 'http://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action')

      let item:object

      for (item of list) {
        await Queue.add('Worker normasReceitaFederal', { ...item })
      }
    }
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}
