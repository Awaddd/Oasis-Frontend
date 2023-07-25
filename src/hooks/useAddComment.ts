import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState, store } from "../state/store"
import { addComment } from "../services/comments"
import { setActiveComment } from "../state/global"

type UseAddCommentArgs = {
  thread?: string
  replyTo?: string
}

export const useAddComment = ({
  thread,
  replyTo,
}: UseAddCommentArgs): {
  comment: string | undefined
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
} => {
  const [comment, setComment] = useState<string | undefined>()
  const article = useSelector((state: RootState) => state.global.currentArticle)
  const session = useSelector((state: RootState) => state.auth.user)

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!comment || !session) return

    try {
      await addComment(comment, article, session.id, thread, replyTo)
      store.dispatch(setActiveComment(""))
      setComment("")
    } catch (error) {
      console.log("error", error)
      // show error notification
    }
  }

  return {
    comment,
    handleOnChange,
    handleOnClick,
  }
}
