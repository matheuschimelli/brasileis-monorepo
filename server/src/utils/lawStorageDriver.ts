/* eslint-disable @typescript-eslint/no-unused-vars */
import { getRepository } from 'typeorm'
import Crawler from '../models/Crawler'
import Category from '../models/Category'
import SubCategory from '../models/SubCategory'
import Law from '../models/Law'
import notify from './slackNotifier'
import SearchService from './Search'
const searchService = new SearchService()

declare interface SearchStorageParams {
  url: string
  title: string
  parentUrl: string
  htmlContent: string
  textContent: string
  categories: Category[]
  subCategories: SubCategory[]
  crawler: {
    name: string
    id: string | number
  }

}
export default async function useLawStorageDriver({
  crawler,
  url,
  title,
  textContent,
  htmlContent,
  categories,
  subCategories,
  parentUrl
}: SearchStorageParams) {
  /**
     * category.map(({ name, slug, ...rest }) => rest).map(el => el.id)
     * removes name and slug from category
     * returns category id.
     *
     */

  const categoryRepo = getRepository(Category)
  const subCategoryRepo = getRepository(SubCategory)
  const crawlerRepo = getRepository(Crawler)
  const lawRepo = getRepository(Law)

  const getCategoriesIds = categories
    .map(({ name, slug, ...rest }) => rest)
    .map(el => el.id)

  const getSubCategoriesIds = subCategories
    .map(({ name, slug, ...rest }) => rest)
    .map(el => el.id)

  const categoriesIds = categories
    .map(({ articles, crawlers, ...rest }) => rest)
    .map(el => el.id)

  const categoriesNames = categories
    .map(({ articles, crawlers, ...rest }) => rest)
    .map(el => el.name)

  const subCategoriesNames = subCategories
    .map(({ articles, crawlers, ...rest }) => rest)
    .map(el => el.name)

  const subCategoriesIds = subCategories
    .map(({ articles, crawlers, ...rest }) => rest)
    .map(el => el.id)

  const foundCategories = await categoryRepo.findByIds(getCategoriesIds)
  const foundSubCategories = await subCategoryRepo.findByIds(getSubCategoriesIds)
  const foundCrawler = await crawlerRepo.findOne(crawler.id)

  // const cleanHtml = await this.clearHtml(contentHtml, currentUrl!)

  try {
    const existsLaw = await lawRepo.findOne({ where: { url: url } })

    if (!existsLaw) {
      console.log('Saving PDF to HTML')
      const newLaw = lawRepo.create()
      newLaw.title = title
      newLaw.published = true
      newLaw.parentUrl = parentUrl!
      newLaw.htmlContent = htmlContent
      newLaw.textContent = textContent
      newLaw.categories = foundCategories
      newLaw.subCategories = foundSubCategories
      newLaw.crawler = foundCrawler!
      newLaw.url = url!
      newLaw.updatedAt = new Date()
      newLaw.createdAt = new Date()
      await lawRepo.save(newLaw)

      await searchService.upsertDoc({
        indexName: 'law',
        document: {
          docId: newLaw.id.toString(),
          docType: 'lei',
          url: newLaw.url,
          title: newLaw.title,
          updatedAt: newLaw.updatedAt,
          textContent: newLaw.textContent,
          slug: newLaw.slug,
          lawId: newLaw.id,
          categories: categoriesNames,
          categoriesIds: categoriesIds,
          subCategories: subCategoriesNames,
          subCategoriesIds: subCategoriesIds
        }
      })
      return newLaw
    }
    console.log('Updating PDF to HTML')
    existsLaw.title = title
    existsLaw.published = true
    existsLaw.parentUrl = parentUrl!
    existsLaw.htmlContent = htmlContent
    existsLaw.textContent = textContent
    existsLaw.categories = foundCategories
    existsLaw.subCategories = foundSubCategories
    existsLaw.crawler = foundCrawler!
    existsLaw.updatedAt = new Date()
    await lawRepo.save(existsLaw)
    await searchService.upsertDoc({
      indexName: 'law',
      document: {
        docId: existsLaw.id.toString(),
        docType: 'lei',
        url: existsLaw.url,
        title: existsLaw.title,
        updatedAt: existsLaw.updatedAt,
        textContent: existsLaw.textContent,
        slug: existsLaw.slug,
        lawId: existsLaw.id,
        categories: categoriesNames,
        categoriesIds: categoriesIds,
        subCategories: subCategoriesNames,
        subCategoriesIds: subCategoriesIds
      }
    })
    return existsLaw
  } catch (err) {
    await notify({
      error: true,
      title: 'Erro',
      errorMsg: `${err}`,
      crawler: {
        id: crawler.id!,
        name: crawler.name!
      }
    })
    throw new Error(`TypeORM upsert Doc: ${err}`)
  }
}
