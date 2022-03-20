import { FC } from 'react';
import { SocialLink } from '../utils/types/global';
import SocialIconBar from './SocialIconBar';

type Props = {
  socialLinks?: SocialLink[];
  color?: string;
}

const ArticleFooter: FC<Props> = ({ socialLinks, color }) => (
  <footer className={`flex flex-col text-center footer py-[24px] md:py-lg md:pb-[45px] px-lg ${color}`}>
    <h4 className="font-bold text-gray-900">Thanks for reading</h4>
    <p className="text-sm">Make sure to check back for weekly updates!</p>
    <div className="flex self-center items-center mt-[16px">
      <SocialIconBar links={socialLinks} dark={true} />
    </div>
  </footer>
)

export default ArticleFooter;