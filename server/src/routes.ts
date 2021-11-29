import express from 'express'
import { AuthService } from './modules/auth'
import { StripeService } from './modules/stripe'
import SearchController from './controllers/Search'

import { isAuthenticated } from './middlewares/jwtAuth'
const routes = express.Router()

routes.get('/', (req, res) => { return res.redirect('https://brasileis.com.br') })
routes.post('/api/v1/user/verify', AuthService.verifyToken)
routes.get('/api/v1/user', isAuthenticated, AuthService.getUser)/// isAuthenticated
routes.get('/api/v1/user/logout', isAuthenticated, AuthService.logout)

routes.get('/api/v1/search', SearchController.search)/// isAuthenticated
routes.get('/ping', (req, res) => res.send("pong"))

// Stripe Checkout URLs
// TODO put authentication here
routes.post('/api/v1/checkout/create-session', isAuthenticated, StripeService.createSession)
routes.post('/api/v1/checkout/create-portal-session', isAuthenticated, StripeService.createPortalSession)
routes.post('/api/v1/checkout/webhook', express.raw({ type: "*/*" }), StripeService.webhook)

export default routes
