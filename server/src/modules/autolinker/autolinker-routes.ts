import express from 'express'
import * as autolinkerController from '@modules/autolinker/autolinker-controller'

const autolinkerRoutes = express.Router()

autolinkerRoutes.post('/', autolinkerController.postProcessData)

export default autolinkerRoutes
