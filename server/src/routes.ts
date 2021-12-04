import express from 'express'
import SearchController from './controllers/Search'
import userRoutes from './modules/users/userRoutes'
import stripeRoutes from './modules/stripe/stripeRoutes'

const routes = express.Router()

routes.use('/api/v1/user', userRoutes)
routes.get('/api/v1/search', SearchController.search)/// isAuthenticated
routes.use('/api/v1/checkout', stripeRoutes)

//routes.get('/ping', (req: express.Request, res: express.Response) => res.send("pong"))

export default routes
