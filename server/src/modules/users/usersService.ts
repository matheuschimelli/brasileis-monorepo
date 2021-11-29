import prisma from '../../lib/prisma'
import { AppContext } from '../../types'

export default class UserServicBase {
  public static async findConnectecUser(ctx: AppContext) {
    const user = await prisma.user.findUnique({
      where: {
        id: ctx.req.user!.id
      },
      include: {
        profile: true,
        posts: true,
        _count: true
      }
    })

    if (user) return user
    throw new Error('Nada encontrado')
  }
}
// const ServiceBase = createBaseService<User>(User)

// export default class UserServiceBase extends ServiceBase {
//   public static async findConnectecUser (ctx: AppContext) {
//     //@ts-ignore
//     console.log(ctx.req.user)
//     // @ts-ignore
//     const authUser = ctx.req.user as User
//     const user = await User.findOne({
//       where: {
//         id: authUser.id
//       },
//       relations: [
//         'escritorioAdministador',
//         'escritorioSocio',
//         'peticoes',
//         'allowedPeticoes'
//       ]
//     })

//     if (user) {
//       return user
//     }
//     throw new Error('Nada encontrado')
//   }

//   public static async search (term:string, page:number, ctx: AppContext) {
//     console.log('term', term)
//     console.log('page', page)
//     //@ts-ignore
//     const authUser = ctx.req.user as User
//     console.log(authUser)
//     const peticoes = await Peticao.find({
//       where: {
//         titulo: ILike(`%${term}%`),
//         owner: authUser,
//         escritorio: authUser.escritorioAdministador
//       },
//       order: {
//         updatedAt: 'DESC'
//       },
//       take: 10,
//       skip: (page - 1) * 10
//     })

//     if (peticoes) {
//       return { peticoes }
//     }
//     throw new Error('Nada encontrado')
//   }
// }
