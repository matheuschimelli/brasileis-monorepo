import {
  Resolver,
  Query,
  Arg,
  Int,
  UseMiddleware,
  Ctx
} from 'type-graphql'
import { User } from '../../graphql/generated/type-graphql'
import Peticao from '../../models/EscritorioVirtual/Peticao'
import UserService from './usersService'

import { isAuth, isAdmin } from '../../middlewares'
import { AppContext } from '../../types'

declare interface UserSearchResult {
  peticoes: Peticao[] | null
}
@Resolver(User)
export class UsersResolver {
  /**
   * Query a authenticated User
   */
  @UseMiddleware([isAuth])
  @Query(() => User)
  async AuthUser(
    @Ctx() ctx: AppContext
  ): Promise<User> {
    const user = await UserService.findConnectecUser(ctx)
    return user
  }

  /**
  * Admin Resolvers
  */

  // @UseMiddleware([isAuth, isAdmin])
  // @Query(() => User)
  // async User(
  //   @Arg('id') id: string
  // ): Promise<User> {
  //   const user = await UserService.findOneById(id)
  //   return user
  // }

  // // @UseMiddleware([isAuth, isAdmin])
  // @Query(() => [User])
  // async allUsers(
  //   @Arg('page', () => Int) page: number
  // ): Promise<User[]> {
  //   console.log('PAGE', page)
  //   const users = await UserService.index(page)
  //   return users
  // }

  // @UseMiddleware([isAuth, isAdmin])
  // @Query(() => Number)
  // async allUsersCount(
  // ): Promise<Number> {
  //   const count = await UserService.count()
  //   return count
  // }

  // @UseMiddleware([isAuth])
  // @Query(() => User)
  // async searchUserAccount(
  //   @Arg('term') term: string,
  //   @Arg('page', () => Int) page: number,
  //   @Ctx() ctx: AppContext
  // ): Promise<UserSearchResult> {
  //   const userSearchResult = await UserService.search(term, page, ctx)
  //   return userSearchResult
  // }
}
