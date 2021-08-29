import {
  Resolver,
  Query,
  Arg,
  Int,
  Mutation,
  UseMiddleware,
  ID
} from 'type-graphql'
import Category from '../../models/Category'
import CategoryService from './categoriesService'

import { CreateCategoryInput, UpdateCategoryInput } from './categoriesInputs'
import { isAuth, isAdmin } from '../../middlewares'

@Resolver(Category)
export class CategoriesResolver {
@Query(() => Category)
  async Category (
   @Arg('slug') slug:string
  ): Promise<Category> {
    const category = await CategoryService.show(slug)
    return category
  }

@Query(() => [Category])
async allCategoriesWithoutPagination (): Promise<Category[]> {
  const category = await CategoryService.fullIndex({
    name: 'ASC'
  }, ['id', 'name'])
  return category
}

@Query(() => [Category])
async allCategories (
  @Arg('page', () => Int) page: number
): Promise<Category[]> {
  const category = await CategoryService.index(page)
  return category
}

@Query(() => Number)
async allCategoriesCount (
): Promise<Number> {
  const categoriesCount = await CategoryService.count()
  return categoriesCount
}

@Query(() => Category)
async homePageCategories (): Promise<Category[]> {
  const category = await CategoryService.showHomePageCategories()
  return category
}

@UseMiddleware([isAuth, isAdmin])
@Query(() => Category)
async allCategoriesAdmin (
  @Arg('page', () => Int) page: number

): Promise<Category[]> {
  const category = await CategoryService.indexAdmin(page)
  return category
}

@UseMiddleware([isAuth, isAdmin])
@Query(() => Category)
async CategoryAdmin (
   @Arg('id') id:string
): Promise<Category> {
  const category = await CategoryService.showAdmin(id)
  return category
}

@UseMiddleware([isAuth, isAdmin])
@Mutation(() => Category)
async createCategory (
   @Arg('data') {
     name,
     description,
     featured
   }: CreateCategoryInput
): Promise<Category> {
  const newCategory = await CategoryService.create({
    name,
    description,
    featured
  })
  return newCategory
}

@UseMiddleware([isAuth, isAdmin])
@Mutation(() => Category)
async updateCategory (
    @Arg('id') id: string,
    @Arg('data') {
        name,
        description,
        featured,
        laws
      }: UpdateCategoryInput
): Promise<Category> {
  const Category = await CategoryService.update(id, {
    name,
    description,
    featured,
    laws
  })
  return Category
}

@UseMiddleware([isAuth, isAdmin])
@Mutation(() => String)
async deleteCategory (
    @Arg('id', () => ID) id: string
): Promise<String> {
  await CategoryService.delete(id)
  return 'Artigo Removido'
}
}
