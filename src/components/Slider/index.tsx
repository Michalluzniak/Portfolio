import AboutMe from '@/modules/Sections/AboutMe';
import { ScrollIcon } from '@/components/Slider/ScrollIcon';
import Skills from '@/modules/Sections/Skills';
import React, { useEffect, useRef, useState } from 'react';

import { useSliderAnimation } from './hooks/useSliderAnimation';
import Nav from './Nav';
import Work from '@/modules/Sections/Work';

const Slider = () => {
  const [isAnimationsLoaded, setIsAnimationsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useSliderAnimation(sectionRef, navRef, isAnimationsLoaded);

  const videoRef = useRef<any>(null);
  useEffect(() => {
    videoRef.current.playbackRate = 8;
  }, []);

  const animationLoadingHandler = () => {
    setIsAnimationsLoaded(true);
  };

  console.log(isAnimationsLoaded);

  return (
    <div
      className="flex flex-col bg-dark col-start-2 row-start-2 border border-soft-white overflow-hidden relative"
      id="sections-container"
    >
      <video ref={videoRef} autoPlay muted className="absolute w-full h-full top-0 left-0 object-cover object-bottom">
        <source src="blossoming.mp4" />
      </video>
      <main ref={sectionRef} className="flex grow  flex-row w-full">
        <AboutMe animationLoadingHandler={animationLoadingHandler} />
        <Skills />
        <Work />
        <section className="w-full h-full bg-soft-white shrink-0 sections"></section>

        {/* Section SKILLS */}
        {/* Section WORK */}
        {/* Section CONTACT */}
      </main>
      {/* NAV*/}
      <ScrollIcon />
      <Nav navRef={navRef}></Nav>
    </div>
  );
};

export default Slider;
