import { useState } from "react"
import { cloneDeep } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { setComments } from "../state/comments"
import { RootState } from "../state/store"
import { addComment } from "../services/comments"

type UseAddCommentArgs = {
  thread?: string
  replyTo?: string
}

export const useAddComment = ({
  thread,
  replyTo,
}: UseAddCommentArgs): {
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
      await addComment(comment, article, session.username, thread, replyTo)
      // set active comment to "" here or on realtime listener event
    } catch (error) {
      console.log("error", error)
      // show error notification
    }
  }

  return {
    handleOnChange,
    handleOnClick,
  }
}
