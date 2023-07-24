import type { Record } from "pocketbase"
import { User } from "../utils/types/Users"

export const userMapper = function (record: Record): User {
  return {
    id: record.id,
    email: record.email,
    username: record.name,
  }
}
