const X_API_BASE_URL = process.env.X_API_BASE_URL ?? ''
const X_API_KEY = process.env.X_API_KEY ?? ''

const headers = {
  'Content-type': 'application/json',
  'X-MICROCMS-API-KEY': X_API_KEY,
}

export async function get<T>(path: string) {
  const response = await fetch(`${X_API_BASE_URL}${path}`, {
    method: 'GET',
    headers,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json() as Promise<T>
  })
  return response
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function post<T>(path: string, data: any) {
  const response = await fetch(path, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json() as Promise<T>
  })
  return response
}
