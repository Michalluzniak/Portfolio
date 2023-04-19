import Image from 'next/image';
import profilePhoto from '../../../assets/profile.png';
import { useAboutMeAnimations } from '../hooks/useAboutMeAnimations';

const AboutMe = (animationLoadingHandler: any) => {
  //
  useAboutMeAnimations(animationLoadingHandler);

  return (
    <section className="grid grid-cols-3 grid-rows-section h-full w-full shrink-0 sections" id="about-me-section">
      <div className="col-start-1 row-start-1 text-soft-white ms-24 self-center hero-name font-semibold translate-x-[-150%]">
        <h1 className="lg:text-3xl xl:text-4xl 2xl:text-6xl w-[200%] font-normal  font-main">Michał Łuźniak</h1>
        <h2 className="lg:text-xl 2xl:text-3xl font-normal  font-second ms-0.5">Front-End Developer</h2>
      </div>
      <div className="lg:w-56 lg:h-56 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 col-start-1 row-start-2 backdrop-blur-md w-72 h-72 border border-soft-white ms-24">
        <Image src={profilePhoto} fill alt="background cherry blossom picture"></Image>
      </div>

      <div className="about-me lg:w-4/6 xl:w-3/6  2xl:w-2/6 2xl:row-start-3  col-start-3 row-start-2  justify-self-end self-start me-10 text-soft-white">
        <p className="font-main lg:text-xs  xl:text-xs text-sm tracking-wide hero-description">
          <span id="hero-description-content"></span>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
