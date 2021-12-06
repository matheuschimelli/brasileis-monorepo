import Queue from 'bull'
import redisConfig from '../config/redis'
import Category from '../models/Category'
import SubCategory from '../models/SubCategory'
import LawService from '../modules/laws/lawService'
import Law from '../models/Law'
import { SearchService } from '../modules/search/searchService'

const workerServer = new Queue('WorkerServer', redisConfig.options)
const jobProcessor = new Queue('JobProcessor', redisConfig.options)
const anotherNade = new Queue('AnotherName', redisConfig.options)
const jobResults = new Queue('jobResults', redisConfig.options)

const internalCrawler = new Queue('internalCrawler', redisConfig.options)
const internalCrawlerProcessor = new Queue('internalCrawlerProcessor', redisConfig.options)

const elasticSearchIndexVerifier = new Queue('elasticSearchIndexVerifier', redisConfig.options)
const elasticSearchIndexVerifierProcessor = new Queue('elasticSearchIndexVerifierProcessor', redisConfig.options)

/**
 * 1. identificar qual crawler esta retornando dados
 * 2. chamar service do crawler que retornou dados
 * 3. salvar os dados (os dados devem ser salvos pelo service)
 * 
 * 
 */

jobResults.process(async (job) => {
    const jobQueue = job.data.queue
    const jobData = job.data.jobData
    const jobResult = job.data.result

    console.log('jobqueue', jobQueue)
    console.log('jobdata', jobData)
    console.log("data saved")

    switch (jobQueue) {
        case "DefaultCrawler":
            await LawService.create({
                crawlerId: jobData.id.toString(),
                categories: LawService.getCategoriesIds(jobData.categories as unknown as Category[]).map(String),
                subCategories: LawService.getSubCategoriesIds(jobData.categories as unknown as SubCategory[]).map(String),
                htmlContent: jobResult.page.content,
                textContent: jobResult.page.bodyText,
                title: jobResult.page.title,
                url: jobResult.page.url,
                contentHtmlSelector: jobData.htmlSelectors.contentEl,
            })
            break;

        default:
            break;
    }
})
/**
 * fixEsIndex
 * periodically check if indexed itens on postgresql also are indexed in elasticsearch
 * 1. check if all items on postgresql are also on elasticsearch
 * 2. check all items from elasticsearch to check if they are also on postgresql. if not remove them
 * 
  */
internalCrawler.process(async job => {
    const allIndexedLaws = await Law.find({})
    if (allIndexedLaws.length !== 0) {
        for (const law of allIndexedLaws) {
            return await internalCrawlerProcessor.add({ id: law.id })
        }
    }
    return Promise.resolve()
})

internalCrawlerProcessor.process(async job => {
    const law = job.data as Law
    const searchService = new SearchService()

    //check if not exists on elasticsearch and index to ES
    const esDoc = await SearchService.findOneById(law.id.toString(), 'law', 'law')
    if (!esDoc) {
        return await searchService.upsert({
            indexName: 'law',
            document: {
                docId: law.id.toString(),
                lawId: law.id,
                docType: 'law',
                title: law.title,
                url: law.url,
                slug: law.slug,
                textContent: law.textContent,
                categories: LawService.getCategoriesNames(law.categories),
                subCategories: LawService.getSubCategoriesNames(law.subCategories),
                categoriesIds: LawService.getCategoriesIds(law.categories),
                subCategoriesIds: LawService.getSubCategoriesIds(law.subCategories),
            }
        })
    }
    return Promise.resolve()
})

elasticSearchIndexVerifier.process(async job => {
    const docs = await SearchService.getAllDocs("law", "law")
    console.log(docs)

    if (!docs) return Promise.resolve()

    for (const doc of docs) {
        await elasticSearchIndexVerifierProcessor.add({ ...doc })
    }
})

elasticSearchIndexVerifierProcessor.process(async job => {
    const doc = job.data

    const existLaw = await Law.findOne({
        where: { id: doc._id }
    })
    if (!existLaw) return await SearchService.remove({ index: "law", documentId: doc._id })
    return Promise.resolve()
})

function start() {
    internalCrawler.add({}, { repeat: { cron: "12 12 * * 3" } })
    elasticSearchIndexVerifier.add({}, { repeat: { cron: "12 12 * * 3" } })
    workerServer.add({ data: 'teste from main server' })
}
start()

export const jobQueues = [
    workerServer,
    jobProcessor,
    anotherNade,
    jobResults,
    internalCrawler,
    internalCrawlerProcessor,
    elasticSearchIndexVerifier,
    elasticSearchIndexVerifierProcessor
]


export {
    workerServer,
    jobProcessor,
    anotherNade,
    jobResults,
    internalCrawler,
    internalCrawlerProcessor,
    elasticSearchIndexVerifier,
    elasticSearchIndexVerifierProcessor
}