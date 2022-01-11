import express from 'express'
import userRoutes from '@modules/user/user-routes'
import stripeRoutes from '@modules/stripe/stripe-routes'
import lawBlockRoutes from '@modules/law-block/law-block-routes'
import elasticSearchRoutes from '@modules/elasticsearch/elasticsearch-routes'
import crawlerRoutes from '@modules/crawler/crawler-routes'
import crawlerTypesRoutes from '@modules/crawler-type/crawler-type-routes'
import topicsRoutes from '@modules/topic/topic-routes'

const routes = express.Router()

routes.use('/api/v1/user', userRoutes)
//routes.use('/api/v1/search', searchRoutes)
routes.use('/api/v1/checkout', stripeRoutes)
routes.use('/api/v1/law-block', lawBlockRoutes)
routes.use('/api/v1/search', elasticSearchRoutes)
routes.use('/api/v1/crawlers', crawlerRoutes)
routes.use('/api/v1/crawler-types', crawlerTypesRoutes)
routes.use('/api/v1/topics', topicsRoutes)



export default routes
