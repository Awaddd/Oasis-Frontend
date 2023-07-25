import type { Record } from "pocketbase"
import { Comment } from "../types/comments"

export const commentThreadViewMapper = function (record: Record): Comment {
  return {
    id: record.comment_id,
    thread: record.id,
    text: record.text,
    author: record.author,
    authorName: record.author_name,
    replyTo: record.reply_to,
    replyToName: record.reply_to_name,
    created: record.created,
  }
}

export const commentMapper = function (record: Record): Comment {
  return {
    id: record.id,
    thread: record.thread,
    text: record.text,
    author: record.author,
    authorName: record.author_name,
    replyTo: record.reply_to,
    replyToName: record.reply_to_name,
    created: record.created,
  }
}
