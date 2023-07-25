export type Comment = {
  id: string
  thread: string
  text: string
  author: string
  created: string
  replyTo?: string
}

export type Thread = {
  [key: string]: Comment[]
}
