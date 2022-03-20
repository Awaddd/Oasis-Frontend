import { gql } from "graphql-request";

export const ARTICLE = gql`
  query GetArticleBySlug($slug: String!) {
    articles(where: { slug: $slug }) {
      title
      id
      title
      subtitle
      image {
        url
        width
        height
        alternativeText
        mime
      }
      content
    }
  }
`;

export const ARTICLES = gql`
  query GetArticles {
    articles {
      id
      title
      subtitle
      slug
      image {
        url
      }
    }
  }
`;

export const FIRST_THREE_ARTICLES = gql`
  query GetArticles {
    articles(limit: 3) {
      id
      title
      subtitle
      slug
      image {
        url
      }
    }
  }
`;

export const HERO = gql`
  query GetHeroImage {
    heroImage {
      id
      title
      subtitle
      image {
        url
      }
    }
  }
`;

export const FEATURED_ARTICLE = gql`
  query GetFeaturedArticleID {
    featuredArticle {
      article {
        title
        subtitle
        slug
        image {
          url
        }
      }
    }
  }
`;

export const ARTICLES_BY_CATEGORY = gql`
  query GetArticlesByCategory($category: String!) {
    categories(where: { pluralName: $category }) {
      id
      name
      pluralName
      articles {
        id
        title
        subtitle
        slug
        image {
          url
        }
      }
    }
  }
`;

export const CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      pluralName
      id
    }
  }
`;

export const AUTHOR_PROFILE = gql`
  query GetAuthorProfile {
    author {
      profile
      socialLinks {
        brand
        link
      }
    }
  }
`;

export const AUTHOR_NAME = gql`
  query GetAuthorName {
    author {
      firstName
      lastName
    }
  }
`;

export const AUTHOR_BIO = gql`
  query GetAuthorBio {
    author {
      firstName
      lastName
      bio
      picture {
        url
      }
      socialLinks {
        brand
        link
      }
    }
  }
`;

export const ARTICLE_AUTHOR = gql`
  query GetArticleAuthor {
    author {
      firstName
      lastName
      socialLinks {
        brand
        link
      }
    }
  }
`;
