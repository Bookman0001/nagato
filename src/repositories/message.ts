import { post } from 'src/services/axios'
import { FormParams } from 'src/types'

export async function postMessage(params: FormParams): Promise<FormParams> {
  const json = await post<FormParams>('/messages', params)
  return json
}
