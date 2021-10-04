import { QueueOptions } from 'bull'

declare var process: {
  env: {
    REDIS_HOST: string
    REDIS_PORT: number,
    REDIS_PASSWORD: string,
  }
}

var options: QueueOptions
if (process.env.REDIS_PASSWORD) {
  options = {

    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD
    }
  }
} else {
  options = {

    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT
    }
  }
}

export default {
  options
}
