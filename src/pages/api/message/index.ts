import { NextApiRequest, NextApiResponse } from 'next'

import { postMessage } from 'src/repositories/message'
import { sendMail } from 'src/services/sendGrid'
import { parseSchema } from 'src/utils/zod/receptionForm'

async function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  const reqBody = req.body as unknown
  const validationResult = parseSchema(reqBody)
  if (!validationResult.success) {
    return res.status(400).json(validationResult.error)
  }
  postMessage(validationResult.data)
    .then(() => {
      sendMail(validationResult.data)
        .then(() => {
          return res.status(200).json({ message: 'success' })
        })
        .catch(() => {
          return res.status(500).json({ message: 'sendgrid error' })
        })
    })
    .catch(() => {
      return res.status(500).json({ message: 'internal server error' })
    })
}

export default sendMessage
