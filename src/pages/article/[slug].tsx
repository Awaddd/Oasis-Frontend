import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import parse from 'html-react-parser';
import { getArticle, getArticles } from '../../services/articles';
import { getArticleAuthor } from '../../services/global';
import { SocialLink, SSGParams } from '../../utils/types/global';
import Image from 'next/image';
import { api } from '../../services/api';
import { getPlaiceholder as getPlaceholder } from "plaiceholder";
import ArticleFooter from '../../components/ArticleFooter';
import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat";
import Link from 'next/link';
dayjs.extend(advancedFormat);

type Article = {
  title: string;
  subtitle?: string;
  content: string;
  updated_at?: string;
  image: {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
    mime: string;
  }
  category: {
    name: string;
    pluralName: string;
  }
}

type ImageType = {
  src: string;
  type: string;
  blurDataURL: string;
}

type ArticleAuthor = {
  firstName: string;
  lastName: string;
  socialLinks: SocialLink[];
  email?: string;
}

const Article = ({ article, imageProps, author }: { article: Article; imageProps: ImageType; author: ArticleAuthor }) => {
  if (!article) return <p>Sorry, this article could not be loaded. Please try again later</p>

  const { title, subtitle, updated_at, content, image, category } = article;
  const updatedAt = dayjs(updated_at);

  const META = <Meta title={`Omar Dini | ${title}`} description={subtitle} images={[{
    url: image?.url,
    alt: image?.alternativeText,
    width: image?.width,
    height: image?.height,
    type: image?.mime,
  }]} />

  return (
    <Main meta={META} color="bg-slate-50" classes="pb-lg" footer={<ArticleFooter color="bg-slate-50" socialLinks={author?.socialLinks} email={author?.email} />} >

      <div className="lg:w-3/5 md:mx-auto my-lg mb-[45px] 2xl:w-2/4">

        {image?.url && (
          <div className="relative h-52 sm:h-60 lg:h-80 2xl:h-96 mt-md">
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

        {category && (
          <Link href={`/${category?.pluralName}`} passHref>
            <span className="cursor-pointer block px-4 py-1 text-sm bg-gray-900 text-white rounded-[4px] mt-[1rem] mb-[-0.5rem] md:mb-0 w-min">{category.name}</span>
          </Link>
        )}

        <article className="!max-w-full prose-sm md:prose sm:prose 2xl:prose-xl mt-8">
          {parse(content)}
        </article>
      </div>
    </Main>
  );
};

export async function getStaticProps({ params }: SSGParams) {
  const data = await getArticle(params.slug);
  const authorData = await getArticleAuthor();

  const path = data?.articles[0]?.image?.url;
  if (!path) return { props: { article: data?.articles[0] } }

  const { base64, img } = await getPlaceholder(
    `${api}${path}`,
    { size: 10 }
  );

  return {
    props: {
      article: data?.articles[0],
      author: authorData?.author || null,
      imageProps: {
        src: img?.src,
        type: img?.type,
        blurDataURL: base64,
      },
    },
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const data = await getArticles();
  const articles = data.articles;

  return {
    paths: articles?.map((article: any) => `/article/${article?.slug}`) || [],
    fallback: true,
  }
}

export default Article;
