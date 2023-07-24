import { createUserSessionObject } from "./../utils/helpers"
import { Session } from "../utils/types/Users"
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

export function registerListener(): Session | null {
  let sesh: Session | null = null

  supabase.auth.onAuthStateChange((_event, session) => {
    console.log("session from supabase", session)

    if (!session) {
      sesh = null
    }

    const user = {
      email: session?.user?.email,
      user_metadata: {
        username: session?.user?.user_metadata.full_name,
      },
    }

    sesh = createUserSessionObject(user, session)
  })

  return sesh
}
