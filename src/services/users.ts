import { User } from "../utils/types/Users"
import { supabase } from "./api"

export async function createUser({ email, password, username }: User) {
  return await supabase.auth.signUp(
    {
      email,
      password,
    },
    {
      data: {
        username,
      },
    },
  )
}

export async function login({ email, password }: User) {
  return await supabase.auth.signIn({
    email,
    password,
  })
}

export async function loginWithProvider(provider: "google" | "twitter" | "facebook") {
  return await supabase.auth.signIn({
    provider,
  })
}

export async function logout() {
  return await supabase.auth.signOut()
}
