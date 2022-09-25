import { useState } from 'react'

import { postMessage } from 'src/repositories/client/message'
import type { FormParams } from 'src/types'

export function useCreateMessage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const createMessage = async (params: FormParams) => {
    setIsLoading(true)
    return await postMessage(params)
      .then(() => {
        setIsLoading(false)
        return true
      })
      .catch((e) => {
        setIsLoading(false)
        setError(e)
        return false
      })
  }

  return {
    isLoading,
    error,
    createMessage,
  }
}
