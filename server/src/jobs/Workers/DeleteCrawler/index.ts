import { Job } from 'bull'
import Crawler from '../../../models/Crawler'
import { getRepository } from 'typeorm'
import SearchService from '../../../utils/Search'
const searchService = new SearchService()
export default {
  key: 'DeleteCrawler',
  sandBoxFile: null,
  options: {
    sandBox: false,
    continuous: false
  },
  async handle(job: Job) {
    const { id } = job.data

    try {
      const crawlerRepo = getRepository(Crawler)

      const crawler = await crawlerRepo.createQueryBuilder('crawler')
        .leftJoinAndSelect('crawler.laws', 'laws')
        .select(['crawler.id', 'crawler.crawlerName', 'law.id', 'law.slug'])
        .leftJoin('crawler.laws', 'law')
        .where('crawler.id= :crawlerId', { crawlerId: id })
        .getOne()
      // @ts-ignore
      console.log('Result', crawler)

      if (crawler) {
        for (const law of crawler.laws) {
          await searchService.removeDoc({ index: 'law', documentId: law.id.toString() })
        }

        await crawlerRepo.createQueryBuilder('Crawler')
          .delete()
          .from(Crawler)
          .where('id = :id', { id: id })
          .execute()
      }

      return Promise.resolve()
    } catch (error) {
      throw new Error(error)
    }
  }
}
