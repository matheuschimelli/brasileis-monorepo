import path from 'path'
import Queue, { Job } from 'bull';
import redisConfig from '../config/redis';

export function sandboxFile(dirname: string, fileName: string) {
    const ext = path.extname(__filename)
    const file = path.resolve(dirname, `${fileName}${ext}`)
    return file
}
export function createJob(name: string, options?: Queue.JobOptions) {
    //@ts-ignore
    const queue = new Queue(name, {
        redis:
        {
            ...redisConfig.options
        },
        defaultJobOptions: { ...options }
    })
    return queue
}
