import prisma from '../../lib/prisma'

export default class LawBlockService {
    static async all(page: number = 1, take: number) {
        const blocks = await prisma.lawBlock.findMany()
    }
}