import express from 'express'
import userRoutes from '@modules/user/user-routes'
import stripeRoutes from '@modules/stripe/stripe-routes'
import lawBlockRoutes from '@modules/law-block/law-block-routes'
import jurisprudenciaRoutes from '@modules/jurisprudencia/jurisprudencia-routes'
import autolinkerRoutes from '@modules/autolinker/autolinker-routes'


import elasticSearchRoutes from '@modules/elasticsearch/elasticsearch-routes'
import crawlerRoutes from '@modules/crawler/crawler-routes'
import crawlerTypesRoutes from '@modules/crawler-type/crawler-type-routes'
import categoriesRoutes from '@modules/category/category-routes'

const routes = express.Router()

routes.use('/api/v1/user', userRoutes)
routes.use('/api/v1/checkout', stripeRoutes)
routes.use('/api/v1/law-block', lawBlockRoutes)
routes.use('/api/v1/jurisprudencia', jurisprudenciaRoutes)
routes.use('/api/v1/autolinker', autolinkerRoutes)



routes.use('/api/v1/search', elasticSearchRoutes)
routes.use('/api/v1/crawlers', crawlerRoutes)
routes.use('/api/v1/crawler-types', crawlerTypesRoutes)
routes.use('/api/v1/categories', categoriesRoutes)


export default routes
