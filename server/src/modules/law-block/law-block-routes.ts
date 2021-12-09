import express from 'express'
import { isAuthenticated } from '../../middlewares/jwt-auth'
import { index, create, remove, createCode } from '@modules/law-block/law-block-controller'
import prisma from '@lib/prisma'

const lawBlockRoutes = express.Router()
lawBlockRoutes.get('/', isAuthenticated, index)
lawBlockRoutes.post('/create-code', isAuthenticated, createCode)
lawBlockRoutes.post('/', isAuthenticated, create)
lawBlockRoutes.delete('/:id', isAuthenticated, remove)
lawBlockRoutes.get('/teste', async (req: express.Request, res: express.Response) => {
    const laws = await prisma.lawBlock.findUnique({
        where: {
            id: 'ckwzd98oa8078kyu8q0sy473k'
        },
        include: {
            content: {
                include: {
                    content: {
                        include: {
                            content: {
                                include: {
                                    content: {
                                        include: {
                                            content: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    return res.send(laws)
})

lawBlockRoutes.delete('/teste', async (req: express.Request, res: express.Response) => {
    const laws = await prisma.lawBlock.delete({
        where: {
            id: 'ckwzd98oa8078kyu8q0sy473k'
        },

    })
    return res.send(laws)
})
export default lawBlockRoutes
