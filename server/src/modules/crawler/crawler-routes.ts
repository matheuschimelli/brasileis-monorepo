import express from 'express'
import {
    validate,
    indexController,
    showController,
    createController,
    updateController,
    removeController,
    runCrawlerController,
    reindexController
} from '@modules/crawler/crawler-controller'
import { checkValidation, isAdmin, isAuthenticated } from '@middlewares/jwt-auth'

const crawlerRoutes = express.Router()


crawlerRoutes.get('/', isAuthenticated, isAdmin, indexController)
crawlerRoutes.get('/:id', isAuthenticated, isAdmin, showController)
crawlerRoutes.post('/', isAuthenticated, isAdmin, validate(), checkValidation, createController)
crawlerRoutes.put('/:id', isAuthenticated, isAdmin, validate(), checkValidation, updateController)
crawlerRoutes.delete('/:id', isAuthenticated, isAdmin, removeController)
crawlerRoutes.post('/run-crawler/:id', isAuthenticated, isAdmin, runCrawlerController)
crawlerRoutes.post('/run-reindex', isAuthenticated, isAdmin, reindexController)

// isAuthenticated, isAdmin,

export default crawlerRoutes
