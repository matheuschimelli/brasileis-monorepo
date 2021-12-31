import express from 'express'
import { search } from '@modules/search/search-controller'

const searchRoutes = express.Router()

searchRoutes.get('/', search)

export default searchRoutes
