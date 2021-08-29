import { Job } from 'bull'
import puppeteer from 'puppeteer'

export default async function handle (job: Job) {
  console.log('Running SandBox Jobs - SAND BOX')

  console.log(`Job ${job.id} in pid ${process.pid} got data:`, job.data)

  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: [
        '--disable-gpu',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas'
      ]
    })
    const page = await browser.newPage()
    await page.goto('https://www.google.com')
    const title = await page.evaluate(() => {
      const t = document.querySelector('title')?.innerText
      return t
    })
    console.log(title)
    await browser.close()
    return Promise.resolve({ done: true, title: title })
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}
