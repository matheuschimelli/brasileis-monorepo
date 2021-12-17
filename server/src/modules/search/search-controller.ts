import { Request, Response } from "express"
// import {
//     search as searchService
// } from '@modules/elasticsearch/elasticsearch-service'

export const search = async (req: Request, res: Response) => {
    const searchQuery = req.query.q

    // const results = await searchService({
    //     str: searchQuery?.toString()!,
    //     from: 0,
    //     size: 15
    // })
    const results = null
    if (!results) return res.send({ msg: 'Nada encontrado', success: false })
    return res.send({ success: true, data: results })
}

