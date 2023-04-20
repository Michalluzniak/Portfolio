import Image from 'next/image';
import profilePhoto from '../../../assets/profile.png';
import { useAboutMeAnimations } from '../hooks/useAboutMeAnimations';

const AboutMe = (animationLoadingHandler: any) => {
  //
  useAboutMeAnimations(animationLoadingHandler);

  return (
    <section className="grid grid-cols-3 grid-rows-section h-full w-full shrink-0 sections" id="about-me-section">
      <div className=" md:col-start-1 md:col-span-3 lg:justify-self-start lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:ms-24 text-soft-white  self-center hero-name font-semibold translate-x-[-150%]">
        <h1 className="md:text-5xl md:text-center lg:text-start lg:text-3xl xl:text-4xl 2xl:text-6xl lg:w-[200%] font-normal  font-main">
          Michał Łuźniak
        </h1>
        <h2 className="md:text-3xl md:text-center lg:text-start lg:text-xl 2xl:text-3xl font-normal  font-second ms-0.5">
          Front-End Developer
        </h2>
      </div>
      <div className="md:col-start-2 md:justify-self-center lg:col-start-1 lg:justify-self-start lg:w-56 lg:h-56 lg:ms-24 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 col-start-1 row-start-2 backdrop-blur-md w-72 h-72 border border-soft-white ">
        <Image src={profilePhoto} priority={true} loading="eager" fill alt="background cherry blossom picture"></Image>
      </div>
      <div className="about-me md:bg-dark/40 md:col-start-1 md:col-span-3 md:row-start-3 md:w-11/12 md:mt-12 md:px-10 md:py-4 md:rounded-2xl md:text-center md:justify-self-center lg:bg-transparent lg:px-0 lg:mt-0 lg: lg:text-start lg:col-start-3  lg:row-start-2  lg:w-4/6  lg:me-10  xl:w-3/6  2xl:w-2/6 justify-self-end self-start text-soft-white">
        <p className="font-main lg:text-xs  xl:text-xs 2xl:text-sm tracking-wide hero-description">
          <span id="hero-description-content"></span>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
