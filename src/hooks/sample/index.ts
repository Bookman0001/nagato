import useSWR from 'swr'

import { mswClientController } from 'src/controllers/sample'

export function useMockedRes() {
  const { getMockedRes } = mswClientController()
  const { data, error } = useSWR(`/sample`, getMockedRes)
  return { data, error }
}
