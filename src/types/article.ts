import { ImageType } from "./global"

export type Article = {
  id?: number
  title: string
  slug?: string
  subtitle?: string
  content?: string
  updated_at?: string
  image: {
    url: string
    alternativeText: string
    width: number
    height: number
    mime: string
  }
  imageProps: ImageType
  category?: {
    name: string
    pluralName: string
  }
  video?: string
}
