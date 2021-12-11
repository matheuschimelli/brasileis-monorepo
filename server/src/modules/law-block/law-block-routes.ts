import express from 'express'
import { isAuthenticated } from '@middlewares/jwt-auth'
import {
    index,
    create,
    remove,
    findSingleBlock,
    findById,
    search
} from '@modules/law-block/law-block-controller'

const lawBlockRoutes = express.Router()

lawBlockRoutes.get('/:slug/:id', findById)
lawBlockRoutes.get('/s/:id', findSingleBlock)
lawBlockRoutes.get('/search', search)
lawBlockRoutes.get('/', isAuthenticated, index)
lawBlockRoutes.post('/', isAuthenticated, create)
lawBlockRoutes.delete('/:id', isAuthenticated, remove)
lawBlockRoutes.get('/:id', findById)


export default lawBlockRoutes
