import { runOnSandbox, createJob } from "../../../lib/job-utils";

const queue = createJob("DefaultCrawler")
const process = () => queue.process(runOnSandbox(__dirname, "sandbox"))
export default { queue, process }