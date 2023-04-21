import React, { useEffect, useRef, useState } from 'react';
import { ScrollIcon } from '@/components/Slider/ScrollIcon';

import { useSliderAnimation } from './hooks/useSliderAnimation';

import Nav from './Nav';
// SECTIONS
import AboutMe from '@/modules/Sections/AboutMe';
import Skills from '@/modules/Sections/Skills';
import Work from '@/modules/Sections/Work';
import Contact from '@/modules/Sections/Contact';

const Slider = () => {
  //
  const [isAnimationsLoaded, setIsAnimationsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useSliderAnimation(sectionRef, navRef, isAnimationsLoaded);

  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current !== null) videoRef.current.playbackRate = 8;
  }, []);

  const animationLoadingHandler = () => {
    setIsAnimationsLoaded(true);
  };

  return (
    <div
      className="flex flex-col bg-dark col-start-2 row-start-2 border border-soft-white overflow-hidden relative"
      id="sections-container"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        className=" md:object-cover md:w-full md:h-full md:top-0 md:left-0 lg:w-full lg:h-full lg:top-0 lg:left-0 lg:object-cover lg:object-bottom absolute"
      >
        <source src="blossoming.webm" />
      </video>
      <main ref={sectionRef} className="flex flex-row w-full h-full">
        <AboutMe animationLoadingHandler={animationLoadingHandler} />
        <Skills />
        <Work />
        <Contact />
      </main>

      <ScrollIcon />
      <Nav navRef={navRef}></Nav>
    </div>
  );
};

export default Slider;
