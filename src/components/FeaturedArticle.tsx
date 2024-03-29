import Image from "next/image"
import { FC } from "react"
import { ImageType } from "../utils/types/global"
import Link from "next/link"
import { Article } from "../utils/types/global"
import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
import ImageCard from "./sub-components/ImageCard"
dayjs.extend(advancedFormat)

type Props = {
  type: "book" | "article" | null
  data: Article
  imageProps: ImageType
}

const FeaturedArticle: FC<Props> = ({ type, data, imageProps }) => {
  if (!data || !imageProps) return null

  const { title, slug, updated_at, category } = data
  const updatedAt = dayjs(updated_at)

  const link = type === "book" ? `/book/${slug}` : `/article/${slug}`

  const buttonLabel =
    type === "article" ? (category?.name.toLowerCase() === "other" ? "article" : category?.name.toLowerCase()) : "book"

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse md:gap-[45px]">
      <div className="hidden md:grid md:flex-1">
        <div className="text-center md:justify-self-start md:text-left mt-sm md:mt-md">
          <header>
            <div className="grid grid-cols-2">
              <p className="justify-self-start text-primary">Featured</p>
              <p className="justify-self-end">{updatedAt.format("MMMM Do, YYYY")}</p>
            </div>
          </header>

          <Link href={link} passHref>
            <h1 className="text-xl font-bold leading-7 text-black cursor-pointer md:font-bold mt-sm lg:mt-md md:leading-10 md:underline md:text-4xl 2xl:w-9/12">
              {title}
            </h1>
          </Link>

          <Link href={link} passHref>
            <a className="shadow-sm featured-button shadow-primary/50 hover:shadow-none">Read {buttonLabel}</a>
          </Link>
        </div>
      </div>
      <div className="md:mt-0 md:flex-1">
        <div className="grid grid-cols-2 mx-xs mb-xs md:hidden">
          <p className="justify-self-start text-primary">Featured</p>
          <p className="text-sm justify-self-end lg:hidden">{updatedAt.format("MMMM Do")}</p>
        </div>
        <ImageCard title={title} imageProps={imageProps} link={link} classes="md:hidden" />
        <Link href={link} passHref>
          <div className="relative hidden md:block w-full h-52 md:h-64 lg:h-80 3xl:h-[22rem]">
            <Image
              layout="fill"
              {...imageProps}
              placeholder="blur"
              priority
              alt="featured post image"
              className="object-cover rounded-lg cursor-pointer sm:rounded-md"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedArticle
