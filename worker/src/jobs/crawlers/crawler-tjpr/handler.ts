import { runOnSandbox } from "../../../lib/job-utils";

const handler = () => {
    console.log("AQUI ")
    return runOnSandbox(__dirname, 'sandbox')
}

export default handler