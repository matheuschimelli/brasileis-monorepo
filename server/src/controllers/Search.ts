/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express'
import SearchService from '../utils/Search'
import { getRepository } from 'typeorm'
import Category from '../models/Category'
import SubCategory from '../models/SubCategory'

const search = new SearchService()

export default class SearchController {
  async search(req: Request, res: Response) {
    let {
      page,
      q,
      categories,
      subcategories
    } = req.query

    // @ts-ignore
    if (!page) page = 1
    // @ts-ignore

    const fromPage = (page: number) => page === 1 ? 0 : (page * 15) - 15

    console.log(fromPage(Number(page)))

    try {
      const searchResults = await search.search({
        term: q?.toString(),
        index: 'law',
        categories: categories,
        subCategories: subcategories
      }, { from: fromPage(Number(page)), size: 15 })

      // @ts-ignore
      const filteredResults = searchResults.results.body.hits.hits.map(({ _index, _type, _id, _score, ...keepAttrs }) => keepAttrs)
      if (searchResults) {
        return res.json({ results: filteredResults, total: searchResults.results.body.hits.total.value })
      }
      return res.json({ results: 0, searchResults: null })
    } catch (error) {
      console.log(error)
      return res.status(404).send({ error: true, message: 'Nada encontrado' })
    }
  }

  async create(req: Request, res: Response) {
    const {
      lawId,
      url,
      title,
      textContent,
      slug,
      categories,
      subCategories,
      docId
    } = req.body
    const updatedAt = new Date()
    try {
      const { body } = await search.upsertDoc({
        indexName: 'law',
        document: {
          docType: 'lei',
          lawId,
          url,
          title,
          textContent,
          slug,
          categories,
          subCategories,
          updatedAt,
          docId
        }
      })

      return res.send(body)
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error: true, message: 'Não foi possível salvar. Tente mais tarde.' })
    }
  }

  async update(req: Request, res: Response) {
    const {
      lawId,
      url,
      title,
      textContent,
      slug,
      categories,
      subCategories,
      docId
    } = req.body
    const updatedAt = new Date()
    try {
      const newDoc = await search.upsertDoc({
        indexName: 'law',
        document: {
          docType: 'lei',
          lawId,
          url,
          title,
          textContent,
          slug,
          categories,
          subCategories,
          updatedAt,
          docId
        }
      })

      return res.send({ newDoc })
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error: true, message: 'Não foi possível salvar. Tente mais tarde.' })
    }
  }

  async categoriesFilter(req: Request, res: Response) {
    try {
      const categoryRepo = getRepository(Category)
      const categories = await categoryRepo.find({
        select: ['id', 'slug', 'name'],
        order: {
          name: 'DESC'
        }
      })
      if (categories) {
        return res.send(categories)
      }
      return res.send({ message: 'Not found.' })
    } catch (error) {
      console.log(error)
      return res.send({ message: 'Not found.' })
    }
  }

  async subCategoriesFilter(req: Request, res: Response) {
    try {
      const subCategoryRepo = getRepository(SubCategory)
      const subCategories = await subCategoryRepo.find({
        select: ['id', 'slug', 'name'],
        order: {
          name: 'DESC'
        }
      })
      if (subCategories) {
        return res.send(subCategories)
      }
      return res.send({ message: 'Not found.' })
    } catch (error) {
      console.log(error)
      return res.status(404).send({ message: 'not found' })
    }
  }
}
