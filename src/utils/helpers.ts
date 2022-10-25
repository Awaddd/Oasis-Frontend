import { Session, User } from "@supabase/supabase-js"
import { PlaceholderCallback } from "./types/global"
import { GenericUser } from "./types/Users"

export const capitaliseFirstLetter = (string?: string) => {
  if (!string) return ""
  return string && string.charAt(0).toUpperCase() + string.slice(1)
}

export const blurImage = async (url: string, callback: PlaceholderCallback) => {
  if (!url) return null
  const { base64, img } = await callback(url, { size: 10 })

  return {
    src: img?.src,
    type: img?.type,
    blurDataURL: base64,
  }
}

export const createUserSessionObject = (user: User | GenericUser | null, session: Session | null) => {
  if (!session || !user || !user.email) {
    console.log("Unable to set session", session, user, user?.email)
    return null
  }

  const { access_token, refresh_token, expires_in, expires_at, token_type } = session

  return {
    access_token,
    refresh_token,
    expires_in,
    expires_at,
    token_type,
    user: {
      email: user.email,
      username: user.user_metadata.username,
    },
  }
}

export const generateId = (): string => {
  let arr = []
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  for (let i = 0; i < letters.length; i++) {
    const randomLetter = Math.floor(Math.random() * letters.length)
    arr.push(letters[randomLetter])
  }
  return arr.join("")
}
