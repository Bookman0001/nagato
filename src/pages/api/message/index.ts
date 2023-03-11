import { NextApiRequest, NextApiResponse } from 'next'

import { postMessage } from 'src/repositories/message'
import { sendMail } from 'src/services/sendGrid'
import { errorHandler, isValidMethod } from 'src/utils/api'
import { parseSchema } from 'src/utils/zod/receptionForm'

interface _NextApiRequest extends NextApiRequest {
  body: unknown
}

async function sendMessage(req: _NextApiRequest, res: NextApiResponse) {
  if (!isValidMethod({ req })) {
    return res.status(405).json(errorHandler.handleWrongMethodRequest())
  }

  const validationResult = parseSchema(req.body)
  if (!validationResult.success) {
    const zodIssues = validationResult.error.errors
    return res.status(400).json(errorHandler.handleBadRequest({ zodIssues }))
  }

  return await postMessage(validationResult.data)
    .then(async () => {
      await sendMail(validationResult.data)
        .then(() => {
          return res.status(200).json({ message: 'request is successful' })
        })
        .catch(() => {
          return res.status(500).json(errorHandler.handleGeneralError())
        })
    })
    .catch(() => {
      return res.status(500).json(errorHandler.handleGeneralError())
    })
}

export default sendMessage
