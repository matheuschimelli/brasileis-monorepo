import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `sandbox${ext}`)

console.log('DOSP Crawler')
/**
 * Crawler
 * @name DOSP
 * @description Automaticamente pega o diário oficial do dia e transforma em html
 *
 */

export default {
  key: 'DOSP',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
