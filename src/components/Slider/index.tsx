import AboutMe from '@/modules/Sections/AboutMe';
import Skills from '@/modules/Sections/Skills';
import React, { useEffect, useRef } from 'react';

import profilePhoto from '../../assets/profile.png';
import { useSliderAnimation } from './hooks/useSliderAnimation';
import Nav from './Nav';

const Slider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useSliderAnimation(sectionRef, navRef);

  return (
    <div
      className="flex flex-col bg-dark col-start-2 row-start-2 border border-soft-white overflow-hidden relative"
      id="sections-container"
    >
      <main ref={sectionRef} className="flex grow relative flex-row w-full">
        <AboutMe />
        <Skills />
        <section className="w-full h-full bg-dark  shrink-0 sections"></section>
        <section className="w-full h-full bg-soft-white shrink-0 sections"></section>

        {/* Section SKILLS */}
        {/* Section WORK */}
        {/* Section CONTACT */}
      </main>
      {/* NAV*/}

      <Nav navRef={navRef}></Nav>
    </div>
  );
};

export default Slider;
