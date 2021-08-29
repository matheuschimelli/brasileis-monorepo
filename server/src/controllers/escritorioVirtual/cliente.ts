import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

// import User from '../../models/User'
import Cliente from '../../models/EscritorioVirtual/Cliente'

export default class escritorioController {
  async index (req:Request, res: Response) {
    const { user } = req

    const clienteRepo = getRepository(Cliente)

    try {
      const clientes = await clienteRepo.find({
        where: {
          // @ts-ignore
          escritorio: user.escritorioAdministador
        },
        order: {
          nome: 'ASC'
        }
      })
      if (clientes) {
        return res.json({ clientes })
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Não foi possível retornar os dados. Tente mais tarde' })
    }
  }

  async show (req:Request, res: Response) {
    const { user } = req
    const { id: clienteId } = req.params

    console.log(user)
    const clienteRepo = getRepository(Cliente)

    try {
      const cliente = await clienteRepo.findOne({
        where: {
          // @ts-ignore
          escritorio: user.escritorioAdministador,
          id: clienteId
        }
      })
      if (cliente) {
        return res.json({ cliente })
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Não foi possível retornar os dados. Tente mais tarde' })
    }
  }

  async create (req:Request, res: Response) {
    const { user: authenticatedUser } = req
    console.log('request user')
    console.log(req.user)
    const {
      nome,
      cpf,
      rg,
      tituloEleitor,
      carteiraMotorista,
      endereco,
      endereco2,
      telefone,
      telefone2,
      email,
      email2,
      estadoCivil

    } = req.body

    const clienteRepo = getRepository(Cliente)

    try {
      // @ts-ignore
      if (authenticatedUser && authenticatedUser.escritorioAdministador) {
        const newCliente = clienteRepo.create()
        // @ts-ignore
        newCliente.escritorio = authenticatedUser.escritorioAdministador
        newCliente.nome = nome
        newCliente.cpf = cpf
        newCliente.rg = rg
        newCliente.tituloEleitor = tituloEleitor
        newCliente.carteiraMotorista = carteiraMotorista
        newCliente.endereco = endereco
        newCliente.endereco2 = endereco2
        newCliente.telefone = telefone
        newCliente.telefone2 = telefone2
        newCliente.email = email
        newCliente.email2 = email2
        newCliente.estadoCivil = estadoCivil

        await clienteRepo.save(newCliente)
        return res.json({ cliente: newCliente, message: 'Cliente criado' })
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Não foi possível remover o cliente. Tente mais tarde' })
    }
  }

  async update (req:Request, res: Response) {
    const { user: authenticatedUser } = req
    const { id: clienteId } = req.params

    const {
      nome,
      cpf,
      rg,
      tituloEleitor,
      carteiraMotorista,
      endereco,
      endereco2,
      telefone,
      telefone2,
      email,
      email2,
      estadoCivil

    } = req.body

    const clienteRepo = getRepository(Cliente)

    try {
      // @ts-ignore
      if (authenticatedUser && authenticatedUser.escritorioAdministador) {
        const updateCliente = await clienteRepo.findOne({
          where: {
            id: clienteId,
            // @ts-ignore
            escritorio: authenticatedUser.escritorioAdministador
          }
        })
        if (updateCliente) {
        // @ts-ignore
          updateCliente.nome = nome
          updateCliente.cpf = cpf
          updateCliente.rg = rg
          updateCliente.tituloEleitor = tituloEleitor
          updateCliente.carteiraMotorista = carteiraMotorista
          updateCliente.endereco = endereco
          updateCliente.endereco2 = endereco2
          updateCliente.telefone = telefone
          updateCliente.telefone2 = telefone2
          updateCliente.email = email
          updateCliente.email2 = email2
          updateCliente.estadoCivil = estadoCivil

          await clienteRepo.save(updateCliente)
          return res.json({ cliente: updateCliente, message: 'Cliente criado' })
        }
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Não foi possível remover o cliente. Tente mais tarde' })
    }
  }

  async delete (req:Request, res: Response) {
    const { user: authenticatedUser } = req
    const { id: clienteId } = req.params

    const clienteRepo = getRepository(Cliente)

    try {
      // @ts-ignore
      if (authenticatedUser && authenticatedUser.escritorioAdministador) {
        const cliente = await clienteRepo.findOne({
          where: {
            id: clienteId,
            // @ts-ignore
            escritorio: authenticatedUser.escritorioAdministador
          }
        })
        if (cliente) {
          await clienteRepo.remove(cliente)
          return res.json({ message: 'Cliente deletado' })
        }
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Não foi possível remover o cliente. Tente mais tarde' })
    }
  }
}
