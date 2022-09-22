import { generateId } from "./../utils/helpers";
import { Comment } from "../utils/types/global";

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
