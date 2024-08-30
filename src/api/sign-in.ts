import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
}

export async function signIn(data: SignInBody) {
  await api.post('/authenticate', data)
}
