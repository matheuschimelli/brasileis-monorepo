import dotenv from 'dotenv'
import Queue from '../jobs/Queue'

dotenv.config({ path: '.env' })

declare var process : {
  env: {
    SESSION_SECRET: string
    HOST: string,
    PORT: number,
    NODE_ENV: string,
    MONGODB_URI: string
  }
}

/**
 * Clean all Queues on server deploy or restart to avoid errors.
 */

export default function start () {
  /*
  console.log('Starting MongoDB')
  mongoose.set('useFindAndModify', false)
  mongoose.set('useCreateIndex', true)
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useUnifiedTopology', true)
  mongoose.connect(process.env.MONGODB_URI)
  mongoose.connection.on('error', (err) => {
    console.error(err)
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.')
  // process.exit()
  })
*/
  console.log('Running Jobs in queue')
  Queue.cleanAll().then(() => {
    Queue.process()
    // console.log('Running Queue in separeted process')
  })
}
