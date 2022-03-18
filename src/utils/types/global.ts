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
  id: number;
  title: string;
  subtitle?: string;
  slug: string;
  image?: {
    url: string;
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
