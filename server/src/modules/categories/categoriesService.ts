import Category from '../../models/Category'
// import Law from '../../models/Law'
import {
  CreateCategoryInput,
  UpdateCategoryInput
} from './categoriesInputs'

import createServiceBase from '../../lib/ServiceBase'

const CategoryBase = createServiceBase<Category>(Category)

export default class CategoryService extends CategoryBase {
  static async index(page: number) {
    console.log(page)
    const categories = await Category.find({
      select: [
        'id',
        'createdAt',
        'name',
        'slug',
        'updatedAt'
      ],
      relations: ['laws'],
      order: {
        createdAt: 'DESC'
      }
    })
    if (categories) return categories

    throw new Error('Nada encontrado')
  }

  static async show(slug: string) {
    const category = await Category.createQueryBuilder('category')
      .leftJoinAndSelect('category.laws', 'laws')
      .select(['category.id', 'category.name', 'law.id', 'law.slug', 'law.title', 'law.updatedAt'])
      .leftJoin('category.laws', 'law') // bar is the joined table
      .limit(10)
      .where('category.slug= :update', { update: slug })
      .getOne()

    if (category) return category

    throw new Error('Nada encontrado')
  }

  static async showHomePageCategories() {
    const categories = await Category.find({
      select: ['id', 'name', 'slug'],
      where: {
        featured: true
      }
    })
    if (categories) return categories

    throw new Error('Nada encontrado')
  }

  /**
   *  Returns index containing all fields from Categories for Admin Panel
   * @returns
   */
  static async indexAdmin(page: number) {
    const categories = await Category.find({
      order: {
        createdAt: 'DESC'
      },
      take: 10,
      skip: (page - 1) * 10

    })
    if (categories) return categories
    throw new Error('Nada encontrado')
  }

  /**
   * Returns all fields from Categories for Admin Panel
   * @param id Category ID - Admin panel doens't works with slugs
   * @returns
   */
  static async showAdmin(id: string) {
    const category = await Category.findOne(id)

    if (category) return category
    throw new Error('Nada encontrado')
  }

  static async create(data: CreateCategoryInput) {
    const category = Category.create()
    category.name = data.name
    category.featured = data.featured!
    category.description = data.description!

    await category.save()
    return category
  }

  static async update(id: string, data: UpdateCategoryInput) {
    const category = await Category.findOne(id)

    if (category) {
      category.name = data.name
      category.featured = data.featured!
      category.description = data.description!
      // category.laws = await Law.findByIds(data.laws!)

      await category.save()
      return category
    }
    throw new Error('Não foi possível atualizar. Tente mais tarde.')
  }
}
