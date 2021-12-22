import { Request, Response } from 'express'
import {
    index,
    show,
    create,
    update,
    remove
} from "@modules/crawler-type/crawler-type-service"
import { body } from 'express-validator'


export const validate = () => {
    return [
        body('name', 'Nome do crawler não pode estar em branco').exists().notEmpty(),
        body('description', 'Descrição não pode estar em branco').notEmpty()
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