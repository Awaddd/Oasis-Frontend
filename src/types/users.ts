import { UseFormRegister } from "react-hook-form"

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
