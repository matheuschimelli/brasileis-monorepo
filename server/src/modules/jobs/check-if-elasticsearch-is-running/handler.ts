import { Job } from "bull"
import axios from 'axios'
import { sendAlertToTelegram } from "@modules/server-notifier/server-notifier-service"

const handler = async (job: Job) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://os.brasileis.com.br/',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'ApiKey T3RFejFINEJPSXBoUHBGRFg3SHE6QVhCWlUyT2lRVXFaNjVzMnE2MzQtUQ=='
            }
        }
        //@ts-ignore
        const res = await axios.request(options)

        if (res.statusText !== "OK") {
            sendAlertToTelegram(`
            🦅🐎🏖️ ATENÇÃOOOO. Olá querido Matheus. Aqui é o seu robo automático.

            Gostaria encarecidamente de lhe informar que o seu servidor do ElasticSearch
            CAIU DE NOVO. 

            Abraços. Lhe desejo melhoras e tudo de bom. Um grande abraço!
            
            `);
        }


    } catch (error) {
        return Promise.reject(error)
    }
}

export default handler

