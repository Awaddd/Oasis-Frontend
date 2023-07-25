import { pb } from "./api"
import { commentMapper, tempMapper } from "../network/comment-mapper"
import { setComments, saveComment } from "../state/comments"
import { store } from "../state/store"
import { ClientResponseError } from "pocketbase"

export function registerCommentsListener(id: string) {
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

    const comments = []

    for (const comment of data.items) {
      comments.push(commentMapper(comment))
    }

    store.dispatch(setComments(comments || []))
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
      console.log("thread", record)
      console.log("thread id", record.id)
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
