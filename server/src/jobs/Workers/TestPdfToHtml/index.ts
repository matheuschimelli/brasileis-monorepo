import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `sandBox${ext}`)
console.log('PdfToHtml')
/**
 * Crawler
 * @name PdfToHtml
 * @description Transforms a PDF to HTML
 *
 */
export default {
  key: 'PdfToHtml',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
