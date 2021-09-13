import { MiddlewareFn } from 'type-graphql'

import { AppContext } from '../types'

export const isAuth: MiddlewareFn<AppContext> = async ({ context }, next) => {
  console.log(context.req.user)
  // @ts-ignore
  if (!context.req.user) {
    throw new Error('Você precisa estar logado para realizar essa ação.')
  }

  return next()
}
