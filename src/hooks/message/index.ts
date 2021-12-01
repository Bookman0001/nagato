import { postMessage } from 'src/repositories/client/message'
import { FormParams } from 'src/types'
import { useState } from 'react'

export function useCreateMessage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Object | null>(null)

  const createMessage = async (params: FormParams) => {
    setIsLoading(true)
    try {
      await postMessage(params)
      setIsLoading(false)
      return true
    } catch (e) {
      setIsLoading(false)
      if (typeof e === 'object') {
        setError(e)
      }
      return false
    }
  }

  return {
    isLoading,
    error,
    createMessage,
  }
}
