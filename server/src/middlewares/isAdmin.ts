import { MiddlewareFn } from 'type-graphql'

import { AppContext } from '../types'

export const isAdmin: MiddlewareFn<AppContext> = async ({ context }, next) => {
  // @ts-ignore
  if (!context.req.user!.admin) {
    throw new Error('Você precisa ser administrador logado para realizar essa ação.')
  }

  return next()
}
