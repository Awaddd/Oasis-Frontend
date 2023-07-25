import { validate } from "./../utils/helpers"
import { NewUser } from "../types/users"
import { pb } from "./api"
import { ClientResponseError, Record } from "pocketbase"
import { store } from "../state/store"
import { setCurrentUser, logout } from "../state/auth"
import { userMapper } from "../network/user-mapper"

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
    if (!(error instanceof ClientResponseError)) return

    if (error?.data?.data?.email?.message) {
      return error?.data?.data?.email?.message
    }

    return error.data.message
  }
}

export async function login({ email, password }: { email: string; password: string }) {
  const isValid = validate([email, password])
  if (!isValid.valid) return isValid.errorMessage

  try {
    await pb.collection("users").authWithPassword(email, password)
  } catch (error) {
    if (!(error instanceof ClientResponseError)) return

    return error.data.message
  }
}

export async function loginWithProvider(provider: "google" | "twitter" | "facebook") {}

export function signOut() {
  store.dispatch(logout())
  return pb.authStore.clear()
}

export function registerAuthListener() {
  pb.authStore.onChange(() => {
    if (pb.authStore.model == null) return
    if (store.getState().auth.user != null) return

    const user = userMapper(pb.authStore.model as Record)
    store.dispatch(setCurrentUser(user))
  })
}
