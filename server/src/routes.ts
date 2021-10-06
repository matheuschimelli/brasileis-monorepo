import express from 'express'
import { AuthService } from './modules/auth'
import SearchController from './controllers/Search'

const routes = express.Router()

routes.get('/', (req, res) => { return res.redirect('https://brasileis.com.br') })
routes.post('/api/v1/user/verify', AuthService.verifyToken)
routes.get('/api/v1/user', AuthService.getUser)/// isAuthenticated
routes.get('/api/v1/user/logout', AuthService.logout)

routes.get('/api/v1/search', SearchController.search)/// isAuthenticated
app.get('/ping', (req, res) => res.send("pong"))

export default routes
