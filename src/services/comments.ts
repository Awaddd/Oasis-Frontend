import { pb } from "./api"
import { commentMapper, tempMapper } from "../network/comment-mapper"
import { setComments, saveComment } from "../state/comments"
import { store } from "../state/store"
import { ClientResponseError } from "pocketbase"
import { Thread } from "../types/comments"

export function registerCommentsListener() {
  pb.collection("comments").subscribe("*", async (e) => {
    if (e.action == "create") {
      const comment = tempMapper(e.record)
      store.dispatch(saveComment(comment))
    }
  })
}

export function removeCommentsListener() {
  pb.collection("comments").unsubscribe()
}

export async function getComments(articleID: string) {
  try {
    const data = await pb.collection("threads_and_comments").getList(1, 50, {
      sort: "created",
      filter: `article="${articleID}"`,
    })

    const threads: Thread = {}

    for (const c of data.items) {
      const comment = commentMapper(c)
      if (typeof threads[comment.thread] === "undefined") {
        threads[comment.thread] = []
      }
      threads[comment.thread]?.push(comment)
    }

    store.dispatch(setComments(threads || []))
  } catch (error) {
    console.log("error", error)
    if (!(error instanceof ClientResponseError)) return
    if (error.status == 0) console.log("Client side error")
  }
}

export async function addComment(
  comment: string,
  article: string,
  author: string,
  thread?: string,
  replyTo?: string,
): Promise<any> {
  try {
    // get this from outside via author prop...
    const user = store.getState().auth.user

    if (!user) return

    if (!thread) {
      const data = {
        article,
        user: user.id,
      }

      const record = await pb.collection("threads").create(data)
      thread = record.id
    }

    const data = {
      text: comment,
      author: author,
      replyTo: replyTo,
      thread: thread,
    }

    await pb.collection("comments").create(data)
  } catch (error) {
    console.log("error", error)
    if (!(error instanceof ClientResponseError)) return
    console.log(error.data.message)
  }
}
