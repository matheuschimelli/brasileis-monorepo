import SubCategory from '../../models/SubCategory'
import {
  CreateSubCategoryInput,
  UpdateSubCategoryInput
} from './subCategoriesInputs'

import createServiceBase from '../../lib/ServiceBase'

const SubCategoryBase = createServiceBase<SubCategory>(SubCategory)

export default class SubCategoryService extends SubCategoryBase {
  public static async index (page: number) {
    const allItems = await SubCategory.find({
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

  /**
   *  Returns index containing all fields from Categories for Admin Panel
   * @returns
   */
  static async indexAdmin (page:number) {
    const subCategory = await SubCategory.find({
      order: {
        name: 'DESC'
      },
      take: 10,
      skip: (page - 1) * 10
    })
    if (subCategory) return subCategory
    throw new Error('Nada encontrado')
  }

  /**
   * Returns all fields from Categories for Admin Panel
   * @param id Category ID - Admin panel doens't works with slugs
   * @returns
   */
  static async showAdmin (id: string) {
    const subCategory = await SubCategory.findOne(id)

    if (subCategory) return subCategory
    throw new Error('Nada encontrado')
  }

  static async create (data: CreateSubCategoryInput) {
    const subCategory = SubCategory.create()
    subCategory.name = data.name

    await subCategory.save()
    return subCategory
  }

  static async update (id: string, data: UpdateSubCategoryInput) {
    const subCategory = await SubCategory.findOne(id)

    if (subCategory) {
      subCategory.name = data.name
      // subCategory.laws = await Law.findByIds(data.laws!)

      await subCategory.save()
      return subCategory
    }
    throw new Error('Não foi possível atualizar. Tente mais tarde.')
  }
}
