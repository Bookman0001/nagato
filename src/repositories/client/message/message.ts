import type { FormInput } from 'src/utils/zod/receptionForm'

export async function postMessage(params: FormInput) {
  const requestParams: FormInput = {
    email: params.email,
    name: params.name,
    content: params.content,
  }
  return await window
    .fetch(`${window.location.origin}/api/message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestParams),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('API Error')
      }
    })
}
