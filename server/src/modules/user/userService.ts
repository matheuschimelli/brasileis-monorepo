/* eslint-disable no-unused-vars */
import { prisma } from '../../../lib/src/index';

export default class Service {
  static async index(skip: number, take: number) {
    const data = await prisma.user.findMany({
      skip,
      take,
    });
    return data;
  }

  static async showById(id: string) {
    const data = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return data;
  }

  static async create(createData: any) {
    // to be override
  }

  static async update(createData: any) {
    // to be override
  }

  static async deleteById(id: string) {
    const data = await prisma.user.delete({
      where: {
        id,
      },
    });
    return data;
  }
}
