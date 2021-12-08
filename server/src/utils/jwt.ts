import jwt from 'jsonwebtoken'

declare var process: {
  env: {
    TOKEN_SECRET: string,

  }
}
export function checkAuthorization(token: string) {
  return new Promise((resolve, reject) => {
    const authUser = jwt.verify(token, process.env.TOKEN_SECRET)

    if (authUser) {
      resolve(authUser)
    } else {
      reject(new Error('Could not authenticate user'))
    }
  })
}

export function generateToken(user: any, expiresIn: string) {
  const { id, name, email } = user

  return jwt.sign({ id, name, email }, process.env.TOKEN_SECRET, { expiresIn })
}