import { ZodIssue } from 'zod'

import { Error, errorCode } from 'src/types/error'

const handleBadRequest = ({ zodIssues }: { zodIssues: ZodIssue[] }): Error => {
  return {
    errorCode: errorCode.badRequest,
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
    errorCode: errorCode.wrongMethodRequest,
    issues: [{ message: 'not alloed method' }],
  }
}

const handleGeneralError = (): Error => {
  return {
    errorCode: errorCode.internalServerError,
    issues: [{ message: 'internal server error happened' }],
  }
}

export const errorHandler = {
  handleBadRequest,
  handleWrongMethodRequest,
  handleGeneralError,
}
