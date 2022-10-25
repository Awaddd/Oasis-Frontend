import ArticleFooter from '../components/ArticleFooter';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import parse from 'html-react-parser';
import { getAuthor } from '../services/global';

const META = (
  <Meta
    title="Omar Dini | Author"
    description="Omar Dini's personal blog"
  />
);

const Author = ({ author }: { author: any }) => {
  if (!author) return null;

  return (
    <Main meta={META} classes="pb-lg" footer={<ArticleFooter socialLinks={author?.socialLinks} email={author?.email} />} >

      <div className="lg:w-3/5 md:mx-auto my-lg mb-[45px] 2xl:w-2/4 h-full">
        <article className="!max-w-full prose-sm md:prose sm:prose 2xl:prose-xl mt-8">
          {parse(author?.profile)}
        </article>
      </div>
    </Main>
  );
};

export async function getStaticProps({ }) {
  const data = await getAuthor();

  return {
    props: {
      author: data?.author || null,
    }
  }
}

export default Author;
