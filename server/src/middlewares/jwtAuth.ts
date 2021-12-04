import { Response, Request } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import prisma from '../lib/prisma'
import { IRequest } from '../types'
import { User } from '@prisma/client'
dotenv.config({ path: '.env' })

export default async function jwtAuth(req: Request, res: Response, next: any) {
  req.isAuthenticated = () => {
    let token = req.headers.authorization
    if (!token) return undefined
    if (!token.startsWith('Bearer')) return undefined
    token = token.slice(7, token.length)

    try {
      return jwt.verify(token, process.env.TOKEN_SECRET!) as User
    } catch (err) {
      console.log(err)
      return undefined
    }
  }

  const authenticatedUser = req.isAuthenticated()
  if (authenticatedUser) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: authenticatedUser.id
        },
        include: {
          profile: true,
        }
      })

      if (user) {
        req.user = user
        next()
      } else {
        throw new Error('User not found')
      }
    } catch (error) {
      console.log(error)
      return false
    }
  } else {
    next()
  }
}

export function isAuthenticated(req: Request, res: Response, next: any) {
  const a = req.user

  const isAuth = req.isAuthenticated()
  if (isAuth) {
    console.log('user IS authenticated')
    return next()
  }
  console.log('user is NOT')
  return res.status(400).send({ message: 'Auth required to perform this action.' })
};

export function isAdmin(req: IRequest, res: Response, next: any) {
  const user = req.user
  if (user && user.admin) {
    return next()
  }
  if (user && !user.admin) {
    return res.status(404).send({ message: 'Auth required to perform this action.' })
  }
};
