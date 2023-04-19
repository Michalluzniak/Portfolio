import Image from 'next/image';
import profilePhoto from '../../../assets/profile.png';
import { useAboutMeAnimations } from '../hooks/useAboutMeAnimations';

const AboutMe = (animationLoadingHandler: any) => {
  //
  useAboutMeAnimations(animationLoadingHandler);

  return (
    <section className="grid grid-cols-3 grid-rows-section h-full w-full shrink-0 sections" id="about-me-section">
      <div className="col-start-1 row-start-1 text-soft-white ms-24 self-center hero-name font-semibold translate-x-[-150%]">
        <h1 className="text-4xl font-main">Michał Łuźniak</h1>
        <h2 className="text-xl font-second ms-0.5">Front-End Developer</h2>
      </div>
      <div className="xl:w-60 xl:h-60 col-start-1 row-start-2 backdrop-blur-md w-72 h-72 border border-soft-white ms-24">
        <Image src={profilePhoto} fill alt="background cherry blossom picture"></Image>
      </div>

      <div className="about-me  xl:w-4/6  2xl:w-2/6 col-start-3 row-start-2 row-span-2 justify-self-end self-start me-10 text-soft-white">
        <p className="font-main xl:text-xs text-sm tracking-wide hero-description">
          <span id="hero-description-content"></span>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
