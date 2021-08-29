import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `sandBox${ext}`)
/**
 * Crawler
 * @name DefaultCrawler
 * @description Needs a page which contains a list of urls to be crawled. Acess all urls inside of
 * each url in url index
 *
 */
export default {
  key: 'DefaultCrawler',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
