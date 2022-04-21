import { FC } from 'react';
import AddComment from './AddComment';
import Comment from './Comment';

type Props = {
  className?: string;
}

const comments = [
  {
    text: "Couldn't have said it better myself!",
    author: "Jack",
    date: "Just now"
  },
  {
    text: "Well said! I agree with everything you said... well, almost everything.",
    author: "Tom",
    date: "30 minutes ago"
  },
  {
    text: "I really love what you did here",
    author: "Awaddd",
    date: "2 hours ago"
  },
  {
    text: "I think we need to work on our thesis man",
    author: "Hungry Awad",
    date: "1 day ago"
  },
]



const Comments: FC<Props> = ({ className }) => {
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
        {comments.map((comment, key) => (
          <Comment comment={comment} key={key} />
        ))}
      </main>
    </section>
  );
};

export default Comments;
