import express from 'express'
import {
    index,
    show,
    getFeed,
    getTribunais
} from '@modules/jurisprudencia/jurisprudencia-controller'
import { reIndexPostgresDataToElasticSearch } from '@modules/jobs/jobs'

const jurisprudenciaRoutes = express.Router()

jurisprudenciaRoutes.get('/reindex', async (req: express.Request, res: express.Response) => {
    await reIndexPostgresDataToElasticSearch.add({})
    return res.send("Job added")
})

jurisprudenciaRoutes.get('/tribunais', getTribunais)

jurisprudenciaRoutes.get('/feed', getFeed)
jurisprudenciaRoutes.get('/:tribunal/:id', show)
jurisprudenciaRoutes.get('/:tribunal', index)
jurisprudenciaRoutes.get('/:id', show)

export default jurisprudenciaRoutes
