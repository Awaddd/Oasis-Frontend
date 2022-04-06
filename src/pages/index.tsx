import { FC } from 'react';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getArticles, getFeaturedArticle } from '../services/articles';
import { getAuthorBio, getHero, getNewsletter } from '../services/global';
import HeroImage from '../components/HeroImage';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCardWithLink from '../components/ArticleCardWithLink';
import { Article, AuthorBio, ImageType, Newsletter as NewsletterType } from '../utils/types/global';
import AboutMe from '../components/AboutMe';
import Newsletter from '../components/Newsletter';
import { blurImage } from '../utils/helpers';
import { getPlaiceholder as getPlaceholder } from 'plaiceholder';

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

type IndexProps = {
  hero: any;
  articles: any;
  authorBio?: AuthorBio;
  featuredArticle: Article;
  newsletter: NewsletterType;
  type: 'book' | 'article' | null;
  featuredArticleImageProps: ImageType;
  heroImageProps: ImageType;
};

const Index: FC<IndexProps> = ({
  hero,
  articles,
  authorBio,
  featuredArticle,
  newsletter,
  type,
  heroImageProps,
  featuredArticleImageProps,
}) => (
  <Main meta={META} footerProps={{ classes: 'bg-dark text-gray-200' }} >

    <HeroImage data={hero} imageProps={heroImageProps} />

    <div className="2xl:w-9/12 2xl:mx-auto">
      <section className="2xl:mt-xl md:mt-[45px] mt-lg">
        <FeaturedArticle type={type} data={featuredArticle} imageProps={featuredArticleImageProps} />
      </section>

      <section className="2xl:mt-xl mt-[45px] articles">
        {articles.map((data: Article, key: number) => (
          <ArticleCardWithLink data={data} key={key} />
        ))}
      </section>

      <section className="2xl:mt-xl md:mt-[45px] mt-lg">
        <Newsletter data={newsletter} />
      </section>
    </div>

    <footer className="2xl:mt-xl md:mt-[45px] mt-lg reverse-global-padding">
      <AboutMe data={authorBio} />
    </footer>
  </Main>
);

export async function getStaticProps({ }) {
  const data = await getArticles(true);
  const heroData = await getHero();
  const authorBioData = await getAuthorBio();
  const newsletterData = await getNewsletter();
  const featuredArticleData = await getFeaturedArticle();
  const featuredArticle = featuredArticleData?.featuredArticle;

  let type = 'article';
  let featuredPost = featuredArticle.article;

  if (!!featuredArticle?.book) {
    type = 'book';
    featuredPost = featuredArticle.book;
  }

  const heroImageProps = await blurImage(heroData?.heroImage?.image?.url, getPlaceholder);
  const featuredArticleImageProps = await blurImage(featuredPost?.image?.url, getPlaceholder);

  return {
    props: {
      articles: data?.articles || [],
      hero: heroData?.heroImage || null,
      authorBio: authorBioData?.author || null,
      newsletter: newsletterData?.newsletter || null,
      featuredArticle: featuredPost,
      featuredArticleImageProps,
      heroImageProps,
      type,
    }
  }
}

export default Index;
