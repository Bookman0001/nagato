import { NextApiRequest, NextApiResponse } from 'next'

import { validateFormParams } from 'src/util/api'
import { sendMessageViaSendGrid } from 'src/services/sendGrid'
import { FormParams } from 'src/types'

async function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  const reqBody = req.body as FormParams | undefined

  if (!reqBody || !validateFormParams(reqBody)) {
    return res.status(400).json('bad request')
  }
  sendMessageViaSendGrid(reqBody)
    .then(() => {
      return res.status(200).json('success')
    })
    .catch(() => {
      return res.status(500).json('SendGrid Error')
    })
}

export default sendMessage
