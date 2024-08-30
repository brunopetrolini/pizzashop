import Axios from 'axios'

import { env } from '@/env'

export const api = Axios.create({
  baseURL: env.VITE_API_URL,
})
