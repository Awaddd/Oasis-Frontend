import { Comment } from "../utils/types/global";

export async function addComment(comment: string): Promise<Comment> {
  return new Promise((resolve) => {
    resolve({
      id: `blah ${Math.floor(Math.random() * 100)}`,
      text: comment,
      author: "Awad",
      date: "Just now",
    });
  });
}
