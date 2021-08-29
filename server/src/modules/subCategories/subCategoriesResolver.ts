import {
  Resolver,
  Query,
  Arg,
  Int,
  Mutation,
  UseMiddleware,
  ID
} from 'type-graphql'
import SubCategory from '../../models/SubCategory'
import SubCategoryService from './subCategoriesService'

import {
  CreateSubCategoryInput,
  UpdateSubCategoryInput
} from './subCategoriesInputs'
import { isAuth, isAdmin } from '../../middlewares'

@Resolver(SubCategory)
export class SubCategoriesResolver {
/**
 * Query a single SubCategory
 * @param slug
 * @returns
 */
@Query(() => SubCategory)
  async SubCategory (
   @Arg('slug') slug:string
  ): Promise<SubCategory> {
    const subCategory = await SubCategoryService.findOneBySlug(slug)
    return subCategory
  }

 @Query(() => [SubCategory])
async allSubCategoriesWithoutPagination (): Promise<SubCategory[]> {
  const category = await SubCategoryService.fullIndex({
    name: 'ASC'
  }, ['id', 'name'])
  return category
}

 /**
 * Query all SubCategories
 * @param page
 * @returns
 */
 @Query(() => [SubCategory])
 async allSubCategories (
   @Arg('page', () => Int) page: number
 ): Promise<SubCategory[]> {
   const category = await SubCategoryService.index(page)
   return category
 }

@Query(() => Number)
 async allSubCategoriesCount (
 ): Promise<Number> {
   const subCategoriesCount = await SubCategoryService.count()
   return subCategoriesCount
 }

/**
 * Query all categories for admin panel
 * @param page
 * @returns
 */
@UseMiddleware([isAuth, isAdmin])
@Query(() => SubCategory)
async allCategoriesAdmin (
  @Arg('page', () => Int) page: number

): Promise<SubCategory[]> {
  const subCategory = await SubCategoryService.indexAdmin(page)
  return subCategory
}

/**
 * Query a single SubCategory for admin panel
 * @param id
 * @returns
 */
@UseMiddleware([isAuth, isAdmin])
@Query(() => SubCategory)
async CategoryAdmin (
   @Arg('id') id:string
): Promise<SubCategory> {
  const subCategory = await SubCategoryService.showAdmin(id)
  return subCategory
}

/**
 *  Mutation to Create a subCategory
 * @param param
 * @returns
 */
@UseMiddleware([isAuth, isAdmin])
@Mutation(() => SubCategory)
async createSubCategory (
   @Arg('data') {
     name

   }: CreateSubCategoryInput
): Promise<SubCategory> {
  const newCategory = await SubCategoryService.create({
    name
  })
  return newCategory
}

/**
 * Mutation to Update a single SubCategory
 * @param id
 * @param param1
 * @returns
 */
@UseMiddleware([isAuth, isAdmin])
@Mutation(() => SubCategory)
async updateSubCategory (
    @Arg('id') id: string,
    @Arg('data') {
        name,
        laws
      }: UpdateSubCategoryInput
): Promise<SubCategory> {
  const subCategory = await SubCategoryService.update(id, {
    name,
    laws
  })
  return subCategory
}

/**
 * Mutation to Delete a single SubCategory
 * @param id
 * @returns
 */
@UseMiddleware([isAuth, isAdmin])
@Mutation(() => String)
async deleteSubCategory (
    @Arg('id', () => ID) id: string
): Promise<String> {
  await SubCategoryService.delete(id)
  return 'Artigo Removido'
}
}
