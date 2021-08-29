import axios from 'axios'
// import CrawlerBase from '../../../lib/CrawlerBase'
import Queue from '../../Queue'

export default class PrevCrawler {
  async requestFirstUrl () {
    const { data, statusText, request } = await axios.request({
      method: 'GET',
      url: 'https://api.prev.app/v1/peticoes',
      params: { status: 'REVISANDO', ordenaPor: 'SCORE', size: '32' },
      headers: {
        authority: 'api.prev.app',
        pragma: 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        accept: 'application/json, text/plain, */*',
        authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0OTYxIiwiYXNzaW5hdHVyYSI6eyJpZCI6NDk2MX0sImVzY3JpdG9yaW8iOnsiYXRpdm8iOnRydWUsIm5vbWUiOiJBZHZvY2FjaWEgQW50b25pbyBDaGltZWxsaSIsImlkIjo5MDY5LCJjbnBqIjpudWxsLCJzbHVnIjoiY2hpbWVsbGlhZHZvY2FjaWEifSwiaXNzIjoiaHR0cHM6XC9cL3d3dy5wcmV2aWRlbmNpYXJpc3RhLmNvbS5iciIsImNvbnRhIjp7ImF0aXZvIjp0cnVlLCJhc3NpbmF0dXJhIjp7ImlkIjo0OTYxfSwiY3BmIjoiMDAzNDkyOTY5MDEiLCJwcml2aWxlZ2lvIjoiUFJPUFJJRVRBUklPIiwiY29udGFQcmluY2lwYWxJZCI6NDk2MSwidXN1YXJpbyI6eyJjcGYiOiIwMDM0OTI5NjkwMSIsIm5vbWUiOiJBTlRPTklPIFRBREVVIFRBTUFLQVZJIENISU1FTExJIiwidXVpZCI6IjA0N2EwMDM5LTUzNzUtMTFlYS1iOTI2LTAyOWY3OTQzZDMwNCIsImVtYWlsIjoiYW50b25pb2NoaW1lbGxpQGdtYWlsLmNvbSJ9LCJub21lIjoiQU5UT05JTyBUQURFVSBUQU1BS0FWSSBDSElNRUxMSSIsImlkIjo0OTYxLCJlbWFpbCI6ImFudG9uaW9jaGltZWxsaUBnbWFpbC5jb20iLCJzdGF0dXMiOiJBVElWTyJ9LCJzY29wZSI6W10sInByaXZpbGVnaW8iOiJQUk9QUklFVEFSSU8iLCJ1c3VhcmlvIjp7ImNwZiI6IjAwMzQ5Mjk2OTAxIiwibm9tZSI6IkFOVE9OSU8gVEFERVUgVEFNQUtBVkkgQ0hJTUVMTEkiLCJpZCI6NDk2MSwidXVpZCI6IjA0N2EwMDM5LTUzNzUtMTFlYS1iOTI2LTAyOWY3OTQzZDMwNCIsImVtYWlsIjoiYW50b25pb2NoaW1lbGxpQGdtYWlsLmNvbSJ9LCJleHAiOjE2MTgwMjk1MDEsImlhdCI6MTYxODAxMTUwMSwiY29udGFJZCI6NDk2MSwianRpIjoiZWU3NjdiYmEtNjhmZS00OTExLTkyMDItNjVjNjk0Zjc1ZmIyIiwidXNlcm5hbWUiOiJhbnRvbmlvY2hpbWVsbGlAZ21haWwuY29tIn0.FeVR2vwgG3XOovqXJKNQvDCYAvi7ofLu-n72dmW1Tt4P53BLSvjqt1rOdnjanr-pveuEt53Ni3WLSrw8UKDxElXKcRYWPlfa3vzkSXvyYQZ4NBGw36CcG43xPTzkbwx0cYhHEiwfc7ZNL_gZCAGG4HmPwngDxDcdXJjSMKcuDgSf9x6-I6NY3FPAWO_IYi8sSjVUcF9L-DwyfZ3Q9mgvvl2-g-vhfE6RxnJLTanXQD7ZBLeest-O7v40nGGT_DcNJllXSpt4Qka3emibgUpCrGPsn5MhWqAmn9iLJ5XT2XOVjJXcrE3xkQ-lg0DBQm2CmcD1jMtLAZxP2roqEVqXbw',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        origin: 'https://chimelliadvocacia.prev.app',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        referer: 'https://chimelliadvocacia.prev.app/',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    })
    if (statusText === 'OK' || statusText === 'Ok' || statusText === 'ok') {
      return { data, statusText, request }
    }
    return null
  }

  async requestNextPagePagination (pageId:string) {
    console.log('NEXT', pageId)
    const { data, statusText, request } = await axios.request({
      method: 'GET',
      url: 'https://api.prev.app/v1/peticoes',
      params: {
        next: pageId,
        status: 'REVISANDO',
        ordenaPor: 'SCORE',
        size: '32'
      },
      headers: {
        authority: 'api.prev.app',
        pragma: 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        accept: 'application/json, text/plain, */*',
        authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0OTYxIiwiYXNzaW5hdHVyYSI6eyJpZCI6NDk2MX0sImVzY3JpdG9yaW8iOnsiYXRpdm8iOnRydWUsIm5vbWUiOiJBZHZvY2FjaWEgQW50b25pbyBDaGltZWxsaSIsImlkIjo5MDY5LCJjbnBqIjpudWxsLCJzbHVnIjoiY2hpbWVsbGlhZHZvY2FjaWEifSwiaXNzIjoiaHR0cHM6XC9cL3d3dy5wcmV2aWRlbmNpYXJpc3RhLmNvbS5iciIsImNvbnRhIjp7ImF0aXZvIjp0cnVlLCJhc3NpbmF0dXJhIjp7ImlkIjo0OTYxfSwiY3BmIjoiMDAzNDkyOTY5MDEiLCJwcml2aWxlZ2lvIjoiUFJPUFJJRVRBUklPIiwiY29udGFQcmluY2lwYWxJZCI6NDk2MSwidXN1YXJpbyI6eyJjcGYiOiIwMDM0OTI5NjkwMSIsIm5vbWUiOiJBTlRPTklPIFRBREVVIFRBTUFLQVZJIENISU1FTExJIiwidXVpZCI6IjA0N2EwMDM5LTUzNzUtMTFlYS1iOTI2LTAyOWY3OTQzZDMwNCIsImVtYWlsIjoiYW50b25pb2NoaW1lbGxpQGdtYWlsLmNvbSJ9LCJub21lIjoiQU5UT05JTyBUQURFVSBUQU1BS0FWSSBDSElNRUxMSSIsImlkIjo0OTYxLCJlbWFpbCI6ImFudG9uaW9jaGltZWxsaUBnbWFpbC5jb20iLCJzdGF0dXMiOiJBVElWTyJ9LCJzY29wZSI6W10sInByaXZpbGVnaW8iOiJQUk9QUklFVEFSSU8iLCJ1c3VhcmlvIjp7ImNwZiI6IjAwMzQ5Mjk2OTAxIiwibm9tZSI6IkFOVE9OSU8gVEFERVUgVEFNQUtBVkkgQ0hJTUVMTEkiLCJpZCI6NDk2MSwidXVpZCI6IjA0N2EwMDM5LTUzNzUtMTFlYS1iOTI2LTAyOWY3OTQzZDMwNCIsImVtYWlsIjoiYW50b25pb2NoaW1lbGxpQGdtYWlsLmNvbSJ9LCJleHAiOjE2MTgwMjk1MDEsImlhdCI6MTYxODAxMTUwMSwiY29udGFJZCI6NDk2MSwianRpIjoiZWU3NjdiYmEtNjhmZS00OTExLTkyMDItNjVjNjk0Zjc1ZmIyIiwidXNlcm5hbWUiOiJhbnRvbmlvY2hpbWVsbGlAZ21haWwuY29tIn0.FeVR2vwgG3XOovqXJKNQvDCYAvi7ofLu-n72dmW1Tt4P53BLSvjqt1rOdnjanr-pveuEt53Ni3WLSrw8UKDxElXKcRYWPlfa3vzkSXvyYQZ4NBGw36CcG43xPTzkbwx0cYhHEiwfc7ZNL_gZCAGG4HmPwngDxDcdXJjSMKcuDgSf9x6-I6NY3FPAWO_IYi8sSjVUcF9L-DwyfZ3Q9mgvvl2-g-vhfE6RxnJLTanXQD7ZBLeest-O7v40nGGT_DcNJllXSpt4Qka3emibgUpCrGPsn5MhWqAmn9iLJ5XT2XOVjJXcrE3xkQ-lg0DBQm2CmcD1jMtLAZxP2roqEVqXbw',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        origin: 'https://chimelliadvocacia.prev.app',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        referer: 'https://chimelliadvocacia.prev.app/',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    })

    if (data) {
      if (data.peticoes) {
        const peticoes = data.peticoes.map((peticao:any) => peticao.titulo)
        console.log(peticoes)
      }
    }
    if (statusText === 'OK' || statusText === 'Ok' || statusText === 'ok') {
      return { data, statusText, request }
    }
    return null
  }

  async addToVisit ({ data, statusText, request }:{ data:any, statusText:any, request:any }) {
    await Queue.add('[PREV] CrawlerPrevidenciario', {
      data, statusText, request
    })
  }

  async crawl ({ isFirstPage, response, page }:{isFirstPage:boolean, response?:any, page?: string}) {
    if (isFirstPage === true && response === null) {
      console.log('Running first request')
      const response = await this.requestFirstUrl()
      console.log(`${response?.statusText} ${response?.request.res.responseUrl}`)

      if (response) {
        // @ts-ignore
        if (response.data.next) {
          // await this.addToVisit(response)
          // @ts-ignore
          await this.afterPageCrawl(response.data.next)
        }
      }
    } else {
      const resp = await this.requestNextPagePagination(page!)
      console.log(`${resp?.statusText} ${resp?.request.res.responseUrl}`)
      // await this.addToVisit({ data: resp?.data, request: resp?.request, statusText: resp?.statusText as any })
      // @ts-ignore
      await this.afterPageCrawl(resp.data.next)
    }
  }

  async afterPageCrawl (page?:string) {
    await this.crawl({ isFirstPage: false, page: page, response: undefined })
  }

  async execute () {
    try {
      await this.crawl({ isFirstPage: true, response: null })
    } catch (err) {
      console.log(err)
      throw new Error('Url não deu OK')
    }
  }
}
