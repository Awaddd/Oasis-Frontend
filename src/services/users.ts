import { validate } from "./../utils/helpers"
import { NewUser } from "../utils/types/users"
import { pb } from "./api"
import type { Record } from "pocketbase"
import { store } from "../state/store"
import { setCurrentUser, logout } from "../state/auth"

export async function createUser(user: NewUser) {
  const isValid = validate(user)
  if (!isValid.valid) return isValid.errorMessage

  const { email, password, username, confirmPassword } = user

  const data = {
    email,
    name: username,
    password,
    passwordConfirm: confirmPassword,
  }

  try {
    await pb.collection("users").create(data)
    login({ email, password })
  } catch (error) {
    return "Failed to authenticate"
  }
}

export async function login({ email, password }: { email: string; password: string }) {
  const isValid = validate([email, password])
  if (!isValid.valid) return isValid.errorMessage

  try {
    await pb.collection("users").authWithPassword(email, password)
  } catch (error) {
    return "Failed to authenticate"
  }
}

export async function loginWithProvider(provider: "google" | "twitter" | "facebook") {}

export async function signOut() {
  store.dispatch(logout())
  return pb.authStore.clear()
}

export function registerAuthListener() {
  pb.authStore.onChange(() => {
    if (pb.authStore.model == null) return
    store.dispatch(setCurrentUser(pb.authStore.model as Record))
  })
}
