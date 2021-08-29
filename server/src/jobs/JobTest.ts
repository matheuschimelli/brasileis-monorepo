import { Job } from 'bull'

export default {
  key: 'JobTest',
  sandBoxFile: null,
  options: {
    sandBox: true,
    continuous: true,
    repeat: { cron: '*/1 * * * *' }
  },
  async handle (job: Job) {
    const { user } = job.data

    console.log(user)
    console.log('JobTest, JOB DATA')
    console.log(job.data)
    console.log(`JOB TEST ${process.pid}`)

    return Promise.resolve({ done: true })
  }
}
