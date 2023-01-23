import { ZodIssue } from 'zod'

import { Error } from 'src/types'

const handleBadRequest = ({ zodIssues }: { zodIssues: ZodIssue[] }): Error => {
  return {
    errorCode: 'ERR400',
    issues: zodIssues.map((issue) => {
      return {
        fieldName: String(issue.path[0]),
        message: issue.message,
      }
    }),
  }
}

const handleWrongMethodRequest = (): Error => {
  return {
    errorCode: 'ERR405',
    issues: [{ message: 'not alloed method' }],
  }
}

const handleGeneralError = (): Error => {
  return {
    errorCode: 'ERR500',
    issues: [{ message: 'internal server error happened' }],
  }
}

export const errorHandler = {
  handleBadRequest,
  handleWrongMethodRequest,
  handleGeneralError,
}
