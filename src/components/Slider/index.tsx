import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePhoto from '../../assets/profile.png';

import { useSliderAnimation } from './hooks/useSliderAnimation';
import Nav from './Nav';

const Slider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useSliderAnimation(sectionRef, navRef);

  return (
    <div className="flex flex-col bg-dark col-start-2 row-start-2 border border-soft-white overflow-hidden ">
      <main ref={sectionRef} className="flex grow relative flex-row w-full ">
        {/* Section INFO */}
        <section className="grid grid-cols-3 grid-rows-section h-full w-full shrink-0  sections" id="about-me-section">
          <div className="col-start-1 row-start-1 text-soft-white ms-24 self-center">
            <h1 className="text-5xl font-main">Michał Łuźniak</h1>
            <h2 className="text-3xl font-second ms-0.5">Front-End Developer</h2>
          </div>
          <div className="col-start-1 row-start-2 backdrop-blur-md w-72 h-72 border border-soft-white  ms-24">
            <Image src={profilePhoto} fill alt="background cherry-blossom photo"></Image>
          </div>

          <div className="about-me col-start-3 row-start-2 row-span-2 w-3/6 justify-self-end self-end mb-8 me-10 text-soft-white">
            <p className="font-main text-sm tracking-wide">
              Born in 1998 in Wroclaw, Poland. I love creating minimalist and clean websites. Less is more, so I try to
              include as much content as possible in the most readable way. I have almost a year of commercial
              experience. I am looking for every opportunity to improve my programming and design skills.
            </p>
          </div>
        </section>

        <section className="w-full h-full shrink-0 bg-red-500 sections"></section>
        <section className="w-full h-full bg-green-800  shrink-0 sections"></section>
        <section className="w-full h-full bg-purple-500 shrink-0 sections"></section>

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
