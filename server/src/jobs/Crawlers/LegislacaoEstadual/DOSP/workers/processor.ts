import path from 'path'
import { Job } from 'bull'
import connectDB from '../../../../../database/connection'
import PDFConverter from '../../../../../utils/pdfConverter'
// import PaginaDiarioOficialService from '../../../../../services/diarioOficial/paginaDiarioOficial'

const pdfBoxBinary = path.resolve(__dirname, '../../../../../../bin/pdfbox-app-2.0.21.jar')
const downloadPathPDF = path.resolve(__dirname, '../../../../../../temp')

console.log(pdfBoxBinary)
console.log(downloadPathPDF)
connectDB()

export default async function handle(job: Job) {
  const {
    url
    // dataPublicacao,
    // parentDiarioOficial
  } = job.data
  const allData = job.data

  console.log(allData)

  // const paginaDiarioOficial = new PaginaDiarioOficialService()
  try {
    const pdfConverter = new PDFConverter({
      downloadPath: downloadPathPDF,
      fileName: 'DOSP-temp-pdf',
      pdfBoxPath: pdfBoxBinary,
      url: url
    })
    const { html, text, title } = await pdfConverter.convert()
    /*
    await paginaDiarioOficial.create({
      url: url,
      titulo: title,
      htmlContent: html,
      textContent: text || '',
      estado: 'São Paulo',
      parent: parentDiarioOficial,
      dataPublicacao: dataPublicacao,
      tipo: 'Diário Oficial Executivo'
    })
*/
    console.log(title)
    return Promise.resolve()
  } catch (error) {
    throw new Error(error)
  }
}
