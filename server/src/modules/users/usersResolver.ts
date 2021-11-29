import {
  Resolver,
  Query,
  Arg,
  Int,
  UseMiddleware,
  Ctx,
} from 'type-graphql'
import { User } from './userEntity'
import UserService from './usersService'
import { isAuth, isAdmin } from '../../middlewares'
import { AppContext } from '../../types'

@Resolver(User)
export class UsersResolver {
  @UseMiddleware([isAuth])
  @Query(() => User)
  async AuthUser(
    @Ctx() ctx: AppContext
  ): Promise<User> {
    return await UserService.findConnectedUser(ctx)
  }

  @UseMiddleware([isAuth, isAdmin])
  @Query(() => User)
  async User(
    @Arg('id') id: string
  ): Promise<User> {
    const user = await UserService.findOneById(id)
    return user
  }

  @Query(() => [User])
  async allUsers(
    @Arg('page', () => Int) page: number
  ): Promise<User[]> {
    console.log('PAGE', page)
    const users = await UserService.index(page)
    return users
  }

  @UseMiddleware([isAuth, isAdmin])
  @Query(() => Number)
  async allUsersCount(
  ): Promise<Number> {
    const count = await UserService.count()
    return count
  }

}
