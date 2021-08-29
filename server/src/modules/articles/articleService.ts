import Article from '../../models/Article'
import Category from '../../models/Category'
import SubCategory from '../../models/SubCategory'
import CreateArticleInput from './articlesInputs'
import createServiceBase from '../../lib/ServiceBase'

const ArticleBase = createServiceBase<Article>(Article)

export default class ArticleService extends ArticleBase {
  static async index (page: number) {
    const allItems = await Article.find({
      order: {
        updatedAt: 'DESC'
      },
      relations: ['categories', 'subCategories'],
      take: 10,
      skip: (page - 1) * 10

    })
    if (allItems.length !== 0) {
      return allItems
    }
    throw new Error('Nada encontrado')
  }

  static async create (data:CreateArticleInput) {
    const newArticle = Article.create()
    newArticle.title = data.title!
    newArticle.content = data.content
    newArticle.summary = data.summary
    newArticle.featured = data.featured
    newArticle.published = false
    newArticle.categories = await Category.findByIds(data.categories!)
    await newArticle.save()
    return newArticle
  }

  static async update (id:string, data:CreateArticleInput) {
    console.log(data)
    const article = await Article.findOne(id)

    // Remove any previos article from featured if a new article is save with featured as true
    if (data.featured === true) {
      const pastFeatureds = await Article.find({
        where: {
          featured: true
        }
      })
      if (pastFeatureds) {
        for (const featuredArticle of pastFeatureds) {
          featuredArticle.featured = false
          await featuredArticle.save()
        }
      }
    }

    if (article) {
      article.title = data.title!
      article.content = data.content
      article.summary = data.summary
      article.featured = data.featured
      article.categories = await Category.findByIds(data.categories!)
      article.subCategories = await SubCategory.findByIds(data.subCategories!)

      await article.save()
      return article
    }
    throw new Error('Nada encontrado para atualizar')
  }

  static async getFeatured () {
    const article = await Article.findOne({
      where: {
        featured: true
      },
      relations: ['categories', 'subCategories']
    })
    if (article) return article
    throw new Error('Nada encontrado para atualizar')
  }
}
