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

export type ArticleAuthor = {
  firstName: string
  lastName: string
  socialLinks: SocialLink[]
  email?: string
}

export type SocialLink = {
  brand: string
  link: string
}

export type AuthorBio = {
  firstName: string
  lastName: string
  bio: string
  email?: string
  picture?: {
    url: string
  }
  socialLinks?: SocialLink[]
}
