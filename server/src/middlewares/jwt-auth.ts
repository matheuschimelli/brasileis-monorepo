import { Response, Request } from 'express'
import jwt from 'jsonwebtoken'
import prisma from '@lib/prisma'
import { User } from '@prisma/client'
import { validationResult } from 'express-validator'

export const jwtAuth = async (req: Request, res: Response, next: any) => {
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
  if (!authenticatedUser) return next()

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: authenticatedUser.id
      },
      include: {
        profile: true,
      }
    })

    if (!user) throw new Error('User not found')
    req.user = user
    next()

  } catch (error) {
    console.log(error)
    return false
  }

}

export const isAuthenticated = (req: Request, res: Response, next: any) => {
  const isAuth = req.isAuthenticated()
  console.log('IS AUTHENTICATEDS', isAuth)
  if (isAuth) return next()

  return res.status(400).send({ message: 'Auth required to perform this action.' })
};

export const isAdmin = async (req: Request, res: Response, next: any) => {
  console.log('IS admin', req.user)

  const user = req.user
  if (user && user.admin && user.role == 'ADMIN') return next()

  return res.status(404).send({ message: 'Auth required to perform this action.' })

};
export const checkValidation = (req: Request, res: Response, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next()
}