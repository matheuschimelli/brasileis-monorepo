import { Request, Response } from 'express'
import { search as esSearch } from '@modules/elasticsearch/elasticsearch-service'


export const search = async (req: Request, res: Response) => {
    const results = await esSearch({
        str: 'test',
        from: 0,
        size: 15
    })
    return res.send(results)
}