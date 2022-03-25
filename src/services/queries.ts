import { gql } from "graphql-request";

export const ARTICLE = gql`
  query GetArticleBySlug($slug: String!) {
    articles(where: { slug: $slug }) {
      id
      title
      subtitle
      updated_at
      image {
        url
        width
        height
        alternativeText
        mime
      }
      content
      category {
        name
      }
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
    articles(limit: 3, sort: "updated_at:desc") {
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
        updated_at
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
      email
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
      email
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
      email
      socialLinks {
        brand
        link
      }
    }
  }
`;
