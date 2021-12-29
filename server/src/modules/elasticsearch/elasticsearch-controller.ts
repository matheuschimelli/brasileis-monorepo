import { Request, Response } from 'express'
import { search as esSearch } from '@modules/elasticsearch/elasticsearch-service'


export const search = async (req: Request, res: Response) => {
    const { q } = req.query

    try {
        console.log("QUERYY", q)
        const results = await esSearch({
            searchQuery: q as string,
            from: 0,
            size: 15
        })
        return res.send(results)
    } catch (err) {
        return res.status(400).send(err)
    }

}