import express from 'express'
import * as topicController from '@modules/topic/topic-controller'
import { checkValidation, isAdmin, isAuthenticated } from '@middlewares/jwt-auth'

const topicRoutes = express.Router()

topicRoutes.get('/', topicController.index)
topicRoutes.get('/:id', isAuthenticated, isAdmin, topicController.show)
topicRoutes.post('/', isAuthenticated, isAdmin, topicController.validate(), checkValidation, topicController.create)
topicRoutes.put('/:id', isAuthenticated, isAdmin, topicController.validate(), checkValidation, topicController.update)
topicRoutes.delete('/:id', isAuthenticated, isAdmin, topicController.remove)

export default topicRoutes
