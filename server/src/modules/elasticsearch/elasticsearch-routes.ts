import express from 'express'
import { search } from '@modules/elasticsearch/elasticsearch-controller'
const elasticsearchRoutes = express.Router()

elasticsearchRoutes.get('/', search)


export default elasticsearchRoutes
