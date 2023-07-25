import { FC } from "react"
import { Comment as CommentType } from "../../types/comments"
import AddComment from "./AddComment"
import Comment from "./Comment"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"

type Props = {
  className?: string
  comments: CommentType[] | null
}

const Comments: FC<Props> = ({ className, comments }) => {

  const session = useSelector((state: RootState) => state.auth.user);

  return (
    <section className={className}>
      <h3 className="text-center mt-rl">Comments</h3>

      <header className="mt-rl">
        <h4 className="font-semibold">Leave a comment</h4>
        <div className="mt-2 mb-8 md:mb-0">
          <AddComment disabled={!session} />
        </div>
      </header>

      {!comments || comments.length === 0 && (
        <>
          <h4 className="mt-lg">There are no comments yet</h4>
        </>
      )}

      {comments && (
        <main className="flex flex-col md:gap-1 mt-md">
          {comments.map((comment) =>
            <Comment comment={comment} key={comment.id} />,
          )}
        </main>
      )}
    </section>
  )
}

export default Comments
