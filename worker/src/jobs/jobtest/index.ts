import { sandboxFile, createJob } from "../../lib/jobUtils";
const queue = createJob("JobTest")

function process() {
    queue.process(sandboxFile(__dirname, "sandbox"))
}
export default { queue, process }

