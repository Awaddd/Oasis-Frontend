import { FC, useState } from "react";
import { Comment as CommentType } from '../../utils/types/global'
import ReplyIcon from '../../assets/icons/ReplyIcon'
import AddComment from "./AddComment";

type Props = {
  comment: CommentType;
}

const Comment: FC<Props> = ({ comment }) => {
  const [showReplyBox, setShowReplyBox] = useState<boolean>(false);

  if (!comment) return null;
  const { thread, text, author, date, replyTo } = comment;

  const handleOnClick = () => {
    setShowReplyBox(currentValue => !currentValue)
  }

  return (
    <div className={`py-2 rounded px-sm ${replyTo && 'ml-8'}`}>
      <header className="flex items-center gap-[0.4rem] text-sm">
        <span className="">{author}</span>
        <span className="">({date})</span>
        {replyTo && (
          <span className="text-primary">@{replyTo}</span>
        )}
        <ReplyIcon classes="primary ml-2 cursor-pointer" size={16} onClick={handleOnClick} />
      </header>

      <p className="prose-md mt-[0.25rem]">{text}</p>

      {showReplyBox && (
        <AddComment thread={thread} replyTo={author} onComplete={() => setShowReplyBox(false)} />
      )}
    </div>
  );
};

export default Comment;
