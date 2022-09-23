import { generateId } from "./../utils/helpers";
import { Comment } from "../utils/types/global";

export async function getComments(article: string) {
  const url = `http://localhost:3000/api/get-comments/${article}`;

  try {
    return await fetch(url).then((response) => response.json());
  } catch (error) {
    console.log(error);
    throw new Error(`error with fetch to ${url}`);
  }
}

export async function addComment(
  comment: string,
  thread: string,
  replyTo?: string
): Promise<Comment> {
  return new Promise((resolve) => {
    const id = `comment-${generateId()}`;

    resolve({
      id,
      thread,
      text: comment,
      author: "Awad",
      date: "Just now",
      replyTo,
    });
  });
}
