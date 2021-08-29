import axios from 'axios'
import { getRepository } from 'typeorm'
import Queue from '../../../Queue'
import { Category } from '../../../../models/Category'
import { SubCategory } from '../../../../models/SubCategory'

// import DiarioOficial from '../../../../models/Diario'

import Crawler from '../../../../models/Crawler'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import weekday from 'dayjs/plugin/weekday'
import pt from 'dayjs/locale/pt'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)

dayjs.locale({
  ...pt,
  weekStart: 1
})
declare interface DiarioOficialSPParams {
    id:string|number
    name:string
    categories:Category[]
    subCategories:SubCategory[]
    baseUrl:string
    urlsToVisit:string[]

}
export default class DiarioOficialSP {
    public id:string|number
    public name:string
    public categories:Category[]
    public subCategories:SubCategory[]
    public baseUrl:string
    public urlsToVisit:string[]

    constructor (params:DiarioOficialSPParams) {
      this.id = params.id
      this.name = params.name
      this.categories = params.categories
      this.subCategories = params.subCategories
      this.baseUrl = params.baseUrl
      this.urlsToVisit = params.urlsToVisit
    }

    async runCrawler () {
      const diarioRepo = getRepository(Crawler)
      try {
        const newDiario = diarioRepo.findOne({
          where: {
            id: this.id
          }
        })

        if (newDiario) {
          console.log('New diario criado')
          console.log(newDiario)

          // const todayURL = `http://diariooficial.imprensaoficial.com.br/doflash/prototipo/${dayjs().tz('America/Sao_Paulo').year()}/${meses[dayjs().tz('America/Sao_Paulo').month()]}/${dayjs().tz('America/Sao_Paulo').format('DD')}/exec1/pdf/pg_0001.pdf`

          // console.log('data result', data)
          const generateUrl = (page: number) => `http://diariooficial.imprensaoficial.com.br/doflash/prototipo/2021/Janeiro/06/exec1/pdf/pg_${page.toString().padStart(4, '0')}.pdf`

          for (var i = 1; i < 2000; i++) {
            try {
              const response = await axios.get(generateUrl(i), { responseType: 'blob' })

              console.log(`${response.status} - page ${i}`)

              await Queue.add('DOSP [Worker]', {
                url: generateUrl(i),
                estado: 'São Paulo',
                // parent: createdDO
                id: 'ID RANDOMICO aleatorio'

              })
            } catch (error) {
              console.log(`${error.response.status} - page ${i}`)
              break
            }
          }

          return Promise.resolve()
        }
      } catch (err) {
        console.log(err)
        throw new Error(err)
      }
    }
}
