import express from 'express'
import {
    validate,
    indexController,
    showController,
    createController,
    updateController,
    removeController
} from '@modules/crawler/crawler-controller'
import { checkValidation, isAdmin, isAuthenticated } from '@middlewares/jwt-auth'

const crawlerRoutes = express.Router()


crawlerRoutes.get('/', indexController)
crawlerRoutes.get('/:id', showController)
crawlerRoutes.post('/', validate(), checkValidation, createController)
crawlerRoutes.put('/:id', validate(), checkValidation, updateController)
crawlerRoutes.delete('/:id', removeController)

// isAuthenticated, isAdmin,

export default crawlerRoutes
