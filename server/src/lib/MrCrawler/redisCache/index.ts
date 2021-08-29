import redis from 'redis'
import _ from 'lodash'

export interface RedisCacheSettings {
  host: string;
  port: number;
  sessionId?: string;
}
export default class RedisCache {
  private host: string;
  private port: number;
  public sessionId?: string;
  public redisClient?: redis.RedisClient

  constructor (settings: RedisCacheSettings) {
    this.host = settings.host || '127.0.0.1'
    this.port = settings.port || 6379
    this.sessionId = settings.sessionId
    this.redisClient = undefined

    this.init()
  }

  init () {
    this.redisClient = redis.createClient({ host: this.host, port: this.port })
    return Promise.resolve()
  }

  clear () {
    return new Promise<void>((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.flushdb((error) => {
          if (error) {
            reject(error)
            return
          }
          resolve()
        })
      }
    })
  }

  close () {
    if (this.redisClient) { this.redisClient.quit() }
    return Promise.resolve()
  }

  getNextUrlFromListToVisit (): Promise <string> {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.brpop('URLS_TO_VISIT', '1', (err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data[1])
        })
      }
    })
  }

  checkIfHasUrlToVisit () {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.brpop('URLS_TO_VISIT', '1', (err, data) => {
          if (err) {
            reject(err)
            return
          }
          if (!data) {
            resolve(false)
          } else {
            resolve(true)
          }
        })
      }
    })
  }

  checkIfVisitedUrlsIncludes (url: string) {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.lrange('VISITED_URLS', 0, -1, (err, data) => {
          if (err) {
            reject(err)
            return
          }
          const include = _.includes(data, url)
          resolve(include)
        })
      }
    })
  }

  checkIfUrlsToVisitincludes (url: string) {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.lrange('URLS_TO_VISIT', 0, -1, (err, data) => {
          if (err) {
            reject(err)
            return
          }
          const include = _.includes(data, url)
          resolve(include)
        })
      }
    })
  }

  addUrlToVisit (url: string) {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.lpush('URLS_TO_VISIT', url, (err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data)
        })
      }
    })
  }

  addUrlToVisited (url: string) {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.lpush('VISITED_URLS', url, (err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data)
        })
      }
    })
  }

  visitedUrlsSize (): Promise<number> {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.llen('VISITED_URLS', (err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data)
        })
      }
    })
  }

  urlsToVisitSize (): Promise <number> {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.llen('URLS_TO_VISIT', (err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data)
        })
      }
    })
  }

  /**
   * For paginatons, set the current page in case of fails to avoid start from beginning again
   */
  setCurrentPageFromPagination (pageNumber: string) {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.set('CURRENT_PAGE', pageNumber, (err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data)
        })
      }
    })
  }

  getCurrentPageFromPagination () {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.get('CURRENT_PAGE', (err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data)
        })
      }
    })
  }

  /**
   *
   * @param {Number} pageNumber
   */
  setFailError (error: string) {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.set('ERROR', error, (err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data)
        })
      }
    })
  }

  getFailError () {
    return new Promise((resolve, reject) => {
      if (this.redisClient) {
        this.redisClient.get('ERROR', (err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data)
        })
      }
    })
  }

  async checkIfLinkAlreadyIsToVisit (link: string) {
    const includes = await this.checkIfUrlsToVisitincludes(link)
    return includes
  }

  async checkIfLinkAlreadyIsVisited (link: string) {
    const includes = await this.checkIfVisitedUrlsIncludes(link)
    return includes
  }
}
