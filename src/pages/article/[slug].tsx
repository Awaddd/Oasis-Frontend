import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getArticle, getArticles } from '../../services/articles';
import { getArticleAuthor } from '../../services/global';
import { Article as ArticleType, ArticleAuthor, ImageType, SSGParams } from '../../utils/types/global';
import { getPlaiceholder as getPlaceholder } from "plaiceholder";
import ArticleFooter from '../../components/ArticleFooter';
import Post from '../../components/Post';
import { blurImage } from '../../utils/helpers';

const Article = ({ article, imageProps, author }: { article: ArticleType; imageProps: ImageType; author: ArticleAuthor }) => {
  if (!article) return <p>Sorry, this article could not be loaded. Please try again later</p>

  const { title, subtitle, image } = article;

  const META = <Meta title={`Omar Dini | ${title}`} description={subtitle} images={[{
    url: image?.url,
    alt: image?.alternativeText,
    width: image?.width,
    height: image?.height,
    type: image?.mime,
  }]} />

  return (
    <Main meta={META} color="bg-slate-50" classes="pb-lg" footer={<ArticleFooter color="bg-slate-50" socialLinks={author?.socialLinks} email={author?.email} />} >
      <Post type="article" data={article} author={author} imageProps={imageProps} />
    </Main>
  );
};

export async function getStaticProps({ params }: SSGParams) {
  const data = await getArticle(params.slug);
  const authorData = await getArticleAuthor();
  const imageProps = await blurImage(data?.articles[0]?.image?.url, getPlaceholder);

  return {
    props: {
      article: data?.articles[0],
      author: authorData?.author || null,
      imageProps,
    },
    revalidate: 60,
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
