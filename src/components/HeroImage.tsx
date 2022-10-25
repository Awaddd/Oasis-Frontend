import Image from 'next/image';
import { FC } from "react";
import { HeroImage, ImageType } from "../utils/types/global";

type Props = {
  data: HeroImage;
  imageProps: ImageType;
}

const Hero: FC<Props> = ({ data, imageProps }) => {
  if (!data || !imageProps) return null;

  const { title, subtitle } = data;

  return (
    <header className="reverse-global-padding reverse-top-global-page-padding">
      <div className="relative">
        {imageProps && (
          <div className="heroImage">
            <Image layout="fill" {...imageProps} placeholder="blur" priority alt="hero image" className="object-cover" />
          </div>
        )}
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <div className="absolute w-full h-full hero-image-overlay"></div>
          <header className="z-10 text-center text-white md:text-gray-200 select-none">
            {title && <h1 className="text-3xl md:font-bold md:text-4xl">{title}</h1>}
            {subtitle && <h2 className="text-xl font-semibold md:text-2xl">{subtitle}</h2>}
          </header>
        </div>
      </div>
    </header>
  )
};

export default Hero;
