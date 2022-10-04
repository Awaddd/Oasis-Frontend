import { FC, useEffect, useState } from "react"
import Link from "next/link"
import { Article, ArticleAuthor, ImageType } from "../utils/types/global"
import parse from "html-react-parser"
import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
import ImageCard from "./sub-components/ImageCard"
import Comments from "./comments/Comments"
import { getComments } from "../services/comments"
import { useRecoilState, useSetRecoilState } from "recoil"
import { ArticleState, CommentsState } from "../state/state"

dayjs.extend(advancedFormat)

type Props = {
  type?: "article" | "book"
  data: Article
  slug: string
  author: ArticleAuthor
  imageProps?: ImageType
}

const Post: FC<Props> = ({ type, data, slug, author, imageProps }) => {
  const [showComments, setShowComments] = useState<boolean>(false)
  const [comments, setComments] = useRecoilState(CommentsState)
  const setArticle = useSetRecoilState(ArticleState)

  useEffect(() => {
    setArticle(slug)
  }, [])

  const { title, updated_at, content, category } = data
  const updatedAt = dayjs(updated_at)

  const fetchComments = async () => {
    const comments = await getComments(slug)
    setComments(comments || [])
    setShowComments(true)
  }

  return (
    <div className="lg:w-3/5 md:mx-auto mb-[30px] 2xl:w-2/4">
      {imageProps && (
        <ImageCard title={title} imageProps={imageProps} classes="mt-md">
          <footer className="flex items-end w-full">
            <div className="flex justify-between w-full">
              <div className="relative flex items-center">
                <span className="text-sm font-normal mt-md 2xl:text-normal">
                  {author?.firstName} {author?.lastName}
                </span>
              </div>
              <span className="text-sm mt-md 2xl:text-normal">{updatedAt.format("MMMM Do, YYYY")}</span>
            </div>
          </footer>
        </ImageCard>
      )}

      {type === "article" && category && (
        <Link href={`/${category?.pluralName}`} passHref>
          <span className="cursor-pointer block px-4 py-1 text-sm bg-gray-900 text-white rounded-[4px] mt-[1rem] mb-[-0.5rem] md:mb-0 w-min">
            {category.name}
          </span>
        </Link>
      )}

      {type === "book" && (
        <Link href={`/books`} passHref>
          <span className="cursor-pointer block px-4 py-1 text-sm bg-gray-900 text-white rounded-[4px] mt-[1rem] mb-[-0.5rem] md:mb-0 w-min">
            Book
          </span>
        </Link>
      )}

      {content && (
        <article className="!max-w-full prose-sm md:prose sm:prose 2xl:prose-xl mt-8">{parse(content)}</article>
      )}

      {showComments ? (
        <Comments threads={comments} className="2xl:mt-[45px] mt-lg" />
      ) : (
        <div className="flex justify-center mt-8 md:mt-12">
          <button className="btn-flex md:self-end min-h-8 px-8 py-[0.4rem] font-medium" onClick={fetchComments}>
            Show Comments
          </button>
        </div>
      )}
    </div>
  )
}

export default Post
