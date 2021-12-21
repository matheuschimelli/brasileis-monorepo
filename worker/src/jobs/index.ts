import WorkerServer from './worker-server'
import CronJobs from './cron-jobs'
import jobResults from './job-results'
import testCrawler1 from './crawlers/test-crawler-1'
import defaultCrawler from './crawlers/default-crawler'

const jobQueues = [
    WorkerServer,
    CronJobs,
    jobResults,
    defaultCrawler,
    testCrawler1
];
export default jobQueues;