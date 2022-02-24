import { Request, Response } from "express"
import {
    allBlocks,
    removeLawBlock,
    findAll,
    search as searchBlock,
    findBlockById,
    contentLawBlockNumbers,
    getIndexOfLawBlocks
} from '@modules/law-block/law-block-service'

export const index = async (req: Request, res: Response) => {
    const lawBlock = await allBlocks()
    return res.send(lawBlock)
}

export const getAllById = async (req: Request, res: Response) => {
    const { skip } = req.query
    if (!skip) return res.send({ success: false, message: 'Missing skip items' })

    try {
        const { id } = req.params
        const data = await findAll(id, Number(skip), 10)
        return res.send(data)
    } catch (err: any) {
        console.log(err)
        return res.status(500).send("Não foi possível encontrar leis.")
    }
}
export const getSingleBlock = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const data = await findBlockById(id)
        return res.send(data)
    } catch (err: any) {
        console.log(err)
        return res.status(500).send("Não foi possível encontrar leis.")
    }
}
export const search = async (req: Request, res: Response) => {
    try {
        const { q } = req.query
        const data = await searchBlock(q?.toString()!)
        return res.send(data)

    } catch (err: any) {
        console.log(err)
        return res.status(500).send("Não foi possível encontrar leis.")
    }
}


export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const law = await removeLawBlock(id)
        return res.send(law)

    } catch (error: any) {
        console.log(error)
        return res.status(500).send("Nada alterado")
    }
}

export const getCodeNumbers = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const law = await contentLawBlockNumbers(id)
        return res.send(law)

    } catch (error: any) {
        console.log(error)
        return res.status(500).send("Nada alterado")
    }
}

export const getLawBlocksCodes = async (req: Request, res: Response) => {
    try {
        const data = await getIndexOfLawBlocks()
        return res.send(data)

    } catch (error) {
        console.log(error)
        return res.status(500).send("Nada alterado")
    }
}