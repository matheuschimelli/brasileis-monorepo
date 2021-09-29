import { title } from 'process'
import createBaseService from '../../lib/ServiceBase'
import Category from '../../models/Category'
import Crawler from '../../models/Crawler'
import Law from '../../models/Law'
import SubCategory from '../../models/SubCategory'
import { SearchService } from '../search/searchService'
import { CreateLawInput } from './lawsInput'

const ServiceBase = createBaseService<Law>(Law)
const searchService = new SearchService()


class LawService extends ServiceBase {

  static async search(term: string, page?: number, categories?: string[], subCategories?: string[]) {
    if (!page) page = 1

    const fromPage = (page: number) => page === 1 ? 0 : (page * 15) - 15

    console.log(fromPage(page))

    try {
      const searchResults = await searchService.search({
        term: term,
        index: 'law',
        categories: categories,
        subCategories: subCategories
      }, { from: fromPage(page), size: 15 })

      // @ts-ignore
      const filteredResults = searchResults.results.body.hits.hits.map(({ _index, _type, _id, _score, ...keepAttrs }) => keepAttrs)
      if (searchResults) {
        return { results: filteredResults, total: searchResults.results.body.hits.total.value }
      }
      return { results: 0, searchResults: null }
    } catch (error) {
      console.log(error)
      throw new Error("Nada encontrado")
    }
  }

  public static async findOneByUrl(url: String) {
    const law = await Law.findOne({
      where: {
        url: url
      }
    })
    if (law) {
      return law
    }
    throw new Error("Nada encontrado")
  }
  static async create(data: CreateLawInput) {

    const crawler = await Crawler.findOne(data.crawlerId)
    if (!crawler) throw new Error("Crawler não encontrado com o id")

    const existLaw = await Law.findOne({
      where: { url: data.url }
    })

    if (!existLaw) {

      const newLaw = new Law()
      newLaw.title = data.title
      newLaw.url = data.url
      newLaw.htmlContent = data.htmlContent
      newLaw.textContent = data.textContent
      newLaw.contentHtmlSelector = data.contentHtmlSelector
      newLaw.categories = await Category.findByIds(data.categories)
      newLaw.subCategories = await SubCategory.findByIds(data.subCategories)
      newLaw.crawler = crawler

      const savedLaw = await newLaw.save()
      await searchService.upsert({
        indexName: 'law',
        document: {
          docId: savedLaw.id.toString(),
          lawId: savedLaw.id,
          docType: 'law',
          title: savedLaw.title,
          url: savedLaw.url,
          slug: savedLaw.slug,
          textContent: savedLaw.textContent,
          categories: LawService.getCategoriesNames(savedLaw.categories),
          subCategories: LawService.getSubCategoriesNames(savedLaw.subCategories),
          categoriesIds: LawService.getCategoriesIds(savedLaw.categories),
          subCategoriesIds: LawService.getSubCategoriesIds(savedLaw.subCategories),
        }
      })
      return savedLaw
    } else {
      existLaw.title = data.title
      existLaw.url = data.url
      existLaw.htmlContent = data.htmlContent
      existLaw.textContent = data.textContent
      existLaw.contentHtmlSelector = data.contentHtmlSelector
      existLaw.categories = await Category.findByIds(data.categories)
      existLaw.subCategories = await SubCategory.findByIds(data.subCategories)
      existLaw.crawler = crawler

      await searchService.upsert({
        indexName: 'law',
        document: {
          docId: existLaw.id.toString(),
          lawId: existLaw.id,
          docType: 'law',
          title: existLaw.title,
          url: existLaw.url,
          slug: existLaw.slug,
          textContent: existLaw.textContent,
          categories: LawService.getCategoriesNames(existLaw.categories),
          subCategories: LawService.getSubCategoriesNames(existLaw.subCategories),
          categoriesIds: LawService.getCategoriesIds(existLaw.categories),
          subCategoriesIds: LawService.getSubCategoriesIds(existLaw.subCategories),
        }
      })
      return await existLaw.save()
    }
  }

  static async update(url: string, data: CreateLawInput) {
    const updateLaw = await Law.findOne({
      where: {
        url: url
      }
    })
    if (updateLaw) {
      updateLaw.title = data.title
      updateLaw.htmlContent = data.htmlContent
      updateLaw.textContent = data.textContent
      updateLaw.contentHtmlSelector = data.contentHtmlSelector
      updateLaw.categories = await Category.findByIds(data.categories)
      updateLaw.subCategories = await SubCategory.findByIds(data.subCategories)

      const savedLaw = await updateLaw.save()
      await searchService.upsert({
        indexName: 'law',
        document: {
          docId: savedLaw.id.toString(),
          lawId: savedLaw.id,
          docType: 'law',
          title: savedLaw.title,
          url: savedLaw.url,
          slug: savedLaw.slug,
          textContent: savedLaw.textContent,
          categories: LawService.getCategoriesNames(savedLaw.categories),
          subCategories: LawService.getSubCategoriesNames(savedLaw.subCategories),
          categoriesIds: LawService.getCategoriesIds(savedLaw.categories),
          subCategoriesIds: LawService.getSubCategoriesIds(savedLaw.subCategories),
        }
      })
      return savedLaw
    }
  }

  static async deleteById(id: number) {
    const law = await Law.findOne({
      where: {
        id: id
      }
    })
    if (law) {
      await SearchService.remove({
        index: 'law',
        documentId: law.id
      })
      return await law.remove()
    } else {
      throw new Error("Não encontrado para remover")
    }
  }

  public static getCategoriesIds(categories: Category[]) {
    return categories.map(({ articles, crawlers, ...rest }) => rest).map(el => el.id)
  }
  public static getSubCategoriesIds(subCategories: SubCategory[]) {
    return subCategories.map(({ articles, crawlers, ...rest }) => rest).map(el => el.id)
  }
  public static getCategoriesNames(categories: Category[]) {
    return categories.map(({ articles, crawlers, ...rest }) => rest).map(el => el.name)
  }
  public static getSubCategoriesNames(subCategories: SubCategory[]) {
    return subCategories.map(({ articles, crawlers, ...rest }) => rest).map(el => el.name)
  }


}
export default LawService
