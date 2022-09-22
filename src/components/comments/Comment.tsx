import React, { FC } from "react";
import { Comment as CommentType } from '../../utils/types/global'
import ReplyIcon from '../../assets/icons/ReplyIcon'
import AddComment from "./AddComment";
import { useRecoilState } from "recoil";
import { activeCommentState } from "../../state/state";
import CloseIcon from "../../assets/icons/CloseIcon";

type Props = {
  comment: CommentType;
}

const Comment: FC<Props> = ({ comment }) => {
  const [activeComment, setActiveComment] = useRecoilState(activeCommentState)

  if (!comment) return null;
  const { id, thread, text, author, date, replyTo } = comment;

  return (
    <div className={`py-2 rounded px-sm ${replyTo && 'ml-8'}`}>
      <header className="flex items-center gap-[0.4rem] text-sm">
        <span className="">{author}</span>
        <span className="">({date})</span>


        {id === activeComment ? (
          <CloseIcon classes="primary ml-2 cursor-pointer" size={14} onClick={() => setActiveComment('')} />
        ) : (
          <ReplyIcon classes="primary ml-2 cursor-pointer" size={16} onClick={() => setActiveComment(id)} />
        )}
      </header>

      <p className="prose-md mt-[0.25rem]">
        {replyTo && (
          <span className="text-primary">@{replyTo}</span>
        )}&nbsp;
        {text}
      </p>

      {id === activeComment && (
        <AddComment thread={thread} replyTo={author} onComplete={() => setActiveComment('')} />
      )}
    </div>
  );
};

export default Comment;
