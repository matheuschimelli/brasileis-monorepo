import { Job } from "bull";

const handler = async (job: Job) => {
    console.log("ok")
}
export default handler