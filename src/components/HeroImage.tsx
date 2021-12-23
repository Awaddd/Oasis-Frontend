const HeroImage = ({ data }: { data: any }) => {

  const { image, title, subtitle } = data

  return (
    <div className="relative">
      <img src={`http://localhost:1337${image.url}`} alt="hero image" className="heroImage" />
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
        <div className="absolute w-full h-full hero-image-overlay"></div>
        <header className="z-10 text-center text-white md:text-gray-200">
          {title && <h1 className="text-3xl md:font-bold md:text-4xl">{title}</h1>}
          {subtitle && <h2 className="text-xl font-semibold md:text-2xl">{subtitle}</h2>}
        </header>
      </div>
    </div>
  )
};



export default HeroImage;