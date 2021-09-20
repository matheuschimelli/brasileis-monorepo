import {
  Resolver,
  Query,
  Arg,
  Int,
  UseMiddleware,
  Mutation
} from 'type-graphql'
import Law from '../../models/Law'
import LawService from './lawService'
import { isAuth, isAdmin } from '../../middlewares'
import { CreateLawInput } from './lawsInput'

/**
   * Queries
   * Article
   * allArticles
   *
   *
   * Mutations
   * createArticle
   * updateArticle
   * deleteArticle
   */


@Resolver(Law)
export class LawResolver {

  // @UseMiddleware([isAuth, isAdmin])
  // @Query(() => SearchResult)
  // async SearchLaw(
  //   @Arg('searchData') {
  //     term,
  //     page,
  //     categories,
  //     subCategories
  //   }: LawSearchInput
  // ): Promise<{
  //   results: any;
  //   total: any;
  //   searchResults?: undefined;
  // } | {
  //   results: number;
  //   searchResults: null;
  //   total?: undefined;
  // }> {
  //   const searchResults = await LawService.search(term, page, categories, subCategories)
  //   return searchResults
  // }

  @UseMiddleware([isAuth, isAdmin])
  @Query(() => Law)
  async Law(
    @Arg('slug') slug: string
  ): Promise<Law> {
    const law = await LawService.findOneBySlug(slug, ['categories', 'subCategories'])
    return law
  }

  @UseMiddleware([isAuth, isAdmin])
  @Query(() => [Law])
  async allLaws(
    @Arg('page', () => Int) page: number
  ): Promise<Law[]> {
    console.log('PAGE', page)
    const laws = await LawService.index(page)
    return laws
  }

  @UseMiddleware([isAuth, isAdmin])
  @Query(() => Number)
  async allLawsCount(
  ): Promise<Number> {
    const lawCount = await LawService.count()
    return lawCount
  }

  @UseMiddleware([isAuth, isAdmin])
  @Mutation(() => Law)
  async createLaw(
    @Arg('data') createLawData: CreateLawInput
  ): Promise<Law> {
    const lawCount = await LawService.create(createLawData)
    return lawCount
  }

  @UseMiddleware([isAuth, isAdmin])
  @Mutation(() => Law)
  async remoteLaw(
    @Arg('id') id: number
  ): Promise<String> {
    await LawService.deleteById(id)
    return "Deletado"
  }
}
