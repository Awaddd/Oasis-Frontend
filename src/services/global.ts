import { client } from "./api";
import { CATEGORIES, HERO, AUTHOR } from "./queries";

export async function getHero() {
  const data = (await client.request(HERO)) || null;
  return data;
}

export async function getCategories() {
  const data = (await client.request(CATEGORIES)) || null;
  return data;
}

export async function getAuthor() {
  const data = (await client.request(AUTHOR)) || null;
  return data;
}
