import { runOnSandbox, createJob } from "../../lib/job-utils";

const queue = createJob("jobResults")
const process = () => Promise.resolve()

export default { queue, process }