import { env } from '@/env.mjs'
import axios from 'axios'
const URL = env.NODE_ENV === 'production' ? env.NEXT_PUBLIC_PROD_API_URL : env.NEXT_PUBLIC_DEV_API_URL
console.log('URL', URL)
const AxiosInstance = axios.create({
  baseURL: URL as string,
})

function setToken(token: string) {
  AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

function removeToken() {
  delete AxiosInstance.defaults.headers.common['Authorization']
}

export { AxiosInstance, setToken, removeToken }
