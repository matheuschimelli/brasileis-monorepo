import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `sandBox${ext}`)
/**
 * Crawler
 * @name PrevCrawler
 * @description Needs a page which contains a list of urls to be crawled. Acess all urls inside of
 * each url in url index
 *
 */
export default {
  key: 'PrevCrawler',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
