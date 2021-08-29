import path from 'path'
import fs from 'fs'
import axios from 'axios'
import execa from 'execa'
import { JSDOM } from 'jsdom'
import { Readability } from '@mozilla/readability'
import cheerio from 'cheerio'

declare interface PDFConverterParams {
  url: string
  pdfBoxPath: string
  downloadPath: string
  /**
   * File name WITHOUT .pdf
   */
  fileName: string

}
export default class PDFConverter {
  public url: string
  public pdfBoxPath: string
  public downloadPath: string
  public fileName: string
  private htmlResult?: string

  constructor(params: PDFConverterParams) {
    if (!params.url) throw new Error('Missing Url in constructor')
    if (!params.pdfBoxPath) throw new Error('Missing Url in constructor')

    this.pdfBoxPath = params.pdfBoxPath
    this.url = params.url
    this.downloadPath = params.downloadPath
    this.downloadPath = params.downloadPath
    this.fileName = params.fileName
    this.htmlResult = undefined
  }

  async convert() {
    await this.downloader()
    const htmlResult = await this.runConverter()

    if (htmlResult) {
      const textResult = this.getText(htmlResult)
      const docTitle = this.getTitle(htmlResult)

      return {
        html: htmlResult,
        text: textResult,
        title: docTitle
      }
    } else {
      return {
        html: null,
        text: null,
        title: null
      }
    }
  }

  async downloader(): Promise<string | Error> {
    // '../../../../temp' <- default download path

    const tempPath = path.resolve(this.downloadPath, `${this.fileName}.pdf`)
    const writer = fs.createWriteStream(tempPath)

    const response = await axios({
      url: this.url,
      method: 'GET',
      responseType: 'stream'
    })

    response.data.pipe(writer)
    return new Promise((resolve, reject) => {
      writer.on('finish', () => resolve(tempPath))
      writer.on('error', (err) => reject(err))
    })
  }

  /**
   * Returns a HTML string
   */
  async runConverter() {
    try {
      const { stdout } = await execa('java',
        ['-jar', this.pdfBoxPath,
          'ExtractText',
          '-html', '-console', `${this.downloadPath}/${this.fileName}.pdf`
        ])
      if (stdout) {
        this.htmlResult = stdout
        return stdout
      } else {
        throw new Error('Empty pdf')
      }
    } catch (err) {
      console.log(err)
      throw new Error(err)
    }
  }

  getText(htmlResult: string) {
    const dom = new JSDOM(htmlResult)
    const text = dom.window.document.body.textContent
    return text
  }

  getTitle(htmlResult: string) {
    const dom = new JSDOM(htmlResult)

    const reader = new Readability(dom.window.document, {
      keepClasses: true
    })

    // @ts-ignore
    const documentTitle = reader.parse()

    // fallback in case of empty title on readability
    const $ = cheerio.load(htmlResult)
    const pArray: string[] = []

    $('p').each((_, el) => {
      pArray.push($(el).text())
    })

    function countWords(s: string): number {
      s = s.replace(/(^\s*)|(\s*$)/gi, '')// exclude  start and end white-space
      s = s.replace(/[ ]{2,}/gi, ' ')// 2 or more space to 1
      s = s.replace(/\n /, '\n') // exclude newline with a start spacing
      return s.split(' ').filter(function (str: string) { return str !== '' }).length
      // return s.split(' ').filter(String).length; - this can also be used
    }

    // @ts-ignore
    if (documentTitle.title) {
      // @ts-ignore
      return documentTitle.title
    } else {
      for (var phrase of pArray) {
        if (phrase !== '' && countWords(phrase) > 3) {
          return phrase
        }
      }
    }
  }
}
/**
 * lista de strings
 * loop na lista procurando por frases com mais de 3 palavras
 * quando encontrar pare o loop
 */
