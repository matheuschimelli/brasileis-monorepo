import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `processor${ext}`)
console.log('DOSP [Worker]')
/**
 * Crawler
 * @name DOSP [Worker]
 * @description Extrai os dados de urls de pdfs
 */
export default {
  key: 'DOSP [Worker]',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
