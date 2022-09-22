import React, { FC, useState } from "react";
import { useSetRecoilState } from "recoil"
import { addComment } from "../../services/comments";
import { commentsState } from "../../state/state";

type Props = {
  onComplete?: () => void
}

const AddComment: FC<Props> = ({ onComplete }) => {
  const [comment, setComment] = useState<string | undefined>();
  const saveComment = useSetRecoilState(commentsState)

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (comment) {
      const newComment = await addComment(comment)

      saveComment(comments => {
        return [newComment, ...comments]
      })

      if (onComplete) onComplete()
      setComment('')
    }
  }

  return (
    <form className="flex flex-col gap-[0.4rem] my-4 md:my-3">
      <textarea className="w-full p-2 border border-gray-300 rounded" rows={3} value={comment} onChange={handleOnChange} />
      <button className="btn-flex md:self-end md:mt-[0.1rem] min-h-8 px-8 py-[0.4rem] font-medium" onClick={handleOnClick}>Add Comment</button>
    </form>
  );
};

export default AddComment;
