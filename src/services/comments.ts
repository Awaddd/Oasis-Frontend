import { pb } from "./api"
import { commentMapper } from "../network/comment-mapper"

export async function getComments(article: string) {
  const data = await pb.collection("threads_and_comments").getList(1, 50, {
    sort: "created",
    filter: `article_id="1"`,
  })

  const arr = []

  for (const c of data.items) {
    const comment = commentMapper(c)
    console.log("comment", comment)
    arr.push(comment)
  }

  return arr
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
