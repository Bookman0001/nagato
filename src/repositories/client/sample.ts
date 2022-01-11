export async function fetchMockedRes() {
  const response = await window.fetch(`${window.location.origin}/sample`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  return response.json()
}
