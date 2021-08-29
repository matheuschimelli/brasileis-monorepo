import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `processor${ext}`)
console.log('[DOSP] Processor')
/**
 * Crawler
 * @name DiarioOficialToHtmlSP
 * @description Extrai os dados de urls de pdfs
 */
export default {
  key: '[DOSP] Processor',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
