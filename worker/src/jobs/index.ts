import WorkerServer from './WorkerServer'
import CronJobs from './Cronjobs'
import jobResults from './jobResults'
import defaultcrawler from './crawlers/defaultcrawler'

const jobQueues = [
    WorkerServer,
    CronJobs,
    jobResults,
    defaultcrawler
]
export default jobQueues