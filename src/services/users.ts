import { supabase } from "./api";

export async function createUser({
  email,
  firstName,
  lastName,
  password,
}: {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}) {
  console.log("email", email);
  console.log("firstName", firstName);
  console.log("lastName", lastName);
  console.log("password", password);
}
