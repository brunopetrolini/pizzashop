import { z } from 'zod'

import { api } from '@/lib/axios'

const signInSchema = z.object({
  email: z.string().email(),
})

export type SignInPayload = z.infer<typeof signInSchema>

export async function signIn(payload: SignInPayload) {
  await api.post('/authenticate', payload)
}
