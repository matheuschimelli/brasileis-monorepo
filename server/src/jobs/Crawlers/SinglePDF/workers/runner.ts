import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `processor${ext}`)
/**
 * Crawler
 * @name SinglePdfProcessor
 * @description Extrai os dados de urls de pdfs
 */
export default {
  key: 'SinglePdfProcessor',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
