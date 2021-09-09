import { sandboxFile, createJob } from "../../lib/jobUtils";

const queue = createJob("CronJob", {
    repeat: {
        cron: "* * * * *",
    },
})
const process = () => queue.process(sandboxFile(__dirname, "sandbox"))

queue.add({ justRun: true })

export default { queue, process }