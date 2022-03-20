import { client } from "./api";
import { CATEGORIES, HERO, AUTHOR_PROFILE, AUTHOR_BIO } from "./queries";

export async function getHero() {
  const data = (await client.request(HERO)) || null;
  return data;
}

export async function getCategories() {
  const data = (await client.request(CATEGORIES)) || null;
  return data;
}

export async function getAuthor() {
  const data = (await client.request(AUTHOR_PROFILE)) || null;
  return data;
}

export async function getAuthorBio() {
  const data = (await client.request(AUTHOR_BIO)) || null;
  return data;
}
