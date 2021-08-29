import { getRepository } from 'typeorm'
import PaginaDiarioOficial from '../../models/DiarioOficial/PaginaDiarioOficial'
import DiarioOficial from '../../models/Diario'
import SearchService from '../Search'

interface DiarioOficialPagina {
  url: string
  dataPublicacao: Date
  estado: string
  titulo: string
  htmlContent: string
  textContent: string
  tipo: string
  parent: DiarioOficial
}
interface FindParentDiarioOficial {
  parent: DiarioOficial,
  id?: string | number
}
interface UpdateDiarioOficial {
  url: string
  dataPublicacao: Date
  estado: string
  titulo: string
  htmlContent: string
  textContent: string
  tipo: string
  parent: DiarioOficial
  id: string | number
}

const searchService = new SearchService()
export default class PaginaDiarioOficialService {
  async index(data: FindParentDiarioOficial) {
    const paginaDORepo = getRepository(PaginaDiarioOficial)
    try {
      const pages = paginaDORepo.find({
        where: {
          parent: data.parent
        },
        select: ['id', 'url', 'titulo', 'slug']
      })
      if (pages) {
        return pages
      } else {
        throw new Error('Não foram encontradas páginas para o diário oficial procurado')
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async show(data: FindParentDiarioOficial) {
    const paginaDORepo = getRepository(PaginaDiarioOficial)
    try {
      const pages = paginaDORepo.findOne({
        where: {
          parent: data.parent,
          id: data.id
        }
      })
      if (pages) {
        return pages
      } else {
        throw new Error('Página não encontrada')
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async create(data: DiarioOficialPagina) {
    const paginaDORepo = getRepository(PaginaDiarioOficial)
    try {
      const newPagina = paginaDORepo.create()
      newPagina.url = data.url
      newPagina.titulo = data.titulo
      newPagina.htmlContent = data.htmlContent
      newPagina.textContent = data.textContent
      newPagina.tipo = data.tipo
      newPagina.dataPublicacao = data.dataPublicacao
      newPagina.parent = data.parent

      await paginaDORepo.save(newPagina)
      /*
      await searchService.upsertDoc({
        document: {
          url: newPagina.url

        }
      })
      */
    } catch (error) {
      throw new Error(error)
    }
  }

  async update(data: UpdateDiarioOficial) {
    const paginaDORepo = getRepository(PaginaDiarioOficial)
    try {
      const diarioOficial = await paginaDORepo.findOne({
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
        diarioOficial.parent = data.parent

        await paginaDORepo.save(diarioOficial)
      } else {
        throw new Error('Página não encontrada para atualização')
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async delete(data: UpdateDiarioOficial) {
    const paginaDORepo = getRepository(PaginaDiarioOficial)
    try {
      const diarioOficial = await paginaDORepo.findOne({
        where: {
          parent: data.parent,
          id: data.id
        }
      })
      if (diarioOficial) {
        await paginaDORepo.remove(diarioOficial)
      } else {
        throw new Error('Página não encontrada para atualização')
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
