import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { addComment } from "../services/comments";
import { commentsState, threadsState } from "../state/state";
import { generateId } from "../utils/helpers";
import { cloneDeep } from "lodash";

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
  const createComment = useSetRecoilState(commentsState);
  const createThread = useSetRecoilState(threadsState);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!comment) return;

    let newThread: string = thread || "";

    if (!thread) {
      newThread = generateId();
      createThread((threads) => [newThread, ...threads]);
    }

    const newComment = await addComment(comment, newThread, replyTo);

    createComment((comments) => {
      let newComments = cloneDeep(comments);
      const key = newThread as keyof typeof comments;

      // create new thread
      if (!comments.hasOwnProperty(key)) {
        newComments[key] = [newComment];
        return newComments;
      }

      // add to existing thread
      newComments[key] = [...newComments[key], newComment];
      return newComments;
    });

    setComment("");
    if (onComplete) onComplete();
  };

  return {
    comment,
    handleOnChange,
    handleOnClick,
  };
};
