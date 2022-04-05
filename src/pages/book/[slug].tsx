import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getBook, getBooksOnlySlug } from '../../services/books';
import { getArticleAuthor } from '../../services/global';
import { Article, ArticleAuthor, ImageType, SSGParams } from '../../utils/types/global';
import { getPlaiceholder as getPlaceholder } from "plaiceholder";
import ArticleFooter from '../../components/ArticleFooter';
import Post from '../../components/Post';

const Book = ({ book, imageProps, author }: { book: Article; imageProps: ImageType; author: ArticleAuthor }) => {
  if (!book) return <p>Sorry, this book could not be loaded. Please try again later</p>

  const { title, subtitle, image } = book;

  const META = <Meta title={`Omar Dini | ${title}`} description={subtitle} images={[{
    url: image?.url,
    alt: image?.alternativeText,
    width: image?.width,
    height: image?.height,
    type: image?.mime,
  }]} />

  return (
    <Main meta={META} color="bg-slate-50" classes="pb-lg" footer={<ArticleFooter color="bg-slate-50" socialLinks={author?.socialLinks} email={author?.email} />} >
      <Post type="book" data={book} author={author} imageProps={imageProps} />
    </Main>
  );
};

export async function getStaticProps({ params }: SSGParams) {
  const data = await getBook(params.slug);
  const authorData = await getArticleAuthor();

  const path = data?.books[0]?.image?.url;
  if (!path) return { props: { book: data?.books[0] } }

  const { base64, img } = await getPlaceholder(path, { size: 10 });

  return {
    props: {
      book: data?.books[0],
      author: authorData?.author || null,
      imageProps: {
        src: img?.src,
        type: img?.type,
        blurDataURL: base64,
      },
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const data = await getBooksOnlySlug();
  const books = data.books;

  return {
    paths: books?.map((book: any) => `/book/${book?.slug}`) || [],
    fallback: true,
  }
}

export default Book;
