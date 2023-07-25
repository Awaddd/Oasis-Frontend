import React, { FC } from "react"
import { Comment as CommentType } from "../../types/comments"
import ReplyIcon from "../../assets/icons/ReplyIcon"
import AddComment from "./AddComment"
import CloseIcon from "../../assets/icons/CloseIcon"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { setActiveComment } from "../../state/global"

dayjs.extend(relativeTime)

type Props = {
  comment: CommentType
}

const Comment: FC<Props> = ({ comment }) => {
  const activeComment = useSelector((state: RootState) => state.global.activeComment)
  const dispatch = useDispatch()

  if (!comment) return null
  const { id, thread, text, author, authorName, created, replyTo, replyToName } = comment

  return (
    <div className={`py-2 ${replyTo && "ml-8"}`}>
      <header className="flex items-center gap-[0.4rem] text-sm">
        <span className="font-semibold">{authorName}</span>
        <span className="">({dayjs(created).fromNow()})</span>

        {id === activeComment ? (
          <CloseIcon classes="primary ml-2 cursor-pointer" size={14} onClick={() => dispatch(setActiveComment(""))} />
        ) : (
          <ReplyIcon classes="primary ml-2 cursor-pointer" size={16} onClick={() => dispatch(setActiveComment(id))} />
        )}
      </header>

      <p className="mt-[0.25rem]">
        {replyToName && <span className="text-primary">@{replyToName}&nbsp;</span>}
        {text}
      </p>

      {id === activeComment && <AddComment thread={thread} replyTo={author} />}
    </div>
  )
}

export default Comment
