import { client } from "./api";
import { BOOK, BOOKS_ONLY_SLUG, BOOKS } from "./queries";

export async function getBook(slug: string) {
  const data = (await client.request(BOOK, { slug: slug })) || [];
  return data;
}

export async function getBooksOnlySlug() {
  const data = (await client.request(BOOKS_ONLY_SLUG)) || [];
  return data;
}

export const getBooks = async () => (await client.request(BOOKS)) || [];
