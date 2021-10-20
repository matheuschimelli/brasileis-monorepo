import axios from 'axios'
import { OAuth2Client } from 'google-auth-library'
import { Request, Response } from 'express'
import dotenv from 'dotenv'
import User, { UserRole } from '../../models/User'
import { generateToken } from '../../utils/jwt'
dotenv.config({ path: '.env' })

interface IUser {
  id: string,
  email: string,
  name: string,
  profile: {
    name: string,
    picture: string
  }
}

declare var process: {
  env: {
    CLIENT_URL: string,
    GOOGLE_SECRET: string
    GOOGLE_ID: string
  }
}

const client = new OAuth2Client(process.env.GOOGLE_ID, process.env.GOOGLE_SECRET)
const tokenExpirationTime = '7d'

export default class AuthService {
  static getUser(req: Request, res: Response) {
    // @ts-ignore
    if (req.isAuthenticated()) {
      //@ts-ignore
      const user = req.user

      // res.cookie('auth_token', generateToken(user, tokenExpirationTime), { expires: new Date(Date.now() + 900000) })
      return res.json({ ...user })
    } else {
      return res.status(400).send({ msg: 'Must be logged' })
    }
  }
  static logout(req: Request, res: Response) {
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

      console.log('PAYLOARD', payload)
      console.log('userid', userid)

      if (payload) {
        if (payload.sub) {
          const existingUser = await User.findOne({ google: payload.sub })

          if (existingUser?.email == 'matheuschimelli7@gmail.com') {
            existingUser.admin = true
            existingUser.role = UserRole.ADMIN
            await existingUser.save()
          }

          if (existingUser) {
            return res.send({ auth_token: generateToken({ id: existingUser.id, name: existingUser.name, email: existingUser.email }, tokenExpirationTime) })
          }

          const existingEmailUser = await User.findOne({ google: payload.email })

          if (existingEmailUser) {
            return res.status(400).json({ message: 'There is already a Google account that belongs to you. Sign in with that account or delete it, then link it with your current account.' })
          } else {
            if (payload.email) {
              const newUser = User.create()
              newUser.email = payload.email
              newUser.google = payload.sub
              newUser.profilePicture = payload.picture || ''
              newUser.name = payload.name || ''

              await User.save(newUser)

              return res.send({ auth_token: generateToken({ id: newUser.id, name: newUser.name, email: newUser.email }, authToken.profile.picture) })
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
/**
 * usuario clica no login
 * é redirecionado para o login no servidor em accounts.chimelli.adv.br
 * o servidor redireciona para CLIENT/auth/verify
 * o client accessa SERVER/auth/user e pega os dados
 * o client seta os dados da sessão
 *
 */

/**
 * Nextjs auth clinet test
 *
 */
// const authTokens = {
//   account: {
//     provider: 'google',
//     type: 'oauth',
//     id: '113793537492653216563',
//     accessToken: 'ya29.a0ARrdaM83CrxygXwzE227OSITg-9JA_-rXtQulC_FKdUY1q2wbijlmzH2-Uvkznwf4cVjfLTobX5oANroAIPSCBvFXhfsbLWcP3EndVaEa7oBZ3ApgG8A9cwKjbY5Z0aMZnqOGBIZBDoNjdmIlJbPIvCrrfoe',
//     accessTokenExpires: null,
//     idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjgxOWQxZTYxNDI5ZGQzZDNjYWVmMTI5YzBhYzJiYWU4YzZkNDZmYmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzMzMTE2MDkzOTI5LWp1cWFtaWpwYnVwN2p1OWV1dGoyYzNpcjltcm1mc3Z0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMzMzMTE2MDkzOTI5LWp1cWFtaWpwYnVwN2p1OWV1dGoyYzNpcjltcm1mc3Z0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEzNzkzNTM3NDkyNjUzMjE2NTYzIiwiZW1haWwiOiJtYXRoZXVzY2hpbWVsbGk3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiMWV3NEdKOEJ4VjgyYzI1NVA3S2pJUSIsImlhdCI6MTYzMDA4MjEwNywiZXhwIjoxNjMwMDg1NzA3fQ.Y_elu8emKphvwLNHJz6rqgdXowiM06Oh7-JhR4MwD-6byciWT9cqwlMcvcA0mROZ44wrSYBp46sh5LxUv1R0-XrRjHKrtOqsJesruHXMv6wuKpvRfUESRWohOD-kH6HKawxWDyBF0qrJEzAV90faB_Wta9Hd1sKvmtQHgs3ujj03mEqxf4xz9cxM8K6hMKKQbcUh9nV085WpuCRfrG8nQLApN6gqnhWCwaTy8er2GOKS0xF7NOZ6RC8aMDMCdls8zLqhn-XAAboZZCKvrJ8z1TXNa3tW4Ud8_BYGvphhmqt5bhXHGbEVioKt__Y83MuTmt2hAtYCjJ72FWn1-AAqnQ',
//     access_token: 'ya29.a0ARrdaM83CrxygXwzE227OSITg-9JA_-rXtQulC_FKdUY1q2wbijlmzH2-Uvkznwf4cVjfLTobX5oANroAIPSCBvFXhfsbLWcP3EndVaEa7oBZ3ApgG8A9cwKjbY5Z0aMZnqOGBIZBDoNjdmIlJbPIvCrrfoe',
//     expires_in: 3599,
//     scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
//     token_type: 'Bearer',
//     id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjgxOWQxZTYxNDI5ZGQzZDNjYWVmMTI5YzBhYzJiYWU4YzZkNDZmYmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzMzMTE2MDkzOTI5LWp1cWFtaWpwYnVwN2p1OWV1dGoyYzNpcjltcm1mc3Z0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMzMzMTE2MDkzOTI5LWp1cWFtaWpwYnVwN2p1OWV1dGoyYzNpcjltcm1mc3Z0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEzNzkzNTM3NDkyNjUzMjE2NTYzIiwiZW1haWwiOiJtYXRoZXVzY2hpbWVsbGk3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiMWV3NEdKOEJ4VjgyYzI1NVA3S2pJUSIsImlhdCI6MTYzMDA4MjEwNywiZXhwIjoxNjMwMDg1NzA3fQ.Y_elu8emKphvwLNHJz6rqgdXowiM06Oh7-JhR4MwD-6byciWT9cqwlMcvcA0mROZ44wrSYBp46sh5LxUv1R0-XrRjHKrtOqsJesruHXMv6wuKpvRfUESRWohOD-kH6HKawxWDyBF0qrJEzAV90faB_Wta9Hd1sKvmtQHgs3ujj03mEqxf4xz9cxM8K6hMKKQbcUh9nV085WpuCRfrG8nQLApN6gqnhWCwaTy8er2GOKS0xF7NOZ6RC8aMDMCdls8zLqhn-XAAboZZCKvrJ8z1TXNa3tW4Ud8_BYGvphhmqt5bhXHGbEVioKt__Y83MuTmt2hAtYCjJ72FWn1-AAqnQ'
//   },
//   profile: {
//     id: '113793537492653216563',
//     email: 'matheuschimelli7@gmail.com',
//     verified_email: true,
//     name: 'Matheus',
//     given_name: 'Matheus',
//     picture: 'https://lh3.googleusercontent.com/a-/AOh14GizpBN_3-3d6RSkauioHkLUXSbl3hBTL2o39bUd71c=s96-c',
//     locale: 'pt-BR'
//   },
//   user: {
//     id: '113793537492653216563',
//     name: 'Matheus',
//     email: 'matheuschimelli7@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a-/AOh14GizpBN_3-3d6RSkauioHkLUXSbl3hBTL2o39bUd71c=s96-c'
//   }
// }
