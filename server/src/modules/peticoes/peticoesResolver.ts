import {
  Resolver,
  Query,
  Arg,
  Int,
  Mutation,
  Ctx,
  UseMiddleware,
  ID
} from 'type-graphql'
import Peticao from '../../models/EscritorioVirtual/Peticao'
import PeticaoService from './peticoesService'
import { UpdatePeticaoInput } from './peticaoInput'

import { AppContext } from '../../types'
import { isAuth, isAdmin } from '../../middlewares'

@Resolver(Peticao)
export class PeticaoResolver {
@Query(() => Peticao)
  async Peticao (
     @Arg('id', () => ID) id: string,
     @Ctx() ctx: AppContext
  ): Promise<Peticao> {
    const peticao = await PeticaoService.findPeticaoById(id, ctx)
    return peticao
  }

@Query(() => [Peticao])
async allUserPeticoes (
  @Arg('page', () => Int) page: number,
  @Ctx() ctx: AppContext

): Promise<Peticao[]> {
  const peticoes = await PeticaoService.allUserPeticoes(page, ctx)
  return peticoes
}

  @Query(() => Number)
async allUserPeticoesCount (
    @Ctx() ctx: AppContext

): Promise<Number> {
  const peticoesCount = await PeticaoService.allUserPeticoesCount(ctx)
  return peticoesCount
}

  @UseMiddleware([isAuth])
  @Mutation(() => Peticao)
  async createPeticao (
      @Ctx() ctx: AppContext
  ): Promise<Peticao> {
    const newPeticao = await PeticaoService.createNewPeticao(ctx)
    return newPeticao
  }

  @UseMiddleware([isAuth])
  @Mutation(() => Peticao)
  async updatePeticao (
      @Arg('id', () => ID) id: string,
      @Arg('data') {
          titulo,
          content,
          footer,
          header,
          isPrivate
        }: UpdatePeticaoInput,
        @Ctx() ctx: AppContext

  ): Promise<Peticao> {
    const peticao = await PeticaoService.updatePeticao(id, ctx, {
      titulo,
      content,
      footer,
      header,
      isPrivate
    })
    return peticao
  }

  @UseMiddleware([isAuth, isAdmin])
  @Mutation(() => String)
  async removePeticao (
      @Arg('id', () => ID) id: string,
      @Ctx() ctx: AppContext
  ): Promise<String> {
    await PeticaoService.deletePeticao(id, ctx)
    return 'Petição Removida'
  }
}
