import { UseFormRegister } from "react-hook-form"
import type { Admin, Record } from "pocketbase"

interface BaseUser {
  email: string
  username: string
}

export interface User extends BaseUser {
  id: string
}

export interface NewUser extends BaseUser {
  password: string
  confirmPassword: string
}

export interface CurrentUser {
  user: User | null
  auth: Record | Admin | null
}

export interface GenericUser {
  email?: string
  user_metadata: {
    username: string
  }
}

export interface Session {
  access_token: string
  refresh_token?: string
  expires_at?: number
  expires_in?: number
  token_type: string
  user: {
    email: string
    username: string
  }
}

export interface RegisterUserFormFields {
  confirmPassword: string
  email: string
  username: string
  password: string
}

export interface UserFormField {
  register: UseFormRegister<RegisterUserFormFields>
  error?: string
}
