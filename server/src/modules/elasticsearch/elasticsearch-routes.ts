import express from 'express'
import { search } from '@modules/elasticsearch/elasticsearch-controller'
const elasticsearchRoutes = express.Router()

elasticsearchRoutes.post('/', search)


export default elasticsearchRoutes
