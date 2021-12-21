import { Request, Response } from 'express'
import { index, show, create, remove } from "@modules/crawler/crawler-service"
import { body } from 'express-validator'


export const validate = () => {
    return [
        body('name', 'Nome do crawler não pode estar em branco').exists().notEmpty(),
        body('description', 'Descrição não pode estar em branco').notEmpty(),
        body('isUrlOnly', 'Escolha se o crawler é de url ').isBoolean(),
        body('cron', 'Cron não é válido').isString().matches(/^(\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\*\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\*|([0-9]|1[0-9]|2[0-3])|\*\/([0-9]|1[0-9]|2[0-3])) (\*|([1-9]|1[0-9]|2[0-9]|3[0-1])|\*\/([1-9]|1[0-9]|2[0-9]|3[0-1])) (\*|([1-9]|1[0-2])|\*\/([1-9]|1[0-2])) (\*|([0-6])|\*\/([0-6]))$/).notEmpty(),
        body('notifyUpdate', 'Escolha se o crawler deve notificar sobre atualizações').isBoolean(),
        body('lawBlockId', 'Escolha um bloco de lei para inserir os dados').notEmpty(),
    ]
}

export const indexController = async (req: Request, res: Response) => {
    const { page } = req.query

    const crawlers = await index(Number(page?.toString()))

    if (!crawlers || crawlers.length !== 0) return res.status(404).send({ success: false, message: 'Nenhum crawler cadastrado' })

    return res.send(crawlers)
}

export const showController = async (req: Request, res: Response) => {
    const { id } = req.params
    const crawler = await show(id)

    if (!crawler) return res.status(404).send({ success: false, message: 'Nenhum crawler cadastrado' })

    return res.send(crawler)
}

export const createController = async (req: Request, res: Response) => {
    try {
        const newCrawler = await create({ ...req.body })
        return res.send(newCrawler)
    } catch (err) {
        console.log(err)
        return res.status(400).send({ success: false, message: 'Não foi possível realizar a requisição. Tente mais tarde' })
    }
}

export const updateController = async (req: Request, res: Response) => {
    const { id } = req.params
    const crawler = await show(id)

    if (!crawler) return res.status(404).send({ success: false, message: 'Nenhum crawler cadastrado' })

    return res.send(crawler)
}

export const removeController = async (req: Request, res: Response) => {
    const { id } = req.params

    const crawler = await remove(id)
    return crawler
}