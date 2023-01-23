import { NextApiRequest, NextApiResponse } from 'next'

import { postMessage } from 'src/repositories/message'
import { sendMail } from 'src/services/sendGrid'
import { errorHandler } from 'src/utils/api/error'
import { isValidMethod } from 'src/utils/api/postMethod'
import { parseSchema } from 'src/utils/zod/receptionForm'

async function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  if (!isValidMethod({ req })) {
    return res.status(405).json(errorHandler.handleWrongMethodRequest())
  }

  const reqBody = req.body as unknown
  const validationResult = parseSchema(reqBody)
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
