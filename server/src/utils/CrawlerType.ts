import { Error } from 'mongoose'
import { getRepository } from 'typeorm'
import CrawlerType from '../models/CrawlerType'

interface CrawlerOpts {
    name: string;
    description: string;
    params?: object
}
export default class CrawlerTypeService {
  async upsert (crawlerOpts: CrawlerOpts) {
    try {
      const crawlerTypeRepo = getRepository(CrawlerType)

      const crawler = await crawlerTypeRepo.findOne({
        where: {
          name: crawlerOpts.name
        }
      })
      if (!crawler) {
        const newCrawler = crawlerTypeRepo.create()
        newCrawler.name = crawlerOpts.name
        newCrawler.description = crawlerOpts.description
        await crawlerTypeRepo.save(newCrawler)

        return newCrawler
      }
      return crawler
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
}
