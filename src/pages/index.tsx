import { FC, useEffect, useState } from "react"
import { Meta } from "../layout/Meta"
import { Main } from "../templates/Main"
import { getArticles, getFeaturedArticle } from "../services/articles"
import { getAuthorBio, getHero, getNewsletter } from "../services/global"
import HeroImage from "../components/HeroImage"
import FeaturedArticle from "../components/FeaturedArticle"
import ArticleCardWithLink from "../components/ArticleCardWithLink"
import { Article, AuthorBio, ImageType, Newsletter as NewsletterType } from "../utils/types/global"
import AboutMe from "../components/AboutMe"
import Newsletter from "../components/Newsletter"
import { blurImage, createUserSessionObject } from "../utils/helpers"
import { getPlaiceholder as getPlaceholder } from "plaiceholder"
import { supabase } from "../services/api"
import { useRecoilState, useSetRecoilState } from "recoil"
import { NotificationState, userSessionState } from "../state/state"

const META = <Meta title="Omar Dini" description="Omar Dini's personal blog" />

type IndexProps = {
  hero: any
  articles: any
  authorBio?: AuthorBio
  featuredArticle: Article
  newsletter: NewsletterType
  type: "book" | "article" | null
  featuredArticleImageProps: ImageType
  heroImageProps: ImageType
  authorImageProps: ImageType
}

const Index: FC<IndexProps> = ({
  hero,
  articles,
  authorBio,
  featuredArticle,
  newsletter,
  heroImageProps,
  featuredArticleImageProps,
  authorImageProps,
  type,
}) => {
  const [runAgain, setRunAgain] = useState(false);

  const [localSession, setSession] = useRecoilState(userSessionState)
  const setNotification = useSetRecoilState(NotificationState)

  useEffect(() => {
    if (localSession) {
      return;
    }

    const session = supabase.auth.session();

    if (!session) {
      const timeout = setTimeout(() => {
        if (runAgain) {
          setNotification({
            message: "Unable to login - please try again later",
            variant: "danger"
          })
        }
        setRunAgain(true)
      }, 500)

      return () => {
        clearTimeout(timeout)
      }
    }

    const updateUserSessionState = () => {
      console.log('session from supabase', session)

      const user = {
        email: session?.user?.email,
        user_metadata: {
          username: session?.user?.user_metadata.full_name
        }
      }

      setSession(createUserSessionObject(user, session))
    }

    updateUserSessionState()
  }, [runAgain])

  return (
    <Main meta={META} footerProps={{ classes: "bg-dark text-gray-200" }}>
      <HeroImage data={hero} imageProps={heroImageProps} />

      <div className="2xl:w-9/12 2xl:mx-auto">
        <section className="2xl:mt-xl md:mt-[45px] mt-lg">
          <FeaturedArticle type={type} data={featuredArticle} imageProps={featuredArticleImageProps} />
        </section>

        {articles && (
          <section className="2xl:mt-xl mt-lg md:mt-[45px]">
            <h2 className="text-black md:hidden">Recently Updated</h2>
            <div className="articles mt-md">
              {articles.map((data: Article, key: number) => (
                <ArticleCardWithLink data={data} key={key} />
              ))}
            </div>
          </section>
        )}

        <section className="2xl:mt-xl md:mt-[45px] mt-lg">
          <Newsletter data={newsletter} />
        </section>
      </div>

      <footer className="2xl:mt-xl md:mt-[45px] mt-lg reverse-global-padding">
        <AboutMe data={authorBio} imageProps={authorImageProps} />
      </footer>
    </Main>
  )
}

export async function getStaticProps({ }) {
  const articleData = await getArticles(true)
  const heroData = await getHero()
  const authorBioData = await getAuthorBio()
  const newsletterData = await getNewsletter()
  const featuredArticleData = await getFeaturedArticle()
  const featuredArticle = featuredArticleData?.featuredArticle

  let type = "article"
  let featuredPost = featuredArticle.article

  if (!!featuredArticle?.book) {
    type = "book"
    featuredPost = featuredArticle.book
  }

  const heroImageProps = await blurImage(heroData?.heroImage?.image?.url, getPlaceholder)
  const featuredArticleImageProps = await blurImage(featuredPost?.image?.url, getPlaceholder)
  const authorImageProps = await blurImage(authorBioData?.author?.picture?.url, getPlaceholder)

  for (const article of articleData?.articles || []) {
    article.imageProps = await blurImage(article?.image?.url, getPlaceholder)
  }

  return {
    props: {
      articles: articleData?.articles || [],
      hero: heroData?.heroImage || null,
      authorBio: authorBioData?.author || null,
      newsletter: newsletterData?.newsletter || null,
      featuredArticle: featuredPost,
      featuredArticleImageProps,
      heroImageProps,
      authorImageProps,
      type,
    },
  }
}

export default Index
