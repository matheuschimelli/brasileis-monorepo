import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `sandbox${ext}`)
console.log('DOSP New running')
/**
 * Crawler
 * @name DOSP
 * @description Extrai os dados de urls de pdfs
 */
export default {
  key: 'DOSP',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
