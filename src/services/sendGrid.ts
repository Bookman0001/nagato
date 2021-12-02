import sgMail from '@sendgrid/mail'

import { FormParams } from 'src/types'

type SgMessage = {
  to: string
  from: string
  subject: string
  text: string
}

const SEND_GRID_KEY: string = process.env.SEND_GRID_KEY || ''
const ADMIN_EMAIL: string = process.env.SEND_GRID_ADMIN_EMAIL || ''

export async function sendMailViaSendGrid(params: FormParams) {
  sgMail.setApiKey(SEND_GRID_KEY)
  const msg: SgMessage = {
    to: params.email,
    from: ADMIN_EMAIL,
    subject: 'Thanks!🥳',
    text: `${params.name}様のメッセージを受け付けました。\n${params.content}`,
  }
  return await sgMail.send(msg).catch((e) => {
    throw e
  })
}
