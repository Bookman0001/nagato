import { valueOf } from 'src/types/util'

/* Error Definition */
export const errorCode = {
  badRequest: 'ERR400',
  wrongMethodRequest: 'ERR405',
  internalServerError: 'ERR500',
} as const

type ErrorCode = valueOf<typeof errorCode>

type Issues = Array<{ fieldName?: string; message: string }>

export type Error = Readonly<{
  errorCode: ErrorCode
  issues: Issues
}>
