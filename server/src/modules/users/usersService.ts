import { Request, Response } from 'express'
import { OAuth2Client } from 'google-auth-library'
import dotenv from 'dotenv'

import { generateToken } from '../../utils/jwt'
import prisma from '../../lib/prisma'
import { AppContext } from '../../types'

dotenv.config({ path: '.env' })

const client = new OAuth2Client(process.env.GOOGLE_ID, process.env.GOOGLE_SECRET)
const tokenExpirationTime = '7d'

export default class UserService {

  public static async findConnectedUser(ctx: AppContext) {
    const user = await prisma.user.findUnique({
      where: {
        id: ctx.req.user!.id
      },
      include: {
        profile: true,
        subscriptions: true
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
  /**
   * Authentication methods
   */
  static getUser(req: Request, res: Response) {
    if (req.isAuthenticated()) {
      const user = req.user
      return res.json({ ...user })
    } else {
      return res.status(400).send({ msg: 'You must be authenticated to perform this action.' })
    }
  }
  static async subscriptions(req: Request, res: Response) {
    const { id } = req.user!
    const user = await prisma.user.findUnique({
      where: {
        id
      },
      include: {
        subscriptions: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })
    return res.send(user)
  }

  static logout(req: Request, res: Response) {
    // @TODO fix this. Use redis cache to manage valid 
    // tokens and should remove token from redis cache if user has been logged out
    return res.send('ok')
  }

  static async verifyToken(req: Request, res: Response) {
    const authToken = req.body

    try {
      const ticket = await client.verifyIdToken({
        idToken: authToken.credential,
        audience: process.env.GOOGLE_ID,
      });

      const payload = ticket.getPayload()
      const userid = payload!.sub

      if (payload) {
        if (payload.sub) {
          const existingUser = await prisma.user.findUnique({
            where: {
              googleId: payload.sub
            }
          })

          if (existingUser && existingUser.email === 'matheuschimelli7@gmail.com') {
            await prisma.user.update({
              where: {
                googleId: payload.sub
              },
              data: {
                admin: true,
                role: 'ADMIN'
              }
            })
          }

          if (existingUser) {
            return res.send({ auth_token: generateToken({ id: existingUser.id, name: existingUser.name, email: existingUser.email }, tokenExpirationTime) })
          }
          //  const existingEmailUser = await prisma.user.findUnique({ where: { email: payload.email } })

          // if (existingEmailUser) {
          //   return res.status(400).json({ message: 'Você ja possui uma conta com esse email' })
          // } 
          else {
            // If a user not exists or it was not found by them google id, create a new one
            if (payload.email) {
              const newUser = await prisma.user.create({
                data: {
                  name: payload.name,
                  email: payload.email,
                  googleId: payload.sub,
                  profile: {
                    create: {
                      picture: payload.picture,

                    }
                  }
                }
              })

              return res.send({
                auth_token: generateToken({ id: newUser.id, name: newUser.name, email: newUser.email }, tokenExpirationTime)
              })
            } else {
              return res.status(400).json({ message: 'Cannot find a valid email for the given Google Account. Please, try again later or contact our support.' })
            }
          }
        }
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({ msg: 'Cannot authenticate now. Try again later' })
    }
  }
}

