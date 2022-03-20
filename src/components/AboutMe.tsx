import { FC } from "react";
import { AuthorBio } from "../utils/types/global";
import SocialIconBar from "./SocialIconBar";

type Props = {
  data?: AuthorBio;
}

const AboutMe: FC<Props> = ({ data }) => {
  if (!data) return null;
  const { firstName, lastName, bio, socialLinks } = data;

  return (
    <main className="bg-gray-900 global-padding py-lg md:py-xl">
      <div className="container mx-auto 2xl:w-9/12">
        <div className="items-center lg:flex">
          <article className="lg:w-1/2 lg:px-xl md:px-[45px]">
            <h2 className="text-3xl font-bold text-gray-100">{firstName} {lastName}</h2>

            {bio && (<p className="text-gray-400 lg:max-w-md">{bio}</p>)}

            <div className="flex items-center mt-6 -mx-2">
              <SocialIconBar links={socialLinks} />
            </div>
          </article>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center justify-end h-64 bg-gray-800 rounded-md">
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;