import { NextApiRequest, NextApiResponse } from 'next'

import { validateFormParams } from 'src/utils/api'
import { postMessage } from 'src/repositories/message'
import { sendMail } from 'src/services/sendGrid'
import { FormParams } from 'src/types'

async function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  const reqBody = req.body as FormParams | undefined

  if (!reqBody || !validateFormParams(reqBody)) {
    return res.status(400).json('bad request')
  }

  postMessage(reqBody)
    .then(() => {
      sendMail(reqBody)
        .then(() => {
          return res.status(200).json('success')
        })
        .catch(() => {
          return res.status(500).json('Send Grid Error')
        })
    })
    .catch(() => {
      return res.status(500).json('Server Internal Error')
    })
}

export default sendMessage
