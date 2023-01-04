import { useState } from 'react'

import { postMessage } from 'src/repositories/client/message'
import type { FormInput } from 'src/utils/zod/receptionForm'

export function useCreateMessage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const createMessage = async (params: FormInput) => {
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
