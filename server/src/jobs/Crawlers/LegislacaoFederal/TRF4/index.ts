import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `sandbox${ext}`)

console.log('TRF4Jurisprudencia Crawler')
/**
 * Crawler
 * @name TRF4Jurisprudencia
 * @description Automaticamente Pega a jurisprudencia do TRF4 sem precisar de inputs. Esses inputs
 * já estão presentes no código.
 *
 */

export default {
  key: 'TRF4Jurisprudencia',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
