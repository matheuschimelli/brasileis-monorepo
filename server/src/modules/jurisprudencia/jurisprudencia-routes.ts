import express from 'express'
import { isAuthenticated } from '@middlewares/jwt-auth'
import {
    index,
    show
} from '@modules/jurisprudencia/jurisprudencia-controller'

const jurisprudenciaRoutes = express.Router()

jurisprudenciaRoutes.get('/', isAuthenticated, index)
jurisprudenciaRoutes.get('/:id', show)



export default jurisprudenciaRoutes
