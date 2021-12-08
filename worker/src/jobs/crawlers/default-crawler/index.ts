import { sandboxFile, createJob } from "../../../lib/job-utils";

const queue = createJob("DefaultCrawler")
const process = () => queue.process(sandboxFile(__dirname, "sandbox"))
export default { queue, process }