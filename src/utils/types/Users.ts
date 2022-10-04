import { UseFormRegister } from "react-hook-form"

export interface User {
  email: string
  username: string
  password: string
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
