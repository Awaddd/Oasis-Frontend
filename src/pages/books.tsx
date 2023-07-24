import Image from "next/image"
import { Meta } from "../layout/Meta"
import { Main } from "../templates/Main"
import { Article } from "../types/article"
import { getBooks } from "../services/books"
import ArticleCardWithLink from "../components/ArticleCardWithLink"
import EmptySVG from "../../public/assets/images/empty.svg"
import { blurImage } from "../utils/helpers"
import { getPlaiceholder as getPlaceholder } from "plaiceholder"

const Books = ({ books }: { books: Article[] }) => {
  const META = <Meta title="Omar Dini | Books" description="Omar Dini's personal blog" />

  if (!books || books.length === 0)
    return (
      <Main meta={META}>
        <section className="grid items-center h-full text-center mt-lg mb-lg">
          <h1>Books</h1>
          <p className="text-sm font-normal lg:text-lg mt-md">
            Sorry there are no books at the moment. Please check back later
          </p>
          <div className="mt-lg md:mt-[45px]">
            <Image src={EmptySVG.src} alt="Empty category" height="278" width="333" />
          </div>
        </section>
      </Main>
    )

  return (
    <Main meta={META}>
      <section className="mt-lg mb-lg 2xl:w-9/12 md:mx-auto">
        <h1 className="text-center">Books</h1>
        <main className="articles 2xl:mt-xl lg:mt-[45px] mt-lg">
          {books.map((data: Article, key: number) => (
            <ArticleCardWithLink type="book" data={data} key={key} />
          ))}
        </main>
      </section>
    </Main>
  )
}

export async function getStaticProps() {
  const data = await getBooks()

  for (const article of data?.books || []) {
    article.imageProps = await blurImage(article?.image?.url, getPlaceholder)
  }

  return {
    props: {
      books: data?.books || [],
    },
  }
}

export default Books
