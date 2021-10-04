import WorkerServer from './WorkerServer'
import CronJobs from './Cronjobs'
import jobResults from './jobResults'
import testCrawler1 from './crawlers/testCrawler1'

import defaultCrawler from './crawlers/defaultCrawler'

const jobQueues = [
    WorkerServer,
    CronJobs,
    jobResults,
    defaultCrawler,
    testCrawler1
];
export default jobQueues;