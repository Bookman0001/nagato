import useSWRMutation from 'swr/mutation'

import { postMessage } from 'src/repositories/client/message'
import type { FormInput } from 'src/utils/zod/receptionForm'

export function useCreateMessage() {
  const createMessage = async (_: string, { arg }: { arg: FormInput }) => {
    const { success } = await postMessage(arg)
    return { success }
  }

  const { isMutating, trigger } = useSWRMutation(
    '/api/message',
    createMessage,
    {
      revalidate: false,
    }
  )

  return {
    isLoading: isMutating,
    createMessage: trigger,
  }
}
