import express from 'express'
import { isAuthenticated, isAdmin } from '@middlewares/jwt-auth'
import {
    getUser,
    verifyToken,
    logout,
    subscriptions,
    checkAdmin,
    getUserFeed,
    followTopics,
    followingTopics
} from './user-service'

const userRoutes = express.Router()

userRoutes.get('/', isAuthenticated, getUser)
userRoutes.post('/verify', verifyToken)
userRoutes.get('/logout', isAuthenticated, logout)
userRoutes.get('/subscriptions', subscriptions)
userRoutes.get('/check-admin', isAuthenticated, isAdmin, checkAdmin)
userRoutes.get('/feed', isAuthenticated, getUserFeed)


userRoutes.get('/following-topics', isAuthenticated, followingTopics)
userRoutes.put('/follow-topics', isAuthenticated, followTopics)



export default userRoutes
