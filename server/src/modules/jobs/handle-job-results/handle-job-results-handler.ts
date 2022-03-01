import { handleLawBlockCode } from '@modules/jobs/handle-job-results/handle-code-lawBlock'
import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service";
import handleJurisprudencia from "./handle-jurisprudencia/index";
import { Job, JobResult, Juris } from "@modules/types";

/**
 * Brasileis job result handler - How it Works (or how should it works)
 * 
 * 1. The main server wich have access to database call a redis queue to the worker server
 * this queue contains the necessary data to run the worker to process the crawler or else thing
 * 
 * 2. After the worker server has done the work it will calls another redis queue called jobResults
 * 
 * 3. The main server will recieve the jobResults queue with the necessary data to save into the database
 * 
 * 4. The main server will handle the received queue by the 'queue' attribute. Ex: {data:{queue:'someQueue'}}
 * 
 */

export const handler = async (job: Job) => {
    const jobData: JobResult = job.data
    const crawlerParams = jobData.data

    try {
        if (crawlerParams.blockType == 'CODIGO') await handleLawBlockCode({ jobData, crawlerParams })
        if (crawlerParams.blockType == 'JURISPRUDENCIA') await handleJurisprudencia({ jobData: jobData.result as unknown as Juris })

        return Promise.resolve()

    } catch (error: any) {
        sendAlertToTelegram(`
    🛑Erro em: handle-code-lawBlock🛑
        Erro: ${error}
        `);
        return Promise.reject(error)

    }
}

export default handler