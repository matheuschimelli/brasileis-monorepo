import express from 'express'
import { isAuthenticated } from '@middlewares/jwt-auth'
import {
    index,
    remove,
    getAllById,
    search,
    getSingleBlock,
    getCodeNumbers
} from '@modules/law-block/law-block-controller'

const lawBlockRoutes = express.Router()

lawBlockRoutes.get('/', isAuthenticated, index)
lawBlockRoutes.get('/s/:id', getSingleBlock)
lawBlockRoutes.get('/search', search)
lawBlockRoutes.get('/code-numbers/:id', getCodeNumbers)

lawBlockRoutes.get('/:slug/:id', getAllById)
lawBlockRoutes.delete('/:id', isAuthenticated, remove)
lawBlockRoutes.get('/:id', getSingleBlock)



export default lawBlockRoutes
