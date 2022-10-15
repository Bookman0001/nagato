import { NextApiRequest } from 'next'

export const isValidMethod = ({ req }: { req: NextApiRequest }) => {
  if (req.method === 'POST') {
    return true
  }
  return false
}
