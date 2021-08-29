import path from 'path'
import { Job } from 'bull'
import { getConnection } from 'typeorm'

import { PDFJobData } from '../../../../../types'
import PDFConverter from '../../../../../utils/pdfConverter'
getConnection()
// import lawStorageDriver from '../../../../../services/lawStorageDriver'

const pdfBoxBinary = path.resolve(__dirname, '../../../../../../bin/pdfbox-app-2.0.21.jar')
const downloadPathPDF = path.resolve(__dirname, '../../../../../../temp')

console.log(pdfBoxBinary)
console.log(downloadPathPDF)

export default async function handle(job: Job) {
  const jobData: PDFJobData = job.data
  console.log(jobData)
  try {
    const pdfConverter = new PDFConverter({
      downloadPath: downloadPathPDF,
      fileName: 'temporarypdf-teste',
      pdfBoxPath: pdfBoxBinary,
      url: jobData.url
    })
    const { html, text, title } = await pdfConverter.convert()
    /*
    await lawStorageDriver({
      url: jobData.url,
      categories: jobData.categories,
      subCategories: jobData.subCategories,
      crawler: {
        id: jobData.id,
        name: jobData.name!
      },
      htmlContent: html,
      textContent: text!,
      title: title,
      parentUrl: ''
    })
    */

    console.log('title', title)
    console.log('text', text)

    return Promise.resolve()
  } catch (error) {
    throw new Error(error)
  }
}
