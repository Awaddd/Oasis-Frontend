import { FC, ReactNode } from "react"
import type { NextFetchEvent } from "next/server"
import type { NextRequest } from "next/server"

export type Middleware = (
  request: NextRequest,
  event: NextFetchEvent,
) => Promise<Response | undefined> | Response | undefined

export type FooterProps = {
  classes?: string
  children?: ReactNode | FC | JSX.Element
}

export type SSGParams = {
  params: {
    slug: string
    imageProps: any
  }
}

export type CategoryParams = {
  params: {
    category: string
  }
}

export type Category = {
  id: number
  name: string
  pluralName: string
}

export type ImageType = {
  src: string
  type: string
  blurDataURL: string
}

export type Newsletter = {
  title: string
  subtitle?: string
  description: string
}

export type HeroImage = {
  image?: {
    url: string
  }
  title?: string
  subtitle?: string
}

export type PlaceholderCallback = (url: string, options: { [key: string]: any }) => any

export interface ValidateResponse {
  valid: boolean
  errorMessage?: string
}
