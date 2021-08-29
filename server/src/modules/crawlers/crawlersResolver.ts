import {
  Resolver,
  Query,
  Arg,
  Int,
  Mutation,
  UseMiddleware,
  ID
} from 'type-graphql'
import Crawler from '../../models/Crawler'
import CrawlerService from './crawlersService'

import {
  CreateCrawlerInput,
  UpdateCrawlerInput
} from './crawlersInputs'
import { isAuth, isAdmin } from '../../middlewares'

@Resolver(Crawler)
export class CrawlerResolver {
/**
 * Query a single Crawler
 * @param id
 * @returns
 */
@UseMiddleware([isAuth, isAdmin])
@Query(() => Crawler)
  async Crawler (
   @Arg('id') id:string
  ): Promise<Crawler> {
    const crawler = await CrawlerService.show(id)
    return crawler
  }

/**
 * Query all Crawlers
 * @param page
 * @returns
 */

@UseMiddleware([isAuth, isAdmin])
@Query(() => [Crawler])
async allCrawlers (
@Arg('page', () => Int) page: number
): Promise<Crawler[]> {
  console.log('PAGE', page)
  const crawlers = await CrawlerService.index(page)
  return crawlers
}

@UseMiddleware([isAuth, isAdmin])
@Query(() => Number)
async allCrawlersCount (
): Promise<Number> {
  const count = await CrawlerService.count()
  return count
}

/**
 *  Mutation to Create a new Crawler
 * @param param
 * @returns
 */
@UseMiddleware([isAuth, isAdmin])
@Mutation(() => Crawler)
async createCrawler (
   @Arg('data') {
     baseUrl,
     crawlerName,
     crawlerType,
     followOnlySameHost,
     updateTime,
     urlsToVisit,
     categories,
     htmlSelectors,
     subCategories

   }: CreateCrawlerInput
): Promise<Crawler> {
  const newCrawler = await CrawlerService.create({
    baseUrl,
    crawlerName,
    crawlerType,
    followOnlySameHost,
    updateTime,
    urlsToVisit,
    categories,
    htmlSelectors,
    subCategories
  })
  return newCrawler
}

/**
 * Mutation to Update a single Crawler
 * @param id
 * @param param1
 * @returns
 */
@UseMiddleware([isAuth, isAdmin])
@Mutation(() => Crawler)
async updateCrawler (
    @Arg('id') id: string,
    @Arg('data') {
        baseUrl,
        crawlerName,
        crawlerType,
        followOnlySameHost,
        updateTime,
        urlsToVisit,
        categories,
        htmlSelectors,
        subCategories
      }: UpdateCrawlerInput
): Promise<Crawler> {
  const updateCrawler = await CrawlerService.update(id, {
    baseUrl,
    crawlerName,
    crawlerType,
    followOnlySameHost,
    updateTime,
    urlsToVisit,
    categories,
    htmlSelectors,
    subCategories
  })
  return updateCrawler
}

/**
 * Mutation to Delete a single SubCategory
 * @param id
 * @returns
 */
@UseMiddleware([isAuth, isAdmin])
@Mutation(() => String)
async deleteCrawler (
    @Arg('id', () => ID) id: string
): Promise<String> {
  await CrawlerService.delete(id)
  return 'Crawler Removido'
}

/**
 * Mutation to Delete a single SubCategory
 * @param id
 * @returns
 */
 @UseMiddleware([isAuth, isAdmin])
 @Mutation(() => String)
async runCrawler (
     @Arg('id', () => ID) id: string
): Promise<String> {
  await CrawlerService.runCrawler(id)
  return 'Rodando Crawler'
}
}
