import WorkerServer from './WorkerServer'
import CronJobs from './Cronjobs'
import jobResults from './jobResults'
import defaultcrawler from './crawlers/defaultcrawler'
import crawlerTest from './crawlers/crawlerTest'

const jobQueues = [
    WorkerServer,
    CronJobs,
    jobResults,
    defaultcrawler,
    crawlerTest
]
export default jobQueues