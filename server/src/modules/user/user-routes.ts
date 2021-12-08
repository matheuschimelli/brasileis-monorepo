import express from 'express'
import { isAuthenticated } from '@middlewares/jwt-auth'
import { getUser, verifyToken, logout, subscriptions } from './user-service'

const userRoutes = express.Router()

userRoutes.get('/', isAuthenticated, getUser)
userRoutes.post('/verify', verifyToken)
userRoutes.get('/logout', isAuthenticated, logout)
userRoutes.get('/subscriptions', subscriptions)

export default userRoutes
