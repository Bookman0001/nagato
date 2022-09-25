import { NextApiRequest, NextApiResponse } from 'next'

import { fetchSearchedArticles } from 'src/repositories/articles'
import type { SearchParams } from 'src/types'

async function getSearchedArticles(req: NextApiRequest, res: NextApiResponse) {
  const reqBody = req.body as SearchParams
  return await fetchSearchedArticles(reqBody)
    .then((articles) => {
      return res.status(200).json(articles)
    })
    .catch(() => {
      return res.status(500).json({ message: 'search error' })
    })
}

export default getSearchedArticles
