import { sandboxFile, createJob } from "../../lib/job-utils";

const queue = createJob("CronJob", {
    repeat: {
        cron: "* * * * *",
    },
})
const process = () => queue.process(sandboxFile(__dirname, "sandbox"))

queue.add({ justRun: true })

export default { queue, process }