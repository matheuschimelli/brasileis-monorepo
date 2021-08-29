import CrawlerType from '../../models/CrawlerType'
// import Law from '../../models/Law'
import {
  CreateCrawlerTypeInput,
  UpdateCrawlerTypeInput
} from './crawlerTypesInput'

import createServiceBase from '../../lib/ServiceBase'

const BaseService = createServiceBase<CrawlerType>(CrawlerType)

export default class CrawlerTypesService extends BaseService {
  public static async index (page: number): Promise<CrawlerType[]> {
    const allItems = await CrawlerType.find({
      order: {
        name: 'DESC'
      },
      take: 10,
      skip: (page - 1) * 10

    })
    if (allItems.length !== 0) {
      return allItems
    }
    throw new Error('Nada encontrado')
  }

  static async create (data: CreateCrawlerTypeInput) {
    const crawlerType = CrawlerType.create()
    crawlerType.name = data.name
    crawlerType.description = data.description!
    crawlerType.functionName = data.functionName!
    // crawlerType.params = JSON.parse(data.params!)

    await crawlerType.save()
    return crawlerType
  }

  static async update (id: string, data: UpdateCrawlerTypeInput) {
    const crawlerType = await CrawlerType.findOne(id)

    if (crawlerType) {
      crawlerType.name = data.name
      crawlerType.description = data.description!
      crawlerType.functionName = data.functionName!
      //   crawlerType.params = JSON.parse(data.params!)

      await crawlerType.save()
      return crawlerType
    }
    throw new Error('Não foi possível atualizar. Tente mais tarde.')
  }
}
