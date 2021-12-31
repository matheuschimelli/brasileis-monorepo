import express from 'express'
import { isAuthenticated } from '@middlewares/jwt-auth'
import {
    index,
    remove,
    findAllById,
    search,
    findSingleBlock
} from '@modules/law-block/law-block-controller'

const lawBlockRoutes = express.Router()

lawBlockRoutes.get('/:slug/:id', findAllById)
lawBlockRoutes.get('/s/:id', findSingleBlock)
lawBlockRoutes.get('/search', search)
lawBlockRoutes.get('/', isAuthenticated, index)
lawBlockRoutes.delete('/:id', isAuthenticated, remove)
lawBlockRoutes.get('/:id', findSingleBlock)


export default lawBlockRoutes
