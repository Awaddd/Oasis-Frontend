import React, { FC } from "react"
import { useAddComment } from "../../hooks/useAddComment"
import Link from "next/link"

type Props = {
  thread?: string
  replyTo?: string
  disabled?: boolean;
}

const AddComment: FC<Props> = ({ disabled, ...props }) => {
  const { handleOnChange, handleOnClick } = useAddComment(props)

  return (
    <form className="flex flex-col gap-[0.4rem] my-4 md:my-3 relative">
      <textarea
        disabled={disabled}
        className="w-full p-2 border border-gray-300 rounded"
        rows={3}
        onChange={handleOnChange}
      />

      <button
        disabled={disabled}
        className={`btn-flex md:self-end md:mt-[0.1rem] min-h-8 px-8 py-[0.4rem] font-medium`}
        onClick={handleOnClick}
      >
        Add Comment
      </button>

      {disabled && (
        <Link href="/user/login">
          <a className="md:absolute md:bottom-[0.5rem] text-sm font-medium underline cursor-pointer">Login to comment</a>
        </Link>
      )}
    </form>
  )
}

export default AddComment
