import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Queue from '../../jobs/Queue'
import Peticao from '../../models/EscritorioVirtual/Peticao'
import User from '../../models/User'

export default class PeticaoController {
  /**
     * Show peticoes of current authenticated user. Only show peticoes
     * created by authenticaded user
     * @param req
     * @param res
     */
  async escritorioIndex (req: Request, res: Response) {
    const { user } = req

    const userRepo = getRepository(User)
    const peticaoRepo = getRepository(Peticao)
    try {
      // @ts-ignore
      const authUser = await userRepo.findOne(user.id, { relations: ['escritorioAdministador'] })

      if (authUser && authUser.escritorioAdministador) {
        const peticoes = await peticaoRepo.createQueryBuilder('peticao')
          .leftJoinAndSelect('peticao.owner', 'owner')
          .leftJoinAndSelect('peticao.escritorio', 'escritorio')
          .leftJoinAndSelect('peticao.allowAccessTo', 'allowAccessTo')
          .where('owner.id = :ownerId', { ownerId: authUser.id })
          .andWhere('escritorio.id = :escritorioId', { escritorioId: authUser.escritorioAdministador.id })
          .andWhere('allowAccessTo.id IN (:...userAllowedAccess)', { userAllowedAccess: [authUser.id] })
          .select(['peticao.id', 'peticao.slug', 'peticao.titulo', 'peticao.createdAt', 'peticao.updatedAt'])
          .orderBy('peticao.updatedAt', 'DESC')
          .getMany()

        if (peticoes) {
          return res.json({ peticoes })
        } else {
          return res.json({ peticoes: null, message: 'Nenhuma petição encontrada.' })
        }
      } return res.json({ peticoes: null, message: 'Nenhuma petição encontrada.' })
    } catch (error) {
      console.log(error)
      return res.status(404).json({ message: 'Nenhuma petição encontrada' })
    }
  }

  async show (req:Request, res:Response) {
    const { user } = req
    const { id: peticaoId } = req.params

    const userRepo = getRepository(User)
    const peticaoRepo = getRepository(Peticao)
    try {
      // @ts-ignore
      const authUser = await userRepo.findOne(user.id, { relations: ['escritorioAdministador'] })

      if (authUser && authUser.escritorioAdministador) {
        const peticao = await peticaoRepo.createQueryBuilder('peticao')
          .leftJoinAndSelect('peticao.owner', 'owner')
          .leftJoinAndSelect('peticao.escritorio', 'escritorio')
          .leftJoinAndSelect('peticao.allowAccessTo', 'allowAccessTo')
          .where('owner.id = :ownerId', { ownerId: authUser.id })
          .andWhere('escritorio.id = :escritorioId', { escritorioId: authUser.escritorioAdministador.id })
          .andWhere('allowAccessTo.id IN (:...userAllowedAccess)', { userAllowedAccess: [authUser.id] })
          .andWhere('peticao.id = :id', { id: peticaoId })
          .select([
            'peticao.id',
            'peticao.slug',
            'peticao.titulo',
            'peticao.createdAt',
            'peticao.updatedAt',
            'peticao.content',
            'peticao.private'
          ])
          .getOne()

        if (peticao) {
          return res.json({ peticao })
        } else {
          return res.json({ peticao: null, message: 'Nenhuma petição encontrada.' })
        }
      } return res.json({ peticao: null, message: 'Nenhuma petição encontrada.' })
    } catch (error) {
      console.log(error)
      return res.status(404).json({ message: 'Nenhuma petição encontrada' })
    }
  }

  async createBlank (req: Request, res: Response) {
    const { user } = req

    try {
      const peticaoRepo = getRepository(Peticao)
      const userRepo = getRepository(User)

      const authenticatedUser = await userRepo.findOne({
        where: {
          // @ts-ignore
          id: user.id
        },
        relations: ['escritorioAdministador']
      })

      if (authenticatedUser) {
        const newPeticao = peticaoRepo.create()
        newPeticao.titulo = 'Petição sem título'
        newPeticao.owner = authenticatedUser
        newPeticao.allowAccessTo = [authenticatedUser]
        newPeticao.escritorio = authenticatedUser.escritorioAdministador
        newPeticao.content = ' '

        await peticaoRepo.save(newPeticao)
        return res.send({ message: 'Petição criada. Redirecionando', peticao: newPeticao.id })
      } else {
        return res.status(400).send({ message: 'Usuário não encontrado. Faça login para criar uma nova petição' })
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Não foi possível criar uma nova petição agora. Tente mais tarde' })
    }
  }

  async update (req:Request, res:Response) {
    const { user } = req
    const { id: peticaoId } = req.params
    const {
      titulo,
      content
    } = req.body

    // const { private: peticaoPrivate } = req.body

    const userRepo = getRepository(User)
    const peticaoRepo = getRepository(Peticao)

    try {
      // @ts-ignore
      const authUser = await userRepo.findOne(user.id, { relations: ['escritorioAdministador'] })

      if (authUser && authUser.escritorioAdministador) {
        const existPeticao = await peticaoRepo.createQueryBuilder('peticao')
          .leftJoinAndSelect('peticao.owner', 'owner')
          .leftJoinAndSelect('peticao.escritorio', 'escritorio')
          .leftJoinAndSelect('peticao.allowAccessTo', 'allowAccessTo')
          .where('owner.id = :ownerId', { ownerId: authUser.id })
          .andWhere('escritorio.id = :escritorioId', { escritorioId: authUser.escritorioAdministador.id })
          .andWhere('allowAccessTo.id IN (:...userAllowedAccess)', { userAllowedAccess: [authUser.id] })
          .andWhere('peticao.id = :id', { id: peticaoId })
          .select([
            'peticao.id',
            'peticao.titulo'
          ])
          .getOne()

        if (existPeticao) {
          existPeticao.titulo = titulo || existPeticao.titulo
          existPeticao.content = content || existPeticao.content
          // existPeticao.private = peticaoPrivate
          await peticaoRepo.save(existPeticao)

          return res.json({ peticao: existPeticao })
        } else {
          return res.json({ peticao: null, message: 'Nenhuma petição encontrada.' })
        }
      } return res.json({ peticao: null, message: 'Nenhuma petição encontrada.' })
    } catch (error) {
      console.log(error)
      return res.status(404).json({ message: 'Nenhuma petição encontrada' })
    }
  }

  async delete (req:Request, res:Response) {
    const { user } = req
    const { id: peticaoId } = req.params

    const userRepo = getRepository(User)
    const peticaoRepo = getRepository(Peticao)
    try {
      // @ts-ignore
      const authUser = await userRepo.findOne(user.id, { relations: ['escritorioAdministador'] })

      if (authUser && authUser.escritorioAdministador) {
        const peticao = await peticaoRepo.createQueryBuilder('peticao')
          .leftJoinAndSelect('peticao.owner', 'owner')
          .leftJoinAndSelect('peticao.escritorio', 'escritorio')
          .leftJoinAndSelect('peticao.allowAccessTo', 'allowAccessTo')
          .where('owner.id = :ownerId', { ownerId: authUser.id })
          .andWhere('escritorio.id = :escritorioId', { escritorioId: authUser.escritorioAdministador.id })
          .andWhere('allowAccessTo.id IN (:...userAllowedAccess)', { userAllowedAccess: [authUser.id] })
          .andWhere('peticao.id = :id', { id: peticaoId })
          .select([
            'peticao.id'

          ])
          .getOne()

        if (peticao) {
          await peticaoRepo.createQueryBuilder('Crawler')
            .delete()
            .from(Peticao)
            .where('id = :id', { id: peticaoId })
            .execute()
          return res.json({ message: 'Petição removida' })
        } else {
          return res.json({ peticao: null, message: 'Nenhuma petição encontrada.' })
        }
      } return res.json({ peticao: null, message: 'Nenhuma petição encontrada.' })
    } catch (error) {
      console.log(error)
      return res.status(404).json({ message: 'Nenhuma petição encontrada' })
    }
  }

  async generateDocx (req:Request, res:Response) {
    const { user } = req
    const { id: peticaoId } = req.params

    const userRepo = getRepository(User)
    const peticaoRepo = getRepository(Peticao)
    try {
      // @ts-ignore
      const authUser = await userRepo.findOne(user.id, { relations: ['escritorioAdministador'] })

      if (authUser && authUser.escritorioAdministador) {
        const peticao = await peticaoRepo.createQueryBuilder('peticao')
          .leftJoinAndSelect('peticao.owner', 'owner')
          .leftJoinAndSelect('peticao.escritorio', 'escritorio')
          .leftJoinAndSelect('peticao.allowAccessTo', 'allowAccessTo')
          .where('owner.id = :ownerId', { ownerId: authUser.id })
          .andWhere('escritorio.id = :escritorioId', { escritorioId: authUser.escritorioAdministador.id })
          .andWhere('allowAccessTo.id IN (:...userAllowedAccess)', { userAllowedAccess: [authUser.id] })
          .andWhere('peticao.id = :id', { id: peticaoId })
          .select([
            'peticao.titulo',
            'peticao.createdAt',
            'peticao.updatedAt',
            'peticao.content'
          ])
          .getOne()

        if (peticao) {
          await Queue.add('PeticaoToDocx', {
            title: peticao?.titulo,
            html: peticao.content,
            owner: authUser.name,
            createdAt: peticao.createdAt,
            modifiedAt: peticao.updatedAt
          })
          return res.json({ done: true, message: 'Gerando Pdf' })
        } else {
          return res.json({ peticao: null, message: 'Nenhuma petição encontrada.' })
        }
      } return res.json({ peticao: null, message: 'Nenhuma petição encontrada.' })
    } catch (error) {
      console.log(error)
      return res.status(404).json({ message: 'Nenhuma petição encontrada' })
    }
  }
}
