import { FC } from 'react';
import { GetCommentsResponse, Comment as CommentType } from '../../utils/types/Comments';
import AddComment from './AddComment';
import Comment from './Comment';

type Props = {
  className?: string;
  threads: GetCommentsResponse[] | null;
}

const Comments: FC<Props> = ({ className, threads }) => {

  return (
    <section className={className}>

      <h3 className="text-center mt-rl">Comments</h3>

      {true && (
        <header className="mt-rl">
          <h4 className="font-semibold">Leave a comment</h4>
          <div className="mt-2 mb-8 md:mb-0">
            <AddComment />
          </div>
        </header>
      )}

      {threads && (
        <main className="flex flex-col md:gap-1 mt-md">
          {threads.map(({ Comments }) => (
            Comments.map((comment: CommentType) => (
              <Comment comment={comment} key={comment.id} />
            ))
          ))}
        </main>
      )}
    </section>
  );
};

export default Comments;
