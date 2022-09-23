import { generateId } from "./../utils/helpers";
import { Comment } from "../utils/types/Comments";
import { supabase } from "./api";
import { GetCommentsResponse } from "../utils/types/Comments";

export async function getComments(article: string) {
  const query = `
    id, article, Comments(
      id, text, author, created_at, replyTo, thread
    )
  `;

  return await supabase
    .from<GetCommentsResponse>("Threads")
    .select(query)
    .match({ article })
    .then(({ data }) => data);
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
      created_at: "Just now",
      replyTo,
    });
  });
}
