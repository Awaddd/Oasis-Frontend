import React, { FC, useState } from "react";
import { useSetRecoilState } from "recoil"
import { addComment } from "../../services/comments";
import { commentsState, threadsState } from "../../state/state";
import { generateId } from "../../utils/helpers";
import { cloneDeep } from "lodash"

type Props = {
  thread?: string
  replyTo?: string
  onComplete?: () => void
}

const AddComment: FC<Props> = ({ thread, replyTo, onComplete }) => {
  const [comment, setComment] = useState<string | undefined>();
  const createComment = useSetRecoilState(commentsState)
  const createThread = useSetRecoilState(threadsState)

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {

    if (!comment) return
    e.preventDefault()

    let newThread: string = thread || ''

    if (!thread) {
      newThread = generateId()
      createThread(threads => ([newThread, ...threads]))
    }

    const newComment = await addComment(comment, newThread, replyTo)

    createComment(comments => {
      let newComments = cloneDeep(comments);
      const key = newThread as keyof typeof comments

      // create new thread
      if (!comments.hasOwnProperty(key)) {
        newComments[key] = [newComment]
        return newComments
      }

      // add to existing thread
      newComments[key] = [...newComments[key], newComment]
      return newComments
    })

    setComment('')
    if (onComplete) onComplete()
  }

  return (
    <form className="flex flex-col gap-[0.4rem] my-4 md:my-3">
      <textarea className="w-full p-2 border border-gray-300 rounded" rows={3} value={comment} onChange={handleOnChange} />
      <button className="btn-flex md:self-end md:mt-[0.1rem] min-h-8 px-8 py-[0.4rem] font-medium" onClick={handleOnClick}>Add Comment</button>
    </form>
  );
};

export default AddComment;
