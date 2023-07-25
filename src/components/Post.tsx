import { FC, useEffect, useState } from "react"
import Link from "next/link"
import { ImageType } from "../types/global"
import parse from "html-react-parser"
import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
import ImageCard from "./sub-components/ImageCard"
import Comments from "./comments/Comments"
import { getComments, registerCommentsListener, removeCommentsListener } from "../services/comments"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentArticle } from "../state/global"
import { RootState } from "../state/store"
import { Article, ArticleAuthor } from "../types/article"

dayjs.extend(advancedFormat)

type Props = {
  type?: "article" | "book"
  data: Article
  author: ArticleAuthor
  imageProps?: ImageType
  video?: string
}

const Post: FC<Props> = ({ type, data, author, imageProps, video }) => {
  const { id, title, updated_at, content, category } = data
  const updatedAt = dayjs(updated_at)

  const [showComments, setShowComments] = useState<boolean>(false)
  const comments = useSelector((state: RootState) => state.comments.comments)

  const dispatch = useDispatch()

  useEffect(() => {
    registerCommentsListener()
    dispatch(setCurrentArticle(id))

    return () => removeCommentsListener()
  }, [])

  const fetchComments = async () => {
    await getComments(id)
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

      {video && (
        <video controls className="mt-md">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {showComments ? (
        <Comments comments={comments} className="2xl:mt-[45px] mt-lg mb-xl" />
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
