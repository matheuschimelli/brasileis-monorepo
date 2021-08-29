import { getRepository } from 'typeorm'
import DiarioOficial from '../../models/Diario'

interface DiarioOficialPagina {
    url:string
    dataPublicacao:Date
    estado:string
    titulo:string
    htmlContent?:string
    textContent?:string
    tipo?:string
    parent?:DiarioOficial
}
interface FindParentDiarioOficial {
    parent:DiarioOficial,
    id?: string|number
}
interface UpdateDiarioOficial {
    url:string
    dataPublicacao:Date
    estado:string
    titulo:string
    htmlContent:string
    textContent:string
    tipo:string
    parent:DiarioOficial
    id: string|number
}

export default class DiarioOficialService {
  async index (data: FindParentDiarioOficial) {
    const diarioOficialRepo = getRepository(DiarioOficial)
    try {
      const diarioOficial = diarioOficialRepo.find({
        where: {
          parent: data.parent
        },
        select: ['id', 'url', 'titulo', 'slug']
      })
      if (diarioOficial) {
        return diarioOficial
      } else {
        throw new Error('Não foram encontradas páginas para o diário oficial procurado')
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async show (data: FindParentDiarioOficial) {
    const diarioOficialRepo = getRepository(DiarioOficial)
    try {
      const diarioOficial = diarioOficialRepo.findOne({
        where: {
          parent: data.parent,
          id: data.id
        }
      })
      if (diarioOficial) {
        return diarioOficial
      } else {
        throw new Error('Página não encontrada')
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async create (data: DiarioOficialPagina) {
    const diarioOficialRepo = getRepository(DiarioOficial)
    try {
      const diarioOficial = diarioOficialRepo.create()
      diarioOficial.url = data.url
      diarioOficial.titulo = data.titulo
      diarioOficial.tipo = data.tipo!
      diarioOficial.dataPublicacao = data.dataPublicacao

      await diarioOficialRepo.save(diarioOficial)
      /*
      await searchService.upsertDoc({
        document: {
          url: newPagina.url

        }
      })
      */
      return diarioOficial
    } catch (error) {
      throw new Error(error)
    }
  }

  async update (data: UpdateDiarioOficial) {
    const diarioOficialRepo = getRepository(DiarioOficial)
    try {
      const diarioOficial = await diarioOficialRepo.findOne({
        where: {
          parent: data.parent,
          id: data.id
        }
      })
      if (diarioOficial) {
        diarioOficial.url = data.url
        diarioOficial.titulo = data.titulo
        diarioOficial.htmlContent = data.htmlContent
        diarioOficial.textContent = data.textContent
        diarioOficial.tipo = data.tipo
        diarioOficial.dataPublicacao = data.dataPublicacao

        await diarioOficialRepo.save(diarioOficial)
      } else {
        throw new Error('Página não encontrada para atualização')
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async delete (data: UpdateDiarioOficial) {
    const diarioOficialRepo = getRepository(DiarioOficial)
    try {
      const diarioOficial = await diarioOficialRepo.findOne({
        where: {
          parent: data.parent,
          id: data.id
        }
      })
      if (diarioOficial) {
        await diarioOficialRepo.remove(diarioOficial)
      } else {
        throw new Error('Página não encontrada para atualização')
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
