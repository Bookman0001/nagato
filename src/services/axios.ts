import axios, { AxiosError } from 'axios'

const X_API_BASE_URL: string = process.env.X_API_BASE_URL || ''
const X_API_KEY: string = process.env.X_API_KEY || ''

// https://github.com/axios/axios
axios.defaults.baseURL = X_API_BASE_URL
axios.defaults.headers.common['Content-type'] = 'application/json'
axios.defaults.headers.common['X-MICROCMS-API-KEY'] = X_API_KEY

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

export async function post<T>(path: string, data: any) {
  const response = await axios
    .post<T>(path, data)
    .then((response) => {
      return response.data
    })
    .catch((error: AxiosError) => {
      throw error
    })
  return response
}
