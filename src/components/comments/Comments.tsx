import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { commentsState } from '../../state/state';
import AddComment from './AddComment';
import Comment from './Comment';

type Props = {
  className?: string;
}

const Comments: FC<Props> = ({ className }) => {
  const comments = useRecoilValue(commentsState);

  return (
    <section className={className}>

      <h3 className="text-center mt-rl">Comments</h3>

      {true && (
        <header className="mt-rl">
          <h4 className="font-semibold">Leave a comment</h4>
          <div className="mt-2">
            <AddComment />
          </div>
        </header>
      )}

      <main className="flex flex-col md:gap-1 mt-md">
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </main>
    </section>
  );
};

export default Comments;
