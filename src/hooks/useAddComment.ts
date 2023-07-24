import { useRecoilValue, useSetRecoilState } from "recoil"
import { useState } from "react"
import { CommentsState } from "../state/old-state"
import { cloneDeep } from "lodash"

type UseAddCommentArgs = {
  thread?: string
  replyTo?: string
  onComplete?: () => void
}

// export const useAddComment = ({
//   thread,
//   replyTo,
//   onComplete,
// }: UseAddCommentArgs): {
//   comment: string | undefined
//   handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
//   handleOnClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
// } => {
//   const [comment, setComment] = useState<string | undefined>()
//   const setComments = useSetRecoilState(CommentsState)
//   const article = useSelector((state: RootState) => state.global.currentArticle)

//   // get session from state
//   const session = null

//   const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setComment(e.target.value)
//   }

//   const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault()

//     if (!comment || !session) return

//     // const { data, error } = await addComment(comment, article, session.user?.username, thread, replyTo)

//     if (error) {
//       console.log(error.message)
//       // show error notification here with a generic message
//       return
//     }

//     const newComment = data[0]

//     setComments((threads) => {
//       const arr = cloneDeep(threads)

//       let updated = false

//       arr?.forEach((thread) => {
//         if (thread.id === newComment.thread) {
//           thread.Comments.push(newComment)
//           updated = true
//         }
//       })

//       if (!updated) {
//         arr.unshift({
//           Comments: [newComment],
//           id: newComment.thread,
//           article: "",
//           created_at: "",
//         })
//       }

//       return arr
//     })

//     // show notification "Comment has been posted"

//     setComment("")

//     if (onComplete) onComplete()
//   }

//   return {
//     comment,
//     handleOnChange,
//     handleOnClick,
//   }
// }
