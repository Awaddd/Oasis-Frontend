import { FC } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";

const SocialLogin: FC = () => (
  <div className="grid grid-flow-col gap-2 md:gap-4 auto-cols-fr">
    <button type="button" className="btn-social bg-[#4064AC]">
      <FacebookIcon />
    </button>
    <button type="button" className="btn-social bg-[#1C9CEA]">
      <TwitterIcon />
    </button>
    <button type="button" className="btn-social bg-[#D64937]">
      <GoogleIcon />
    </button>
  </div>
)

export default SocialLogin