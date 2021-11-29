import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { getRepository } from 'typeorm'

import User from '../models/User'

dotenv.config({ path: '.env' })

declare var process: {
  env: {
    TOKEN_SECRET: string
  }
}

export default async function jwtAuth(req: Request, res: Response, next: any) {
  // @ts-ignore
  req.isAuthenticated = () => {
    let token = req.headers.authorization

    if (!token) return false
    if (!token.startsWith('Bearer')) return false

    token = token.slice(7, token.length)

    try {
      return jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (err) {
      console.log(err)
      return false
    }
  }
  //@ts-ignore
  if (req.isAuthenticated()) {
    //@ts-ignore
    const payload = req.isAuthenticated()
    try {
      const userRepo = getRepository(User)
      // @ts-ignore

      const user = await userRepo.findOne(payload.id, {
        relations: ['escritorioAdministador', 'escritorioSocio'],
        select: ['id', 'email', 'profilePicture', 'createdAt', 'name', 'username', 'role', 'admin']
      })
      // await User.findById(payload.id)
      // @ts-ignore
      if (user) {
        // @ts-ignore
        req.user = user
        next()
      } else {
        throw new Error('User not found')
      }
    } catch (error) {
      console.log('DEBUGGINF ERROR')

      console.log(error)
      return false
    }
  } else {
    next()
  }
}

export function isAuthenticated(req: Request, res: Response, next: any) {
  //@ts-ignore
  if (req.isAuthenticated()) {
    console.log('user IS authenticated')
    return next()
  }
  console.log('user is NOT')
  return res.status(400).send({ message: 'Auth required to perform this action.' })
};

export function isAdmin(req: Request, res: Response, next: any) {
  //@ts-ignore
  const { admin }: any = req.user
  if (admin) {
    return next()
  }
  if (!admin) {
    return res.status(404).send({ message: 'Auth required to perform this action.' })
  }
};
