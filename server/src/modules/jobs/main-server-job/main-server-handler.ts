import { Job } from "bull"
import { WorkerServer } from "../jobs"

export const mainServerHandler = async (job: Job) => {
    console.log("Handling event send from server", job.data)
    await WorkerServer.add({ data: 'ola mundo' })
}