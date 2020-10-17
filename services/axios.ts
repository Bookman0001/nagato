import axios, { AxiosError } from 'axios'

const X_API_BASE_URL: string = process.env.X_API_BASE_URL
const X_API_KEY: string = process.env.X_API_KEY

export async function get<T = any>(path: string) {
  const response = await axios
    .get<T>(X_API_BASE_URL + path, {
      headers: {
        'Content-type': 'application/json',
        'X-API-KEY': X_API_KEY,
      },
    })
    .catch((error: AxiosError) => {
      throw error
    })
  return response.data
}
