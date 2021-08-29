import { Job } from 'bull'

export default {
  key: 'MailJob',
  sandBoxFile: null,

  options: {
    continuous: false
  },
  async handle (job: Job) {
    const { user } = job.data

    console.log(user)
    console.log('MAIL JOB')
    console.log(job.data)

    return Promise.resolve({ done: true, mail: 'mail job' })
  }
}
