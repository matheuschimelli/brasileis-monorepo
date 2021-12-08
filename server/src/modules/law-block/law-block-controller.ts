import { Request, Response } from "express"
import {
    allBlocks,
    createLawBlock,
    removeLawBlock,
    createCodeService
} from '@modules/law-block/law-block-service'

export const index = async (req: Request, res: Response) => {
    const lawBlock = await allBlocks()
    return res.send(lawBlock)
}

export const create = async (req: Request, res: Response) => {
    const { data } = req.body
    const lawBlock = await createLawBlock(data)
    return res.send(lawBlock)
}

export const createCode = async (req: Request, res: Response) => {
    const { data } = req.body
    const lawBlock = await createCodeService(data)
    return res.send(lawBlock)
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