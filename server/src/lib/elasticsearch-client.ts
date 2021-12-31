import { Client } from '@elastic/elasticsearch'

const elasticSearchClient = new Client({
    node: process.env.ELASTICSEARCH_HOST,
    auth: {
        apiKey: {
            id: process.env.ELASTICSEARCH_API_ID!,
            api_key: process.env.ELASTICSEARCH_API_KEY!
        }
    }
})
export default elasticSearchClient