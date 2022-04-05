import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article, ArticleAuthor, ImageType } from '../utils/types/global';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

type Props = {
  type?: 'article' | 'book';
  data: Article;
  author: ArticleAuthor;
  imageProps?: ImageType;
}

const Post: FC<Props> = ({ type, data, author, imageProps }) => {
  const { title, updated_at, content, image, category } = data;
  const updatedAt = dayjs(updated_at);

  return (
    <div className="lg:w-3/5 md:mx-auto my-lg mb-[45px] 2xl:w-2/4">

      {image?.url && (
        <div className="relative h-52 sm:h-60 md:h-80 lg:h-96 3xl:h-[28rem] mt-md">
          {imageProps && (<Image layout="fill" {...imageProps} placeholder="blur" priority alt={title} className="absolute top-0 z-10 text-center text-gray-200 bg-gray-900 rounded-lg heroImage" />)}
          <div className="absolute top-0 left-0 grid w-full h-full">
            <div className="absolute z-10 w-full h-full rounded-lg hero-image-overlay"></div>
            <div className="z-10 flex flex-col w-full h-full text-center text-white px-md py-sm">
              <header className="flex items-center justify-center flex-1 w-11/12 mx-auto">
                <h1 className="text-2xl tracking-tight md:text-3xl md:font-semibold lg:text-4xl 2xl:text-5xl">{title}</h1>
              </header>
              <footer className="flex items-end w-full">
                <div className="flex justify-between w-full">
                  <div className="relative flex items-center">
                    <span className="text-sm font-normal mt-md 2xl:text-normal">{author?.firstName} {author?.lastName}</span>
                  </div>
                  <span className="text-sm mt-md 2xl:text-normal">{updatedAt.format('MMMM Do, YYYY')}</span>
                </div>
              </footer>
            </div>
          </div>
        </div>
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