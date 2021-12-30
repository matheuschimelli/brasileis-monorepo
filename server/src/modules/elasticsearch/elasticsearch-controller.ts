import { Request, Response } from 'express'
import { search as esSearch } from '@modules/elasticsearch/elasticsearch-service'


export const search = async (req: Request, res: Response) => {
    const { q: query, p: page } = req.query

    const pageNumber = page ? Number(page) : 1

    try {
        const results = await esSearch({
            searchQuery: query as string,
            page: pageNumber
        })
        return res.send(results)
    } catch (err) {
        return res.status(400).send(err)
    }

}