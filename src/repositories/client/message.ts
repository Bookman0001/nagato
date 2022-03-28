import type { FormParams } from 'src/types'

export async function postMessage(params: FormParams) {
  const requestParams: FormParams = {
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
