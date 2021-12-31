import { runOnSandbox } from "../../../lib/job-utils";

const handler = () => {
    return runOnSandbox(__dirname, 'sandbox')
}

export default handler