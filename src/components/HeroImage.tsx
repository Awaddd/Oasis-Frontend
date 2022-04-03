import { api } from '../services/api';

type Data = {
  image?: {
    url: string;
  };
  title?: string;
  subtitle?: string;
};

const HeroImage = ({ data }: { data: Data }) => {

  if (!data) return null;
  const { image, title, subtitle } = data;

  if (!image) return null;

  return (
    <header className="reverse-global-padding reverse-top-global-page-padding">
      <div className="relative">
        {image && (<img src={`${api}${image?.url}`} alt="hero image" className="heroImage" />)}
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <div className="absolute w-full h-full hero-image-overlay"></div>
          <header className="z-10 text-center text-white md:text-gray-200">
            {title && <h1 className="text-3xl md:font-bold md:text-4xl">{title}</h1>}
            {subtitle && <h2 className="text-xl font-semibold md:text-2xl">{subtitle}</h2>}
          </header>
        </div>
      </div>
    </header>
  )
};



export default HeroImage;