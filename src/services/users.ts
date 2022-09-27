import { User } from "../utils/types/Users";
import { supabase } from "./api";

export async function createUser(user: User) {
  console.log("created user...", user);
}
