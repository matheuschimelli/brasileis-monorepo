import { sandboxFile, createJob } from "../../lib/jobUtils";

const queue = createJob("jobResults")
const process = () => Promise.resolve()

export default { queue, process }