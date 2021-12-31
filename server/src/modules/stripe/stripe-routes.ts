import express from 'express'
import { isAuthenticated } from '../../middlewares/jwt-auth'
import { createPortalSession, createSession, webhook } from './stripe-service'

const stripeRoutes = express.Router()
stripeRoutes.post('/create-session', isAuthenticated, createSession)
stripeRoutes.get('/portal', isAuthenticated, createPortalSession)
stripeRoutes.post('/webhook', express.raw({ type: "*/*" }), webhook)

export default stripeRoutes
