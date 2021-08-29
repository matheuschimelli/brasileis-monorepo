import CrawlerBase from '../../../lib/CrawlerBase'
import Queue from '../../Queue'

export default class SinglePDF extends CrawlerBase {
  async execute () {
    if (this.urlsToVisit) {
      for (const url of this.urlsToVisit) {
        await Queue.add('SinglePdfProcessor', {
          name: this.name,
          url: url,
          id: this.id,
          categories: this.categories,
          subCategories: this.subCategories
        })
      }
      return Promise.resolve()
    }
  }
}
