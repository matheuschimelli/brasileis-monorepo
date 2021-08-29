import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `sandBox${ext}`)
console.log('DefaultCrawler')
/**
 * Crawler
 * @name ApifyTest
 * @description Needs a page which contains a list of urls to be crawled. Acess all urls inside of
 * each url in url index
 *
 */
export default {
  key: 'ApifyTest',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
