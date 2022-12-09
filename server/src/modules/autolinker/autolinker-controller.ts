import { Request, Response } from 'express'
import { extractLeiFromJurisprudencia, getBlocks } from "./autolinker-service"

export const postProcessData = async (req: Request, res: Response) => {

    const { data } = req.body!

    const result = extractLeiFromJurisprudencia(data)

    const lawBlocks = await getBlocks(result)

    return res.send({ lawBlocks, result })
}