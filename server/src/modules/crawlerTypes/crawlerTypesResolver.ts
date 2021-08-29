import {
  Resolver,
  Query,
  Arg,
  Mutation,
  UseMiddleware,
  ID
} from 'type-graphql'
import CrawlerType from '../../models/CrawlerType'
import CrawlerTypeService from './crawlerTypesService'

import { CreateCrawlerTypeInput, UpdateCrawlerTypeInput } from './crawlerTypesInput'
import { isAuth, isAdmin } from '../../middlewares'

@Resolver(CrawlerType)
export class CrawlerTypeResolver {
  @Query(() => CrawlerType)
  async CrawlerType (
     @Arg('id') id:string
  ): Promise<CrawlerType> {
    const crawlerType = await CrawlerTypeService.findOneById(id)
    return crawlerType
  }

  @Query(() => [CrawlerType])
  async allCrawlerTypes (): Promise<CrawlerType[]> {
    const crawlerTypes = await CrawlerTypeService.fullIndex({
      name: 'ASC'
    }, ['id', 'name'])
    return crawlerTypes
  }

  @Query(() => Number)
  async allCrawlerTypesCount (
  ): Promise<Number> {
    const categoriesCount = await CrawlerTypeService.count()
    return categoriesCount
  }

  @UseMiddleware([isAuth, isAdmin])
  @Mutation(() => CrawlerType)
  async createCrawlerType (
     @Arg('data') {
       name,
       description,
       functionName,
       params
     }: CreateCrawlerTypeInput
  ): Promise<CrawlerType> {
    const newCrawlerType = await CrawlerTypeService.create({
      name,
      description,
      functionName,
      params
    })
    return newCrawlerType
  }

  @UseMiddleware([isAuth, isAdmin])
  @Mutation(() => CrawlerType)
  async updateCrawlerType (
      @Arg('id') id: string,
      @Arg('data') {
          name,
          description,
          functionName,
          params
        }: UpdateCrawlerTypeInput
  ): Promise<CrawlerType> {
    const crawlerType = await CrawlerTypeService.update(id, {
      name,
      description,
      functionName,
      params
    })
    return crawlerType
  }

  @UseMiddleware([isAuth, isAdmin])
  @Mutation(() => String)
  async deleteCrawlerType (
      @Arg('id', () => ID) id: string
  ): Promise<String> {
    await CrawlerTypeService.delete(id)
    return 'CrawlerType Removido'
  }
}
