import express from 'express'
import {
    validate,
    indexController,
    showController,
    createController,
    updateController,
    removeController
} from '@modules/crawler-type/crawler-type-controller'
import { checkValidation, isAdmin, isAuthenticated } from '@middlewares/jwt-auth'

const crawlerTypesRoutes = express.Router()


crawlerTypesRoutes.get('/', indexController)
crawlerTypesRoutes.get('/:id', showController)
crawlerTypesRoutes.post('/', validate(), checkValidation, createController)
crawlerTypesRoutes.put('/:id', validate(), checkValidation, updateController)
crawlerTypesRoutes.delete('/:id', removeController)

// isAuthenticated, isAdmin,

export default crawlerTypesRoutes
