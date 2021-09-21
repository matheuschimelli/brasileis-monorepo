import Crawler from '../../models/Crawler'
import Category from '../../models/Category'
import SubCategory from '../../models/SubCategory'
import CrawlerType from '../../models/CrawlerType'

import Queue from '../../jobs/Queue'
import {
  CreateCrawlerInput,
  UpdateCrawlerInput
} from './crawlersInputs'

import createBaseService from '../../lib/ServiceBase'
const CrawlerServiceBase = createBaseService<Crawler>(Crawler)

export default class CrawlerService extends CrawlerServiceBase {
  static async index(page: number) {
    const crawlers = await Crawler.find({
      order: {
        createdAt: 'DESC'
      },
      relations: [
        'categories',
        'subCategories',
        'htmlSelectors',
        'updateTime',
        'crawlerType',
        'laws'
      ],
      take: 10,
      skip: (page - 1) * 10
    })
    if (crawlers) return crawlers

    throw new Error('Nada encontrado')
  }

  static async show(id: string) {
    const crawler = await Crawler.findOne(id,
      {
        relations: [
          'categories',
          'subCategories',
          'htmlSelectors',
          'updateTime',
          'crawlerType'
        ]
      })

    if (crawler) return crawler

    throw new Error('Nada encontrado')
  }

  static async create(data: CreateCrawlerInput) {
    const categories = await Category.findByIds(data.categories!)
    const subCategories = await SubCategory.findByIds(data.categories!)
    const crawlerType = await CrawlerType.findOne(data.crawlerType!)

    if (categories && subCategories && crawlerType) {
      const newCrawler = Crawler.create()
      newCrawler.categories = categories
      newCrawler.subCategories = subCategories
      newCrawler.followOnlySameHost = data.followOnlySameHost
      newCrawler.crawlerName = data.crawlerName
      newCrawler.urlsToVisit = data.urlsToVisit
      newCrawler.crawlerType = crawlerType
      newCrawler.baseUrl = data.baseUrl
      newCrawler.customCode = ''

      // newCrawler.crawlerType

      // @ts-ignore
      newCrawler.htmlSelectors = data.htmlSelectors!
      // @ts-ignore
      newCrawler.updateTime = data.updateTime

      await newCrawler.save()
      return newCrawler
    }
    throw new Error('Não foi criar um novo crawler. Tente Mais tarde')
  }

  static async update(id: string, data: UpdateCrawlerInput) {
    const categories = await Category.findByIds(data.categories!)
    const subCategories = await SubCategory.findByIds(data.categories!)
    const crawlerType = await CrawlerType.findOne(data.crawlerType!)

    if (categories && subCategories && crawlerType) {
      const updateCrawler = await Crawler.findOne(id)

      if (updateCrawler) {
        updateCrawler.categories = categories
        updateCrawler.subCategories = subCategories
        updateCrawler.followOnlySameHost = data.followOnlySameHost
        updateCrawler.crawlerName = data.crawlerName
        updateCrawler.urlsToVisit = data.urlsToVisit
        updateCrawler.crawlerType = crawlerType
        updateCrawler.baseUrl = data.baseUrl

        // @ts-ignore
        updateCrawler.htmlSelectors = data.htmlSelectors!
        // @ts-ignore
        updateCrawler.updateTime = data.updateTime

        await updateCrawler.save()
        return updateCrawler
      }
    }
    throw new Error('Não foi possível atualizar. Tente mais tarde.')
  }

  static async delete(id: string) {
    const crawler = await Crawler.findOne(id)
    if (crawler) {
      await Queue.add('DeleteCrawler', { id })
      return 'Adicionado na fila para ser deletado'
    }
    throw new Error('Nenhum crawler encontrado com o id para ser removido')
  }

  static async runCrawler(id: string) {
    console.log('Running Crawler')
    const crawler = await Crawler.createQueryBuilder('crawler')
      .leftJoinAndSelect('crawler.categories', 'categories')
      .leftJoinAndSelect('crawler.subCategories', 'subCategories')
      .leftJoinAndSelect('crawler.htmlSelectors', 'htmlSelectors')
      .leftJoinAndSelect('crawler.updateTime', 'updateTime')
      .leftJoinAndSelect('crawler.crawlerType', 'crawlerType')
      .where('crawler.id= :crawlerId', { crawlerId: id })
      .getOne()

    if (crawler) {
      if (!crawler.crawlerType) {
        await Queue.workerServer.add({ queue: 'DefaultCrawler', jobData: crawler })
      } else {
        await Queue.workerServer.add({ queue: crawler.crawlerType.name, jobData: crawler })
      }
      return crawler
    }
    throw new Error('Nenhum crawler com o id provido foi encontrado para ser executado')
  }
}
