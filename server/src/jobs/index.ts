// export { default as JobTest } from './JobTest'
// export { default as SandBox } from './SandBox'
export { default as DefaultCrawler } from './Crawlers/DefaultCrawler'
export { default as SinglePage } from './Crawlers/SinglePage'

/**
 * Continous jobs. They run everyday
 */
export { default as Monday } from './Continuous/Monday'
export { default as Tuesday } from './Continuous/Tuesday'
export { default as Wednesday } from './Continuous/Wednesday'
export { default as Thursday } from './Continuous/Thursday'
export { default as Friday } from './Continuous/Friday'
export { default as Saturday } from './Continuous/Saturday'
export { default as Sunday } from './Continuous/Sunday'

/**
 * Test Jobs
 */
// export { default as ApifyCrawler } from './Crawlers/ApifyTest'
// export { default as PeticaoToHtml } from './Workers/PeticaoToDocx'
// export { default as PdfToHtml } from './Workers/PdfToHtml'
// export { default as TRF4Crawler } from './Crawlers/TRF4Crawler'
export { default as TestRuntime } from './TestRuntime'
// export { default as DiarioOficialSP } from './Crawlers/LegislacaoEstadual/DiarioOficialSP'
// export { default as DiarioOficialSPWorker } from './Crawlers/LegislacaoEstadual/DiarioOficialSP/workers/runner'

export { default as NormasReceitaFederal } from './Crawlers/LegislacaoFederal/normasReceitaFederal'

/**
 * Worker Jobs
 */
export { default as DeleteCrawler } from './Workers/DeleteCrawler'
export { default as SinglePdf } from './Crawlers/SinglePDF'

/**
 * Worker Processors Jobs
 */
export { default as SinglePdfConversorRunner } from './Crawlers/SinglePDF/workers/runner'

export { default as PrevCrawler } from './Crawlers/PrevCrawler'
