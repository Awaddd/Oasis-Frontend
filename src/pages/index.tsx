import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getArticles, getFeaturedArticle } from '../services/articles';
import { getAuthorBio, getHero } from '../services/global';
import HeroImage from '../components/HeroImage';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCardWithLink from '../components/ArticleCardWithLink';
import { Article, AuthorBio } from '../utils/types/global';
import AboutMe from '../components/AboutMe';
import Newsletter from '../components/Newsletter';

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
  type: 'book' | 'article' | null;
};

const Index = ({ hero, articles, authorBio, featuredArticle, type }: IndexProps) => {
  return (
    <Main meta={META} footerProps={{ dark: true }} >

      <HeroImage data={hero} />

      <div className="2xl:w-9/12 2xl:mx-auto">
        <section className="2xl:mt-xl md:mt-[45px] mt-lg">
          <FeaturedArticle type={type} data={featuredArticle} />
        </section>

        <section className="2xl:mt-xl mt-[45px] articles">
          {articles.map((data: Article, key: number) => (
            <ArticleCardWithLink data={data} key={key} />
          ))}
        </section>

        <section className="2xl:mt-xl md:mt-[45px] mt-lg">
          <Newsletter />
        </section>
      </div>

      <footer className="2xl:mt-xl md:mt-[45px] mt-lg reverse-global-padding">
        <AboutMe data={authorBio} />
      </footer>
    </Main>
  );
};

export async function getStaticProps({ }) {
  const data = await getArticles(true);
  const heroData = await getHero();
  const authorBioData = await getAuthorBio();
  const featuredArticleData = await getFeaturedArticle();
  const featuredArticle = featuredArticleData?.featuredArticle;

  let type = 'article';
  let featuredPost = featuredArticle.article;

  if (!!featuredArticle?.book) {
    type = 'book';
    featuredPost = featuredArticle.book;
  }

  return {
    props: {
      articles: data?.articles || [],
      hero: heroData?.heroImage || null,
      authorBio: authorBioData?.author || null,
      featuredArticle: featuredPost,
      type,
    },
    revalidate: 60
  }
}

export default Index;
