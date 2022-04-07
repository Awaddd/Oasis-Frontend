import { FC } from 'react';
import Image from 'next/image';
import { ImageType } from '../../utils/types/global';
import classNames from 'clsx';

type Props = {
  title: string;
  classes?: string;
  imageProps: ImageType;
}

const ImageCard: FC<Props> = ({ title, imageProps, classes, children }) => (
  <div className={classNames("relative h-52 sm:h-60 md:h-80 lg:h-96 3xl:h-[28rem]", classes)}>
    {imageProps && (<Image layout="fill" {...imageProps} placeholder="blur" priority alt={title} className="absolute top-0 z-10 text-center text-gray-200 bg-gray-900 rounded-lg object-cover heroImage" />)}
    <div className="absolute top-0 left-0 grid w-full h-full">
      <div className="absolute z-10 w-full h-full rounded-lg hero-image-overlay"></div>
      <div className="z-10 flex flex-col w-full h-full text-center text-white px-md py-sm">
        <header className="flex items-center justify-center flex-1 w-11/12 mx-auto">
          <h1 className="text-2xl tracking-tight md:text-3xl md:font-semibold lg:text-4xl 2xl:text-5xl">{title}</h1>
        </header>
        {children}
      </div>
    </div>
  </div>
);

export default ImageCard;
