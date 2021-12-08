import express from 'express'
import { isAuthenticated } from '../../middlewares/jwt-auth'
import { index, create, remove, createCode } from '@modules/law-block/law-block-controller'

const lawBlockRoutes = express.Router()
lawBlockRoutes.get('/', isAuthenticated, index)
lawBlockRoutes.post('/create-code', isAuthenticated, createCode)
lawBlockRoutes.post('/', isAuthenticated, create)
lawBlockRoutes.delete('/:id', isAuthenticated, remove)

export default lawBlockRoutes
