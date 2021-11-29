import prisma from '../../lib/prisma'
import { AppContext } from '../../types'

export default class UserServicBase {
  public static async findConnectedUser(ctx: AppContext) {
    const user = await prisma.user.findUnique({
      where: {
        id: ctx.req.user!.id
      },
      include: {
        profile: true,
      }
    })
    if (user) return user
    throw new Error('Nada encontrado')
  }
  public static async findOneById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: id
      },
      include: {
        profile: true,
      }
    })
    if (user) return user
    throw new Error('Nada encontrado')
  }
  public static async index(page: number) {
    const skipItems = Number(page) ? (Number(page) - 1) * 10 : 0;

    const users = await prisma.user.findMany({
      take: 10,
      skip: skipItems,
      include: {
        profile: true,
      }
    })
    if (users) return users
    throw new Error('Nada encontrado')
  }
  public static async count() {

    const count = await prisma.user.count()

    if (count) return count
    throw new Error('Nada encontrado')
  }
}

