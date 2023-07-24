import { validate } from "./../utils/helpers"
import { NewUser } from "../utils/types/Users"
import { pb } from "./api"
import { userMapper } from "../network/user-mapper"
import type { Record } from "pocketbase"

export async function createUser(newUser: NewUser) {
  // email = "admin@mail.com"
  // password = "password123"

  const isValid = validate(newUser)
  if (!isValid.valid) return isValid.errorMessage

  const { email, password, username, confirmPassword } = newUser

  const data = {
    email,
    name: username,
    password,
    passwordConfirm: confirmPassword,
  }

  try {
    await pb.collection("users").create(data)
    login(email, password)
  } catch (error) {
    return (isValid.errorMessage = "Failed to authenticate")
  }
}

export async function login(email: string, password: string) {
  email = "admin@mail.com"
  password = "password123"

  const isValid = validate([email, password])
  if (!isValid.valid) return isValid.errorMessage

  try {
    await pb.collection("users").authWithPassword(email, password)
  } catch (error) {
    return (isValid.errorMessage = "Failed to authenticate")
  }
}

export async function loginWithProvider(provider: "google" | "twitter" | "facebook") {}

export async function logout() {
  // set currentuser state property to null
  return pb.authStore.clear()
}

export function registerListener() {
  pb.authStore.onChange(() => {
    if (pb.authStore.model == null) return
    const user = userMapper(pb.authStore.model as Record)

    // update state

    // currentUser.set({
    //   user,
    //   auth: pb.authStore.model,
    // })
  })
}
