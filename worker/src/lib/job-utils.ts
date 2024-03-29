import path from 'path'
import Queue from 'bull';

export function runOnSandbox(dirname: string, fileName: string) {
    const ext = path.extname(__filename)
    const file = path.resolve(dirname, `${fileName}${ext}`)
    return file
}

export function createJob(name: string, options?: Queue.JobOptions) {
    //@ts-ignore
    const queue = new Queue(name, {
        redis:
        {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASSWORD
        },
        defaultJobOptions: { ...options }
    })
    return queue
}
