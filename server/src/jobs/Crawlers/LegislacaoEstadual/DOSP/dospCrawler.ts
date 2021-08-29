import axios from 'axios'
import Queue from '../../../Queue'
import { getRepository } from 'typeorm'
import DiarioOficial from '../../../../models/Diario'
// import DiarioOficialService from '../../../../services/diarioOficial/diarioOficial'

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
const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]
/**
 * DOSP - Diário Oficial de São Paulo.
 */

async function createDiarioOficial () {
  try {
    const diarioRepo = getRepository(DiarioOficial)
    const newDiario = diarioRepo.create()
    newDiario.titulo = 'teste'

    await diarioRepo.save(newDiario)

    return newDiario
  } catch (error) {
    throw new Error(error)
  }
}

export default async function runDOSPCrawler () {
  try {
    // const todayURL = `http://diariooficial.imprensaoficial.com.br/doflash/prototipo/${dayjs().tz('America/Sao_Paulo').year()}/${meses[dayjs().tz('America/Sao_Paulo').month()]}/${dayjs().tz('America/Sao_Paulo').format('DD')}/exec1/pdf/pg_0001.pdf`
    const data = await createDiarioOficial()

    console.log('data result', data)
    const generateUrl = (page: number) => `http://diariooficial.imprensaoficial.com.br/doflash/prototipo/2021/Janeiro/06/exec1/pdf/pg_${page.toString().padStart(4, '0')}.pdf`

    for (var i = 1; i < 2000; i++) {
      try {
        const response = await axios.get(generateUrl(i), { responseType: 'blob' })

        console.log(`${response.status} - page ${i}`)

        await Queue.add('[DOSP] Processor', {
          url: generateUrl(i),
          estado: 'São Paulo',
          // parent: createdDO
          id: 'ID RANDOMICO',
          data: data.id
        })
      } catch (error) {
        console.log(`${error.response.status} - page ${i}`)
        break
      }
    }

    return Promise.resolve()
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}
