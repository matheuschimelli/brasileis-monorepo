import { sandboxFile, createJob } from "../../../lib/job-utils";

const queue = createJob("CrawlerTest1")
const process = () => queue.process(sandboxFile(__dirname, "sandbox"))
export default { queue, process }