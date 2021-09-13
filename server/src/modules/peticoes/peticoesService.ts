import Peticao from '../../models/EscritorioVirtual/Peticao'

import createBaseService from '../../lib/ServiceBase'
import { AppContext } from '../../types'
import { User } from '../../models/User'
import { UpdatePeticaoInput } from './peticaoInput'
const ServiceBase = createBaseService<Peticao>(Peticao)

export default class PeticaoService extends ServiceBase {
  public static async findPeticaoById (id:number|string, ctx: AppContext) {
    //@ts-ignore
    if (ctx.req.user) {
      const peticao = await Peticao.findOne({
        where: {
          id: id,
          // @ts-ignore
          owner: ctx.req.user.id
        }
      })

      if (peticao) {
        return peticao
      }
    }
    throw new Error('Nada encontrado')
  }

  public static async allUserPeticoes (page:number, ctx: AppContext) {
    //@ts-ignore
    if (ctx.req.user) {
      const peticoes = await Peticao.find({
        where: {
          // @ts-ignore
          owner: ctx.req.user.id
        },
        order: {
          updatedAt: 'DESC'
        },
        relations: ['owner', 'escritorio'],
        take: 10,
        skip: (page - 1) * 10
      })

      if (peticoes) {
        return peticoes
      }
    }
    throw new Error('Nada encontrado')
  }

  public static async allUserPeticoesCount (ctx: AppContext) {
    //@ts-ignore
    if (ctx.req.user) {
      const peticoes = await Peticao.count({
        where: {
          // @ts-ignore
          owner: ctx.req.user.id
        }
      })

      if (peticoes) {
        return peticoes
      }
    }
    throw new Error('Nada encontrado')
  }

  public static async createNewPeticao (ctx: AppContext) {
    //@ts-ignore
    if (ctx.req.user) {
      // @ts-ignore
      const authUser = ctx.req.user as User
      const newPeticao = Peticao.create()
      newPeticao.titulo = 'Petição sem título'
      newPeticao.owner = authUser
      newPeticao.allowAccessTo = [authUser]
      newPeticao.escritorio = authUser.escritorioAdministador
      newPeticao.content = 'Petição em Branco'
      newPeticao.private = true

      await Peticao.save(newPeticao)

      if (newPeticao) {
        return newPeticao
      }
      throw new Error('Não foi possível criar uma petição. Tente mais tarde')
    }
    throw new Error('Não autenticado')
  }

  public static async updatePeticao (id:string, ctx: AppContext, data:UpdatePeticaoInput) {
    //@ts-ignore
    if (ctx.req.user) {
      // @ts-ignore
      const authUser = ctx.req.user as User
      const peticao = await Peticao.findOne({
        where: {
          id: id,
          owner: authUser
        }
      })

      if (peticao) {
        peticao.titulo = data.titulo
        peticao.content = data.content
        peticao.header = data.header
        peticao.footer = data.footer
        peticao.private = data.isPrivate

        await peticao.save()

        return peticao
      }
      throw new Error('Não foi possível atualizar uma petição. Tente mais tarde')
    }
    throw new Error('Não autenticado')
  }

  public static async deletePeticao (id:string, ctx:AppContext) {
    //@ts-ignore
    if (ctx.req.user) {
      // @ts-ignore
      const authUser = ctx.req.user as User
      const peticao = await Peticao.findOne({
        where: {
          id: id,
          owner: authUser,
          escritorio: authUser.escritorioAdministador
        }
      })
      if (peticao) {
        await peticao.remove()
      }
      throw new Error('Nenhuma petição encontrada para ser removida')
    }
    throw new Error('Não autenticado')
  }
}
