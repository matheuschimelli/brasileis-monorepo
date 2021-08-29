import execa from 'execa'
import path from 'path'
import fs from 'fs'
import { Job } from 'bull'
import axios from 'axios'

import connectDB from '../../../database/connection'

/**
 * PDF to HTML
 */
const pdfBoxBinary = path.resolve(__dirname, '../../../../bin/pdfbox-app-2.0.21.jar')
connectDB()

interface DownloadPdfParams {
    fileName: string;
    url:string
}
async function downloadPdfFromUrl (params:DownloadPdfParams): Promise<any> {
  const tempPath = path.resolve(__dirname, '../../../../temp', `${params.fileName}`)
  const writer = fs.createWriteStream(tempPath)

  const response = await axios({
    url: params.url,
    method: 'GET',
    responseType: 'stream'
  })
  response.data.pipe(writer)
  return new Promise((resolve, reject) => {
    writer.on('finish', () => resolve(tempPath))
    writer.on('error', (err) => reject(err))
  })
}
export default async function handle (job: Job) {
  // const crawlerData: Crawler = job.data
  console.log('PDF to HTML')
  // console.log(pdfBoxBinary)
  // console.log(generateDownloadPath('teste'))

  try {
    console.log(job.data.urlPdfToHtml)

    const temporaryDO = 'tempDO.pdf'

    await downloadPdfFromUrl({ url: job.data.urlPdfToHtml, fileName: temporaryDO })

    const { stdout } = await execa('java', ['-jar', pdfBoxBinary, 'ExtractText', '-html', '-console', temporaryDO])
    console.log(stdout)
    return Promise.resolve()
  } catch (error) {
    throw new Error(error)
  }
}
