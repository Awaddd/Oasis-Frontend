import { UseFormRegister } from "react-hook-form";

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface RegisterUserFormFields {
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface UserFormField {
  register: UseFormRegister<RegisterUserFormFields>;
  error?: string;
}
