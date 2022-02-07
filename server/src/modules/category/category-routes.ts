import express from 'express'
import * as categoryController from '@modules/category/category-controller'
import { checkValidation, isAdmin, isAuthenticated } from '@middlewares/jwt-auth'

const topicRoutes = express.Router()

topicRoutes.get('/', categoryController.index)
topicRoutes.get('/:id', isAuthenticated, isAdmin, categoryController.show)
topicRoutes.post('/', isAuthenticated, isAdmin, categoryController.validate(), checkValidation, categoryController.create)
topicRoutes.put('/:id', isAuthenticated, isAdmin, categoryController.validate(), checkValidation, categoryController.update)
topicRoutes.delete('/:id', isAuthenticated, isAdmin, categoryController.remove)

export default topicRoutes
