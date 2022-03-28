import type { FormParams } from 'src/types'

import { post } from 'src/services/axios'

export async function postMessage(params: FormParams): Promise<FormParams> {
  const json = await post<FormParams>('/messages', params)
  return json
}
