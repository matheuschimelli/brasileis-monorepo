import express from 'express'
import { isAuthenticated } from '@middlewares/jwt-auth'
import {
    index,
    show,
    getFeed
} from '@modules/jurisprudencia/jurisprudencia-controller'
import prisma from '@lib/prisma'

const jurisprudenciaRoutes = express.Router()

jurisprudenciaRoutes.get('/del', async (req: express.Request, res: express.Response) => {
    try {
        await prisma.jurisprudencia.deleteMany({
            where: {
                tipo: 'JUSTICA_ESTADUAL'
            }
        })
        return res.send("ok")
    } catch (error) {
        console.log(error)
        return res.send(error)
    }
})


jurisprudenciaRoutes.get('/', isAuthenticated, index)
jurisprudenciaRoutes.get('/feed', getFeed)

jurisprudenciaRoutes.get('/:id', show)
jurisprudenciaRoutes.get('/:id', show)




export default jurisprudenciaRoutes
