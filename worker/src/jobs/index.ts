import WorkerServer from './WorkerServer'
import CronJobs from './Cronjobs'
import jobResults from './jobResults'
import defaultcrawler from './crawlers/testCrawler1'
import crawlerTest from './crawlers/defaultCrawler'

const jobQueues = [
    WorkerServer,
    CronJobs,
    jobResults,
    defaultcrawler,
    crawlerTest
];
export default jobQueues;