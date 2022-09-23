export type Comment = {
  id: string;
  thread: string;
  text: string;
  author: string;
  created_at: string;
  replyTo?: string;
};

export interface GetCommentsResponse {
  id: string;
  article: string;
  Comments: Comment[];
}
