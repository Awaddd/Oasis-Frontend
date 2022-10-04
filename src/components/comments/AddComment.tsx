import React, { FC } from "react"
import { useAddComment } from "../../hooks/useAddComment"

type Props = {
  thread?: string
  replyTo?: string
  onComplete?: () => void
}

const AddComment: FC<Props> = (props) => {
  const { comment, handleOnChange, handleOnClick } = useAddComment(props)

  return (
    <form className="flex flex-col gap-[0.4rem] my-4 md:my-3">
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        rows={3}
        value={comment}
        onChange={handleOnChange}
      />
      <button
        className="btn-flex md:self-end md:mt-[0.1rem] min-h-8 px-8 py-[0.4rem] font-medium"
        onClick={handleOnClick}
      >
        Add Comment
      </button>
    </form>
  )
}

export default AddComment
