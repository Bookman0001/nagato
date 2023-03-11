import { NextApiRequest, NextApiResponse } from 'next'

import { fetchSearchedArticles } from 'src/repositories/articles'
import { errorHandler, isValidMethod } from 'src/utils/api'
import { parseSchema } from 'src/utils/zod/searchParams'

interface _NextApiRequest extends NextApiRequest {
  body: unknown
}

async function getSearchedArticles(req: _NextApiRequest, res: NextApiResponse) {
  if (!isValidMethod({ req })) {
    return res.status(405).json(errorHandler.handleWrongMethodRequest())
  }

  const validationResult = parseSchema(req.body)
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
