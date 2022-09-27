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
