import type { FormParams } from 'src/types'

export function validateFormParams(params: FormParams | undefined) {
  if (!params?.email) {
    return false
  }
  if (!params?.name) {
    return false
  }
  if (!params?.content) {
    return false
  }
  return true
}
