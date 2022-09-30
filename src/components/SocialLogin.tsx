import { FC } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import { loginWithProvider } from "../services/users";

const SocialLogin: FC = () => {
  const signInWithFacebook = () => null;
  const signInWithTwitter = () => loginWithProvider('twitter');
  const signInWithGoogle = () => loginWithProvider('google');

  return (
    <div className="grid grid-flow-col gap-2 md:gap-4 auto-cols-fr">
      <button type="button" className="btn-social bg-[#4064AC]" onClick={signInWithFacebook}>
        <FacebookIcon />
      </button>
      <button type="button" className="btn-social bg-[#1C9CEA]" onClick={signInWithTwitter}>
        <TwitterIcon />
      </button>
      <button type="button" className="btn-social bg-[#D64937]" onClick={signInWithGoogle}>
        <GoogleIcon />
      </button>
    </div>
  );
}

export default SocialLogin