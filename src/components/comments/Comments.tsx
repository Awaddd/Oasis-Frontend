import { FC, useEffect } from "react"
import AddComment from "./AddComment"
import Comment from "./Comment"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { registerCommentsListener, removeCommentsListener } from "../../services/comments"

type Props = {
  className?: string
}

const Comments: FC<Props> = ({ className }) => {

  const session = useSelector((state: RootState) => state.auth.user);
  const threads = useSelector((state: RootState) => state.comments.comments)

  useEffect(() => {
    registerCommentsListener()
    return () => removeCommentsListener()
  }, [])

  return (
    <section className={className}>
      <h3 className="text-center mt-rl">Comments</h3>

      <header className="mt-rl">
        <h4 className="font-semibold">Leave a comment</h4>
        <div className="mt-2 mb-8 md:mb-0">
          <AddComment disabled={!session} />
        </div>
      </header>

      {Object.keys(threads).length === 0 && threads.constructor === Object && (
        <>
          <h4 className="mt-lg">There are no comments yet</h4>
        </>
      )}

      {threads && (
        <main className="flex flex-col md:gap-1 mt-md">
          {Object.keys(threads).map((key) => threads[key]?.map((comment) => <Comment comment={comment} key={comment.id} />))}
        </main>
      )}
    </section>
  )
}

export default Comments
