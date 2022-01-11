import { Request, Response } from "express"
import * as topicSservice from '@modules/topic/topic-service'
import { body } from 'express-validator'


export const validate = () => {
    return [
        body('name', 'Nome do tópico não pode estar em branco').exists().notEmpty(),
        body('description', 'Descrição do tópico não pode estar em branco').notEmpty(),
    ]
}

export const index = async (req: Request, res: Response) => {
    try {
        const topic = await topicSservice.findAll()
        return res.send(topic)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ success: false, message: 'Não foi possível carregar os tópicos.' })
    }
}

export const show = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const topic = await topicSservice.findOneById(id)
        return res.send(topic)

    } catch (error) {
        console.log(error)
        return res.status(500).send({ success: false, message: 'Não foi possível carregar os tópicos.' })
    }
}

export const create = async (req: Request, res: Response) => {
    const { name, description } = req.body
    try {
        const topic = await topicSservice.create({
            name,
            description
        })
        return res.send(topic)

    } catch (error) {
        console.log(error)
        return res.status(500).send({ success: false, message: 'Não foi possível carregar os tópicos.' })
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, description } = req.body
    try {
        const topic = await topicSservice.update({
            id,
            name,
            description
        })
        return res.send(topic)

    } catch (error) {
        console.log(error)
        return res.status(500).send({ success: false, message: 'Não foi possível carregar os tópicos.' })
    }
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const topic = await topicSservice.remove(id)
        return res.send(topic)

    } catch (error) {
        console.log(error)
        return res.status(500).send({ success: false, message: 'Não foi possível carregar os tópicos.' })
    }
}