export type Comment = {
  id: string
  thread: string
  text: string
  created: string
  author: string
  authorName?: string
  replyTo?: string
  replyToName?: string
}

export type Thread = {
  [key: string]: Comment[]
}
