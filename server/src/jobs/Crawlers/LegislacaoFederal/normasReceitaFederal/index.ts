import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `sandbox${ext}`)

/**
 * Crawler
 * @name NormasReceitaFederal
 * @description Automaticamente pega o diário oficial do dia e transforma em html
 *
 */

export default {
  key: 'NormasReceitaFederal',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
