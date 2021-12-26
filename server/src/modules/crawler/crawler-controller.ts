import { Request, Response } from 'express'
import { index, show, create, update, remove, runCrawler } from "@modules/crawler/crawler-service"
import { body } from 'express-validator'


export const validate = () => {
    return [
        body('name', 'Nome do crawler não pode estar em branco').exists().notEmpty(),
        body('crawlerTypeId', 'Id do tipo do crawler não pode estar em branco').notEmpty(),
        body('description', 'Descrição não pode estar em branco').notEmpty(),
        body('mainBlockTitle', 'Título do bloco não pode estar em branco').notEmpty(),
        body('mainBlockDescription', 'Descrição do bloco não pode estar em branco').notEmpty(),
        body('version', 'Versão do bloco não pode estar em branco').notEmpty(),
        body('slug', 'Sigla do bloco não pode estar em branco').notEmpty(),
        body('cron', 'Cron não é válido').isString().matches(/^(\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\*\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\*|([0-9]|1[0-9]|2[0-3])|\*\/([0-9]|1[0-9]|2[0-3])) (\*|([1-9]|1[0-9]|2[0-9]|3[0-1])|\*\/([1-9]|1[0-9]|2[0-9]|3[0-1])) (\*|([1-9]|1[0-2])|\*\/([1-9]|1[0-2])) (\*|([0-6])|\*\/([0-6]))$/).notEmpty(),
    ]
}

export const indexController = async (req: Request, res: Response) => {
    const { page } = req.query

    const crawlers = await index(Number(page?.toString()))

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
    const crawler = await update({ id, ...req.body })

    if (!crawler) return res.status(404).send({ success: false, message: 'Nenhum crawler cadastrado' })

    return res.send(crawler)
}

export const removeController = async (req: Request, res: Response) => {
    const { id } = req.params

    const crawler = await remove(id)
    return res.send(crawler)
}

export const runCrawlerController = async (req: Request, res: Response) => {
    const { id } = req.params

    const crawler = await runCrawler(id)

    if (crawler.success) return res.send(crawler)

    return res.status(400).send(crawler)
}