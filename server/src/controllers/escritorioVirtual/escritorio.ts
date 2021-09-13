import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from '../../models/User'
import Escritorio from '../../models/EscritorioVirtual/Escritorio'

export default class escritorioController {
  async index (req:Request, res: Response) {
    // @ts-ignore
    const { user } = req
    const userRepo = getRepository(User)

    try {
      const authUser = await userRepo.findOne({
        where: {
          // @ts-ignore
          id: user.id
        },
        relations: ['escritorioAdministador']

      })

      if (authUser?.escritorioAdministador) {
        console.log('escritorios', authUser)

        return res.send({ escritorio: authUser.escritorioAdministador })
      } else {
        return res.send({ escritorio: null, message: 'Nenhum escritório encontrado' })
      }
    } catch (error) {
      console.log(error)
      return res.status(404).json({ message: 'Nenhum escritorio encontrado.' })
    }
  }

  async create (req:Request, res: Response) {
    // @ts-ignore
    const { user } = req

    const {
      nome,
      descricao
    } = req.body

    console.log(user)

    const escritorioRepo = getRepository(Escritorio)
    const userRepo = getRepository(User)

    try {
      const authUser = await userRepo.findOne({
        where: {
          // @ts-ignore
          id: user.id
        },
        relations: ['escritorioAdministador']
      })
      if (authUser) {
        console.log(authUser)
        if (authUser.escritorioAdministador) {
          return res.status(400).json({ message: 'Parece que você já possui um escritório. Somente é possível criar um escritório por conta.' })
        } else {
          const novoEscritorio = escritorioRepo.create()
          novoEscritorio.nome = nome
          novoEscritorio.descricao = descricao
          novoEscritorio.ativo = true
          novoEscritorio.socios = [authUser]
          novoEscritorio.administrador = authUser

          await escritorioRepo.save(novoEscritorio)

          return res.json({ message: 'Escritório criado', escritorio: novoEscritorio })
        }
      }
      return res.status(400).json({ message: 'Usuário não encontrado' })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Não foi possível criar o escritório. Tente mais tarde.' })
    }
  }
}
