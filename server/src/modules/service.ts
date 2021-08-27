import { prisma } from '../../lib/src';

export default class BaseService {
  public static async index(skip: number, take: number) {
    const data = await prisma.user.findMany({
      skip,
      take,
    });
    return data;
  }

  public static async count() {
    const data = await prisma.user.count();
    return data;
  }

  public static async findOneBySlug(slug: string, relations?: string[]) {
    let item;
    if (relations) {
      item = await model.findOne({
        where: {
          slug,
        },
        relations,
      });
    } else {
      item = await model.findOne({
        where: {
          slug,
        },
        relations,
      });
    }
    if (item) {
      return item;
    }
    throw new Error('Nada encontrado');
  }

  public static async findOneById(id: string, relations?: string[]) {
    let item;
    if (relations) {
      item = await model.findOne({
        where: {
          id,
        },
        relations,
      });
    } else {
      item = await model.findOne({
        where: {
          id,
        },
        relations,
      });
    }
    if (item) {
      return item;
    }
    throw new Error('Nada encontrado');
  }

  public static async create(data?: any) {
    console.log('CREATE DATA', data);
    const newItem = model.create({
      ...data,
    });
    await newItem.save();
    return newItem;
  }

  public static async update(id?: string, data?: any) {
    const item = await model.findOne(id);

    if (item) {
      await item.save({ ...data });
      return item;
    }
    throw new Error('Nada encontrado para atualizar');
  }

  public static async delete(id: string): Promise<string> {
    const item = await model.findOne(id);

    if (item) {
      await item.remove();
      return 'Removido';
    }
    throw new Error('Nada encontrado para ser removido');
  }
}
