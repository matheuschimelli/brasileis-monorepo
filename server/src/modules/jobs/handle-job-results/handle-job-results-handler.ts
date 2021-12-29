import { BlockType } from "@prisma/client";
import { Job } from "bull";
import { handleLawBlockCode } from '@modules/jobs/handle-job-results/handle-code-lawBlock'
/**
 * Brasileis job result handler - How it Works (or how should it works)
 * 
 * 1. The main server wich have access to database call a redis queue to the worker server
 * this queue contains necessary data to run the worker to process the crawler or else thing
 * 
 * 2. After the worker server has done the work it will calls another redis queue called jobResults
 * 
 * 3. The main server will recieve the jobResults queue with the necessary data to save into the database
 * 
 * 4. The main server will handle the received queue by the 'queue' attribute. Ex: {data:{queue:'someQueue'}}
 * 
 */

export type JobResult = {
    queue: string,
    data: {
        id: string,
        name: string,
        description: string,
        isUrlOnly: boolean,
        source: string,
        cron: string,
        notifyUpdates: true,
        slug: string,
        mainBlockTitle: string,
        mainBlockDescription: string,
        version: 1,
        createdAt: string,
        updatedAt: string,
        lawBlockId: string,
        crawlerTypeId: string,
        blockType: BlockType,
        crawlerType: {
            id: string,
            name: string,
            description: string,
            customCode: null,
            createdAt: string,
            updatedAt: string
        }
    },
    result: {
        pageHtml: string,
        pageText: string,
        articles: any[]
    }
}
export const handler = async (job: Job) => {
    const jobData: JobResult = job.data
    const crawlerParams = jobData.data

    console.log(jobData.result)

    try {
        if (crawlerParams.blockType == 'CODIGO') await handleLawBlockCode({ jobData, crawlerParams })

        return Promise.resolve()

    } catch (error: any) {
        return Promise.reject(error)
    }
}

export default handler