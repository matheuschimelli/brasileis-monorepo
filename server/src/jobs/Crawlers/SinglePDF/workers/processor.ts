import path from 'path'
import { Job } from 'bull'
import { PDFJobData } from '../../../../types'
import connectDB from '../../../../database/connection'
import PDFConverter from '../../../../utils/pdfConverter'
import lawStorageDriver from '../../../../utils/lawStorageDriver'

const pdfBoxBinary = path.resolve(__dirname, '../../../../../bin/pdfbox-app-2.0.21.jar')
const downloadPathPDF = path.resolve(__dirname, '../../../../../temp')

console.log(pdfBoxBinary)
console.log(downloadPathPDF)
connectDB()

export default async function handle(job: Job) {
  console.log('workin hereeee')
  const jobData: PDFJobData = job.data
  try {
    const pdfConverter = new PDFConverter({
      downloadPath: downloadPathPDF,
      fileName: 'temporarypdf-teste',
      pdfBoxPath: pdfBoxBinary,
      url: jobData.url
    })
    const { html, text, title } = await pdfConverter.convert()

    console.log(html)
    console.log(text)
    console.log(title)

    await lawStorageDriver({
      url: jobData.url,
      categories: jobData.categories,
      subCategories: jobData.subCategories,
      crawler: {
        id: jobData.id,
        name: jobData.name!
      },
      htmlContent: html!,
      textContent: text!,
      // @ts-ignore
      title: title!,
      parentUrl: ''
    })

    // console.log(html)
    console.log('title', title)

    return Promise.resolve()
  } catch (error) {
    throw new Error(error)
  }
}
