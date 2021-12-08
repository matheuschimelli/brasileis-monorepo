import express from 'express'
//import SearchController from './controllers/Search'
import userRoutes from '@modules/user/user-routes'
import stripeRoutes from '@modules/stripe/stripe-routes'
import lawBlockRoutes from '@modules/law-block/law-block-routes'

const routes = express.Router()

routes.use('/api/v1/user', userRoutes)
//routes.get('/api/v1/search', SearchController.search)/// isAuthenticated
routes.use('/api/v1/checkout', stripeRoutes)
routes.use('/api/v1/law-block', lawBlockRoutes)

export default routes
