import { NextApiRequest, NextApiResponse } from 'next'

import { fetchSearchedArticles } from 'src/repositories/articles'
import { parseSchema } from 'src/utils/zod/searchParams'

async function getSearchedArticles(req: NextApiRequest, res: NextApiResponse) {
  const reqBody = req.body as unknown
  const validationResult = parseSchema(reqBody)
  if (!validationResult.success) {
    return res.status(400).json(validationResult.error)
  }
  return await fetchSearchedArticles(validationResult.data)
    .then((articles) => {
      return res.status(200).json(articles)
    })
    .catch(() => {
      return res.status(500).json({ message: 'search error' })
    })
}

export default getSearchedArticles
