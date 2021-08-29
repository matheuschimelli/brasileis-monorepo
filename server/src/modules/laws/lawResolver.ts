import {
  Resolver,
  Query,
  Arg,
  Int
  // Subscription,
  // PubSubEngine,
  // PubSub,
  // Root
} from 'type-graphql'
import Law from '../../models/Law'
import LawService from './lawService'

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
  @Query(() => Law)
  async Law (
     @Arg('slug') slug:string
  ): Promise<Law> {
    const law = await LawService.findOneBySlug(slug, ['categories', 'subCategories'])
    return law
  }

  @Query(() => [Law])
  async allLaws (
  @Arg('page', () => Int) page: number
  ): Promise<Law[]> {
    console.log('PAGE', page)
    const laws = await LawService.index(page)
    return laws
  }

  @Query(() => Number)
  async allLawsCount (
  ): Promise<Number> {
    const lawCount = await LawService.count()
    return lawCount
  }

  // @Subscription({ topics: 'NOTIFICATIONS' })
  // latestLaws (@Root() { id, message }: NotificationPayload): Notification {
  //   return { id, message }
  // }
}
