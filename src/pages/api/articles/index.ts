import { NextApiRequest, NextApiResponse } from 'next'

import { fetchSearchedArticles } from 'src/repositories/articles'
import { errorHandler } from 'src/utils/api/error'
import { isValidMethod } from 'src/utils/api/postMethod'
import { parseSchema } from 'src/utils/zod/searchParams'

async function getSearchedArticles(req: NextApiRequest, res: NextApiResponse) {
  if (!isValidMethod({ req })) {
    return res.status(405).json(errorHandler.handleWrongMethodRequest())
  }

  const reqBody = req.body as unknown
  const validationResult = parseSchema(reqBody)
  if (!validationResult.success) {
    const zodIssues = validationResult.error.errors
    return res.status(400).json(errorHandler.handleBadRequest({ zodIssues }))
  }

  return await fetchSearchedArticles(validationResult.data)
    .then((articles) => {
      return res.status(200).json(articles)
    })
    .catch(() => {
      return res.status(500).json(errorHandler.handleGeneralError())
    })
}

export default getSearchedArticles
