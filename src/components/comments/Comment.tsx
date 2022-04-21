import { FC } from "react";
import { Comment as CommentType } from '../../utils/types/global'

type Props = {
  comment: CommentType;
}

const Comment: FC<Props> = ({ comment }) => {
  if (!comment) return null;
  const { text, author, date } = comment;

  return (
    <div className="py-2 rounded px-sm">
      <header className="">
        <span className="text-primary">@{author}</span>
        <span className="text-sm"> ({date})</span>
      </header>
      <p className="prose-sm">{text}</p>
    </div>
  );
};

export default Comment;
