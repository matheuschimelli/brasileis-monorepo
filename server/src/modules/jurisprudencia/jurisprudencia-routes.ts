import express from 'express'
import { isAuthenticated } from '@middlewares/jwt-auth'
import {
    index,
    show,
    getFeed
} from '@modules/jurisprudencia/jurisprudencia-controller'

const jurisprudenciaRoutes = express.Router()

jurisprudenciaRoutes.get('/', isAuthenticated, index)
jurisprudenciaRoutes.get('/feed', getFeed)

jurisprudenciaRoutes.get('/:id', show)




export default jurisprudenciaRoutes
