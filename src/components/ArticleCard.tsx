import { Article } from "../utils/types/global";

const ArticleCard = ({ data }: { data: Article }) => {
  const { title, subtitle, image } = data

  if (!image) return null;

  return (
    <article className="grid cursor-pointer">
      {image && (<img src={image?.url} alt="cover image" className="object-cover w-full rounded-lg md:h-48 h-52 3xl:h-60" />)}
      <div className="mt-2.5 mx-[.525rem]">
        <h2 className="text-xl font-bold leading-7 text-black">{title}</h2>
        {subtitle && <p className="md:mt-[2px]">{subtitle}</p>}
      </div>
    </article>
  )
}

export default ArticleCard