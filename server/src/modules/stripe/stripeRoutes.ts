import express from 'express'
import { isAuthenticated } from '../../middlewares/jwtAuth'
import StripeService from './stripeService'

const stripeRoutes = express.Router()
stripeRoutes.post('/create-session', isAuthenticated, StripeService.createSession)
stripeRoutes.get('/portal', isAuthenticated, StripeService.createPortalSession)
stripeRoutes.post('/webhook', express.raw({ type: "*/*" }), StripeService.webhook)

export default stripeRoutes
