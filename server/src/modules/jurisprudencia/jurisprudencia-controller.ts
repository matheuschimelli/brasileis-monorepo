import { Request, Response } from "express"
import {
    findAll,
    findOneById
} from '@modules/jurisprudencia/jurisprudencia-service'

export const index = async (req: Request, res: Response) => {
    const allJurisprudencias = await findAll()
    return res.send(allJurisprudencias)
}

export const show = async (req: Request, res: Response) => {
    const { id } = req.params

    const juris = await findOneById(id)
    return res.send(juris)
}