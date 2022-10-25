import Image from "next/image"
import { FC } from "react"
import { AuthorBio, ImageType } from "../utils/types/global"
import SocialIconBar from "./SocialIconBar"

type Props = {
  data?: AuthorBio
  imageProps: ImageType
}

const AboutMe: FC<Props> = ({ data, imageProps }) => {
  if (!data) return null
  const { firstName, lastName, bio, email, socialLinks } = data

  return (
    <main className="bg-dark global-padding py-lg md:py-xl lg:pb-lg">
      <div className="container grid mx-auto 2xl:w-9/12">
        <div className="items-center md:flex md:px-[45px] md:gap-8 lg:px-0 lg:gap-0 justify-self-center">
          <article className="lg:pr-xl md:w-8/12 lg:w-max">
            <h2 className="text-3xl font-bold text-gray-100">
              {firstName} {lastName}
            </h2>

            {bio && <p className="text-gray-400 lg:max-w-md">{bio}</p>}

            <div className="items-center hidden mt-6 md:flex lg:mt-[10px]">
              <SocialIconBar links={socialLinks} email={email} />
            </div>
          </article>

          {imageProps && (
            <figure className="relative mt-8 md:mt-0 h-[20rem] sm:w-64 md:w-[10rem] md:h-[10rem] md:self-start lg:self-center lg:w-[10rem] lg:h-[10rem] lg:mt-0 lg:ml-[-24px]">
              <Image
                layout="fill"
                {...imageProps}
                placeholder="blur"
                alt="Omar Dini"
                className="object-cover h-full rounded-lg shadow-inner md:rounded-full"
              />
            </figure>
          )}

          <div className="flex items-center mt-4 md:hidden lg:mt-2">
            <SocialIconBar links={socialLinks} email={email} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutMe
