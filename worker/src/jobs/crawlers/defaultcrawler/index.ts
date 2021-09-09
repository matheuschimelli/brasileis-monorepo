import { sandboxFile, createJob } from "../../../lib/jobUtils";

const queue = createJob("DefaultCrawler")
const process = () => queue.process(sandboxFile(__dirname, "sandbox"))
export default { queue, process }