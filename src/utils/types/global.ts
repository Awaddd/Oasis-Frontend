import { ReactNode } from "react";
import type { NextFetchEvent } from "next/server";
import type { NextRequest } from "next/server";

export type Middleware = (
  request: NextRequest,
  event: NextFetchEvent
) => Promise<Response | undefined> | Response | undefined;

export type FooterProps = {
  dark?: boolean;
  children?: ReactNode;
};

export type Article = {
  id?: number;
  title: string;
  slug?: string;
  subtitle?: string;
  content?: string;
  updated_at?: string;
  image: {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
    mime: string;
  };
  category?: {
    name: string;
    pluralName: string;
  };
};

export type SSGParams = {
  params: {
    slug: string;
    imageProps: any;
  };
};

export type CategoryParams = {
  params: {
    category: string;
  };
};

export type Category = {
  id: number;
  name: string;
  pluralName: string;
};

export type SocialLink = {
  brand: string;
  link: string;
};

export type AuthorBio = {
  firstName: string;
  lastName: string;
  bio: string;
  email?: string;
  picture?: {
    url: string;
  };
  socialLinks?: SocialLink[];
};

export type ArticleAuthor = {
  firstName: string;
  lastName: string;
  socialLinks: SocialLink[];
  email?: string;
};

export type ImageType = {
  src: string;
  type: string;
  blurDataURL: string;
};
