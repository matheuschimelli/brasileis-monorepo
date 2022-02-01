import { Request, Response } from 'express'
import { search as esSearch } from '@modules/elasticsearch/elasticsearch-service'


export const search = async (req: Request, res: Response) => {
    const { q: query, p: page, filters } = req.body

    const pageNumber = page ? Number(page) : 1

    const str = query as string
    let fixedQuery = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

    var synonyms = [{
        words: 'cpc, cpc15, CPC, CPC15, código de processo',
        target: 'código de processo civil'
    }, {
        words: 'cdc, CDC',
        target: 'codigo de defesa do consumidor'
    },
    {
        words: 'cpp, CPP',
        target: 'codigo de processo penal'
    },
    {
        words: 'cc, CC',
        target: 'codigo civil'
    }
    ]

    const generateSearchString = (searchString: string, synonyms: any[]) => {
        for (const syn of synonyms) {
            const wordList = syn.words
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .split(",")

            for (const word of wordList) {
                if (searchString.indexOf(word) !== -1) {
                    return searchString
                        .replace(word, syn.target)
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase()
                }
            }
        }
    }


    try {
        const results = await esSearch({
            searchQuery: generateSearchString(fixedQuery, synonyms) || fixedQuery,
            page: pageNumber,
            filters
        })
        return res.send(results)
    } catch (err) {
        return res.status(400).send(err)
    }

}