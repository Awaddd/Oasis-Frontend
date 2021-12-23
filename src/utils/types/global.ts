import { ReactNode } from "react";

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
