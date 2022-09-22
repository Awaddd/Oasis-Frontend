import React, { useState } from "react";
import { addComment } from "../../services/comments";

const AddComment = () => {

  const [comment, setComment] = useState<string | undefined>();

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (comment) {
      addComment(comment)
      setComment('')
    }
  }

  return (
    <form className="flex flex-col gap-[0.4rem]">
      <textarea className="w-full p-2 border border-gray-300 rounded" rows={4} value={comment} onChange={handleOnChange} />
      <button className="btn-flex md:self-end md:mt-[0.1rem] min-h-8 px-8 py-[0.4rem] font-medium" onClick={handleOnClick}>Add Comment</button>
    </form>
  );
};

export default AddComment;
