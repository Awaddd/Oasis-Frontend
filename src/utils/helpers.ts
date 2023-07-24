import { PlaceholderCallback, ValidateResponse } from "./types/global"

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

export function validate(strings: Record<string, any>): ValidateResponse {
  let errorMessage = null

  for (const key in strings) {
    const string = strings[key]

    if (string == null || string == "" || typeof string === "undefined") {
      errorMessage = "Required properties cannot be empty"
      return {
        valid: false,
        errorMessage,
      }
    }
  }

  return { valid: true }
}
