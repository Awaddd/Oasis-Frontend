import { forwardRef } from "react"
import Link from "next/link"
import ArticleCard from "./ArticleCard"
import { Article } from "../types/article"

type LinkProps = {
  data: Article
  type?: "book" | "article"
}

const ArticleCardWithLink = forwardRef<HTMLDivElement, LinkProps>(({ data, type }, ref) => {
  const link = type === "book" ? `/book/${data?.slug}` : `/article/${data?.slug}`
  return (
    <Link href={link} passHref>
      <div ref={ref}>
        <ArticleCard data={data} />
      </div>
    </Link>
  )
})

export default ArticleCardWithLink
