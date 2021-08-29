import express from 'express'
import { AuthService } from './modules/auth'

const routes = express.Router()

routes.get('/', (req, res) => { return res.redirect('https://brasileis.com.br') })
routes.post('/api/v1/user/verify', AuthService.verifyToken)
routes.get('/api/v1/user', AuthService.getUser)/// isAuthenticated

export default routes
