import Image from 'next/image';
import { FC } from "react";
import { ImageType } from "../utils/types/global"; import Link from 'next/link';
import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Article } from '../utils/types/global';
dayjs.extend(advancedFormat);

type Props = {
  type: 'book' | 'article' | null;
  data: Article;
  imageProps: ImageType;
}

const FeaturedArticle: FC<Props> = ({ type, data, imageProps }) => {
  if (!data || !imageProps) return null;

  const { title, slug, updated_at } = data
  const updatedAt = dayjs(updated_at);

  const link = type === 'book' ? `/book/${slug}` : `/article/${slug}`;

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse md:gap-[45px]">
      <div className="md:grid md:flex-1">
        <div className="text-center md:justify-self-start md:text-left mt-sm md:mt-md">
          <header className="hidden md:block">
            <div className="grid grid-cols-2">
              <p className="justify-self-start text-primary">Featured</p>
              <p className="justify-self-end">{updatedAt.format('MMMM Do, YYYY')}</p>
            </div>
          </header>

          <Link href={link} passHref>
            <h1 className="cursor-pointer text-xl font-bold leading-7 text-gray-800 md:font-bold mt-sm lg:mt-md md:leading-10 md:underline md:text-4xl 2xl:w-9/12">{title}</h1>
          </Link>

          <Link href={link} passHref>
            <a className="shadow-sm featured-button shadow-primary/50 hover:shadow-none">Read More</a>
          </Link>
        </div>
      </div>
      <div className="md:mt-0 md:flex-1">
        <div className="grid grid-cols-2 mx-xs mb-sm md:hidden">
          <p className="justify-self-start text-primary">Featured</p>
          <p className="text-sm justify-self-end lg:hidden">{updatedAt.format('MMMM Do')}</p>
        </div>
        <Link href={link} passHref>
          <div className="relative w-full h-52 md:h-64 lg:h-80 3xl:h-[22rem]">
            <Image layout="fill" {...imageProps} placeholder="blur" priority alt="cover image" className="cursor-pointer object-cover rounded-lg sm:rounded-md" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedArticle;