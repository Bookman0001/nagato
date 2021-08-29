import axios, { AxiosError } from 'axios'

const X_API_BASE_URL: string = process.env.X_API_BASE_URL || ''
const X_API_KEY: string = process.env.X_API_KEY || ''

axios.defaults.baseURL = X_API_BASE_URL
axios.defaults.headers = {
  'Content-type': 'application/json',
  'X-API-KEY': X_API_KEY,
}

export async function get<T>(path: string) {
  const response = await axios
    .get<T>(path)
    .then((response) => {
      return response.data
    })
    .catch((error: AxiosError) => {
      throw error
    })
  return response
}
