import { pb } from "./api"
import { commentMapper } from "../network/comment-mapper"

export async function getComments(articleID: string) {
  const data = await pb.collection("threads_and_comments").getList(1, 50, {
    sort: "created",
    filter: `article_id="${articleID}"`,
  })

  const comments = []

  for (const comment of data.items) {
    comments.push(commentMapper(comment))
  }

  return comments
}

export async function addComment(
  comment: string,
  article: string,
  author: string,
  thread?: string,
  replyTo?: string,
): Promise<any> {
  // if (!thread) {
  //   const { data } = await supabase.from<Thread>("Threads").insert({
  //     article,
  //   })
  //   if (data) thread = data[0]?.id
  // }
  // return await supabase.from<Comment>("Comments").insert([
  //   {
  //     thread,
  //     text: comment,
  //     author,
  //     replyTo,
  //   },
  // ])
}
