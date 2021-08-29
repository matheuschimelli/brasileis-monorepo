import { BaseEntity } from 'typeorm'

function createServiceBase<T extends BaseEntity> (model: any) {
  abstract class BaseService {
    public static async index (page: number): Promise<T[]> {
      const allItems = await model.find({
        order: {
          updatedAt: 'DESC'
        },
        take: 10,
        skip: (page - 1) * 10

      })
      if (allItems.length !== 0) {
        return allItems
      }
      throw new Error('Nada encontrado')
    }

    public static async fullIndex (orderBy: object, selectFields:string[]): Promise<T[]> {
      const allItems = await model.find({
        order: {
          ...orderBy
        },
        select: selectFields
      })
      if (allItems.length !== 0) {
        return allItems
      }
      throw new Error('Nada encontrado')
    }

    public static async count () {
      const allItemsCount = await model.count()

      if (allItemsCount) {
        return allItemsCount
      }
      throw new Error('0 páginas')
    }

    public static async findOneBySlug (slug:string, relations?: string[]) {
      let item
      if (relations) {
        item = await model.findOne({
          where: {
            slug: slug
          },
          relations: relations
        })
      } else {
        item = await model.findOne({
          where: {
            slug: slug
          },
          relations: relations
        })
      }
      if (item) {
        return item
      }
      throw new Error('Nada encontrado')
    }

    public static async findOneById (id:string, relations?: string[]) {
      let item
      if (relations) {
        item = await model.findOne({
          where: {
            id: id
          },
          relations: relations
        })
      } else {
        item = await model.findOne({
          where: {
            id: id
          },
          relations: relations
        })
      }
      if (item) {
        return item
      }
      throw new Error('Nada encontrado')
    }

    public static async create (data?: any) {
      console.log('CREATE DATA', data)
      const newItem = model.create({
        ...data
      })
      await newItem.save()
      return newItem
    }

    public static async update (id?:string, data?:any) {
      const item = await model.findOne(id)

      if (item) {
        await item.save({ ...data })
        return item
      }
      throw new Error('Nada encontrado para atualizar')
    }

    public static async delete (id:string): Promise<string> {
      const item = await model.findOne(id)

      if (item) {
        await item.remove()
        return 'Removido'
      } else {
        throw new Error('Nada encontrado para ser removido')
      }
    }
  }

  return BaseService
}

export default createServiceBase
