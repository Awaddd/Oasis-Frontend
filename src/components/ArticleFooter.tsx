import { FC } from "react"
import { SocialLink } from "../types/global"
import SocialIconBar from "./SocialIconBar"

type Props = {
  socialLinks?: SocialLink[]
  email?: string
  color?: string
}

const ArticleFooter: FC<Props> = ({ socialLinks, email, color }) => (
  <footer className={`flex flex-col text-center mt-[-24px] pb-md px-lg ${color}`}>
    <h4 className="font-bold text-gray-900">Thanks for reading</h4>
    <p className="text-sm">Make sure to check back for weekly updates!</p>
    <div className="flex items-center self-center mt-sm">
      <SocialIconBar links={socialLinks} email={email} dark={true} />
    </div>
  </footer>
)

export default ArticleFooter
