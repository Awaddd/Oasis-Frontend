import { Comment } from "../utils/types/Comments"
import { Thread } from "../utils/types/Comments"

export async function getComments(article: string) {
  // const query = `
  //   id, article, Comments(
  //     id, text, author, created_at, replyTo, thread
  //   )
  // `
  // return await supabase
  //   .from<Thread>("Threads")
  //   .select(query)
  //   .match({ article })
  //   .order("created_at", { ascending: false })
  //   .order("created_at", { foreignTable: "Comments", ascending: true })
  //   .then(({ data }) => data)
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
