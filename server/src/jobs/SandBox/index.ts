import path from 'path'

const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `SandBox${ext}`)
console.log('BROAD CRAWL handle')

export default {
  key: 'SandBox',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: true,
    repeat: {
      cron: '*/2 * * * *',
      tz: 'America/Sao_Paulo'
    }
  }
}
