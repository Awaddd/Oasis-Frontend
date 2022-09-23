import { useState } from "react";
import { addComment } from "../services/comments";

type UseAddCommentArgs = {
  thread?: string;
  replyTo?: string;
  onComplete?: () => void;
};

export const useAddComment = ({
  thread,
  replyTo,
  onComplete,
}: UseAddCommentArgs): {
  comment: string | undefined;
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
} => {
  const [comment, setComment] = useState<string | undefined>();

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!comment) return;

    await addComment(comment, thread, replyTo);

    setComment("");

    if (onComplete) onComplete();
  };

  return {
    comment,
    handleOnChange,
    handleOnClick,
  };
};
