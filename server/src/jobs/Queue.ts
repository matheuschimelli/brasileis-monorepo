import Queue from 'bull'
import redisConfig from '../config/redis'
import * as BullJobs from '.'

const queues = Object.values(BullJobs).map(job => ({
  bull: new Queue(job.key, redisConfig.options),
  name: job.key,
  // @ts-ignore
  handle: job.handle,
  options: job.options,
  sandBoxFile: job.sandBoxFile
}))

export default {
  queues,
  processSandBox(queue: any) {
    // this.add(queue.name, null)
    queue.bull.process(queue.sandBoxFile)
  },

  add(name: any, data: any) {
    const queue = this.queues.find(queue => queue.name === name)
    if (queue) {
      return queue.bull.add(data, queue.options)
    }
  },

  runNow(name: any, data: any) {
    const queue = this.queues.find(queue => queue.name === name)
    if (queue) {
      return queue.bull.add(data, queue.options)
    }
  },

  sendToWorkerServer(data: any) {
    const workerServer = new Queue('WorkerServer')
    workerServer.add(data)
  },

  async cleanAll() {
    try {
      // if (process.env.NODE_ENV === 'development') {
      for (const queue of this.queues) {
        await queue.bull.pause()

        if (queue.options) {
          // @ts-ignore
          if (queue.options.repeat) {
            // @ts-ignore

            await queue.bull.removeRepeatable(queue.options.repeat)
          }
        }
        await queue.bull.clean(0, 'active')
        await queue.bull.clean(0, 'wait')
        await queue.bull.clean(0, 'delayed')
        await queue.bull.clean(0, 'failed')
        await queue.bull.clean(0, 'completed')
        await queue.bull.empty()
        queue.bull.removeAllListeners()
        const multi = queue.bull.multi()
        multi.del(queue.bull.toKey('repeat'))
        await multi.exec()

        console.log(`${queue.name} was cleaned`)
      }
      // }
    } catch (err) {
      console.log(err)
      throw new Error(err)
    }
  },

  process() {
    console.log('PROCESSING JOBS')

    this.queues.forEach(queue => {
      if (queue.options.continuous) {
        this.add(queue.name, null)
      }

      if (queue.sandBoxFile) {
        // @ts-ignore
        return queue.bull.process(queue.sandBoxFile)
      } else {
        queue.bull.process(queue.handle)
      }

      queue.bull.on('failed', (job, err) => {
        console.log('Job failed', queue.name, job.data)
        console.log(err)
      })

      queue.bull.on('completed', (job, result) => {
        console.log('Job Completed', queue.name)
        console.log(result)
      })

      queue.bull.on('global:completed', function (job, result) {
        console.log(`Job ${job} completed! Result: ${result}`)
      })
    })
  }
}
