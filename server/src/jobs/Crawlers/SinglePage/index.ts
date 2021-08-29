import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `sandbox${ext}`)
/**
 * Crawler
 * @name SinglePage
 * @description Needs a page which contains a list of urls to be crawled. Acess all urls inside of
 * each url in url index
 *
 */
export default {
  key: 'SinglePage',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
