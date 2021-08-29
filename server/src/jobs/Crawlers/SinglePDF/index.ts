import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `sandbox${ext}`)
/**
 * Crawler
 * @name SinglePDF
 * @description Extrai os dados de urls de pdfs
 */
export default {
  key: 'SinglePDF',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
