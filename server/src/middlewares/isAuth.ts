import { MiddlewareFn } from 'type-graphql'
import { AppContext } from '../types'

export const isAuth: MiddlewareFn<AppContext> = async ({ context }, next) => {
  if (!context.req.user) {
    throw new Error('Você precisa estar logado para realizar essa ação.')
  }
  return next()
}
