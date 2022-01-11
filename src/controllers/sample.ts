import { fetchMockedRes } from 'src/repositories/client/sample'

export function mswClientController() {
  const getMockedRes = async () => {
    return await fetchMockedRes()
  }

  return {
    getMockedRes,
  }
}
