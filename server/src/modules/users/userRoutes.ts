import express from 'express'
import { isAuthenticated } from '../../middlewares/jwtAuth'
import UserService from './usersService'

const userRoutes = express.Router()

userRoutes.get('/', isAuthenticated, UserService.getUser)
userRoutes.post('/verify', UserService.verifyToken)
userRoutes.get('/logout', isAuthenticated, UserService.logout)
userRoutes.get('/subscriptions', UserService.subscriptions)




export default userRoutes
