import {
  Resolver,
  Query,
  Arg,
  Int,
  Mutation,
  Ctx,
  UseMiddleware,
  Subscription,
  PubSubEngine,
  PubSub,
  Root
} from 'type-graphql'
import Article from '../../models/Article'
import ArticleService from './articleService'

import CreateArticleInput from './articlesInputs'

import { AppContext } from '../../types'
import { isAuth, isAdmin } from '../../middlewares'

import { Notification, NotificationPayload } from './articleSubscription'

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

@Resolver(Article)
export class ArticleResolver {
@Query(() => Article)
  async Article (
   @Arg('slug') slug:string
  ): Promise<Article> {
    const article = await ArticleService.findOneBySlug(slug, ['categories', 'subCategories'])
    return article
  }

@Query(() => [Article])
async allArticles (
@Arg('page', () => Int) page: number
): Promise<Article[]> {
  console.log('PAGE', page)
  const articles = await ArticleService.index(page)
  return articles
}

@Query(() => Number)
async allArticlesCount (
): Promise<Number> {
  const articlesCount = await ArticleService.count()
  return articlesCount
}

@Query(() => Article)
async featuredArticle (): Promise<Article> {
  const article = await ArticleService.getFeatured()
  return article
}

@UseMiddleware([isAuth, isAdmin])
@Mutation(() => Article)
async createArticle (
   @Arg('data') {
     title,
     content,
     summary,
     categories,
     description,
     featured
   }: CreateArticleInput,
   @Ctx() ctx: AppContext,
   @PubSub() pubSub: PubSubEngine
): Promise<Article> {
  const newArticle = await ArticleService.create({
    title: title!,
    description,
    content,
    summary,
    categories,
    featured
  })
  await pubSub.publish('NOTIFICATIONS', { id: newArticle.id, message: newArticle.title })
  return newArticle
}

@UseMiddleware([isAuth, isAdmin])
@Mutation(() => Article)
async updateArticle (
    @Arg('id') id: string,
    @Arg('data') {
        title,
        content,
        summary,
        categories,
        subCategories,
        featured
      }: CreateArticleInput
): Promise<Article> {
  const article = await ArticleService.update(id, {
    title,
    content,
    summary,
    categories,
    subCategories,
    featured
  })
  return article
}

@UseMiddleware([isAuth, isAdmin])
@Mutation(() => String)
async removeArticle (
    @Arg('id', () => String) id: string
): Promise<String> {
  await ArticleService.delete(id)
  return 'Artigo Removido'
}

@Subscription({ topics: 'NOTIFICATIONS' })
normalSubscription (@Root() { id, message }: NotificationPayload): Notification {
  return { id, message }
}
}
