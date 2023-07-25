import type { Record } from "pocketbase"
import { Comment } from "../types/comments"

export const commentMapper = function (record: Record): Comment {
  return {
    id: record.comment_id,
    thread: record.id,
    text: record.text,
    author: record.author,
    replyTo: record.replyTo,
    created: record.created,
  }
}

export const tempMapper = function (record: Record): Comment {
  return {
    id: record.id,
    thread: record.thread,
    text: record.text,
    author: record.author,
    replyTo: record.replyTo,
    created: record.created,
  }
}
