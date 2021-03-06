import { FC } from 'react';
import Link from 'next/link';
import { Article, ArticleAuthor, ImageType } from '../utils/types/global';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat";
import ImageCard from './sub-components/ImageCard';

dayjs.extend(advancedFormat);

type Props = {
  type?: 'article' | 'book';
  data: Article;
  author: ArticleAuthor;
  imageProps?: ImageType;
}

const Post: FC<Props> = ({ type, data, author, imageProps }) => {
  const { title, updated_at, content, category } = data;
  const updatedAt = dayjs(updated_at);

  return (
    <div className="lg:w-3/5 md:mx-auto mb-[45px] 2xl:w-2/4">

      {imageProps && (
        <ImageCard title={title} imageProps={imageProps} classes="mt-md">
          <footer className="flex items-end w-full">
            <div className="flex justify-between w-full">
              <div className="relative flex items-center">
                <span className="text-sm font-normal mt-md 2xl:text-normal">{author?.firstName} {author?.lastName}</span>
              </div>
              <span className="text-sm mt-md 2xl:text-normal">{updatedAt.format('MMMM Do, YYYY')}</span>
            </div>
          </footer>
        </ImageCard>
      )}

      {type === 'article' && category && (
        <Link href={`/${category?.pluralName}`} passHref>
          <span className="cursor-pointer block px-4 py-1 text-sm bg-gray-900 text-white rounded-[4px] mt-[1rem] mb-[-0.5rem] md:mb-0 w-min">{category.name}</span>
        </Link>
      )}

      {type === 'book' && (
        <Link href={`/books`} passHref>
          <span className="cursor-pointer block px-4 py-1 text-sm bg-gray-900 text-white rounded-[4px] mt-[1rem] mb-[-0.5rem] md:mb-0 w-min">Book</span>
        </Link>
      )}

      {content && (
        <article className="!max-w-full prose-sm md:prose sm:prose 2xl:prose-xl mt-8">
          {parse(content)}
        </article>
      )}
    </div>
  );
}

export default Post;