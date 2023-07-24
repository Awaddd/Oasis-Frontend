import Image from "next/image"
import { FC } from "react"
import { Article } from "../types/article"

type Props = {
  data: Article
}

const ArticleCard: FC<Props> = ({ data }) => {
  const { title, subtitle, imageProps } = data
  if (!imageProps) return null

  return (
    <article className="grid cursor-pointer">
      <div className="relative h-52 md:h-48 3xl:h-60">
        <Image
          layout="fill"
          {...imageProps}
          placeholder="blur"
          priority
          alt="cover image"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-2.5 mx-[.525rem]">
        <h3 className="font-bold leading-7 text-black">{title}</h3>
        {subtitle && <p className="md:mt-[2px]">{subtitle}</p>}
      </div>
    </article>
  )
}

export default ArticleCard
