import { post } from 'src/services/axios'
import type { FormInput } from 'src/utils/zod/receptionForm'

export async function postMessage(params: FormInput): Promise<FormInput> {
  const json = await post<FormInput>('/messages', params)
  return json
}
