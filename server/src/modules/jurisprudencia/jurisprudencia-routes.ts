import express from 'express'
import {
    index,
    show,
    getFeed,
    getTribunais
} from '@modules/jurisprudencia/jurisprudencia-controller'

const jurisprudenciaRoutes = express.Router()

jurisprudenciaRoutes.get('/tribunais', getTribunais)

jurisprudenciaRoutes.get('/feed', getFeed)
jurisprudenciaRoutes.get('/:tribunal/:id', show)
jurisprudenciaRoutes.get('/:tribunal', index)
jurisprudenciaRoutes.get('/:id', show)

export default jurisprudenciaRoutes
