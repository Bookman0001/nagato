import { NextApiRequest, NextApiResponse } from 'next'

import { fetchSearchedArticles } from 'src/repositories/articles'
import { SearchParams } from 'src/types'

async function getSearchedArticles(req: NextApiRequest, res: NextApiResponse) {
  const reqBody = req.body as SearchParams
  console.log(reqBody)
  const articlesResponse = await fetchSearchedArticles(reqBody)
    .then((articles) => {
      return articles
    })
    .catch(() => {
      return null
    })
  return res.status(200).json(articlesResponse)
}

export default getSearchedArticles
