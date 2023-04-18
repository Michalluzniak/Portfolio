import React, { useRef, useEffect, useState } from 'react';

import Image from 'next/image';
import bgTop from '/public/background/cherry-top.png';
import bgRight from '/public/background/cherry-right.png';
import bgBottom from '/public/background/cherry-bottom.png';

import { SiGmail } from 'react-icons/si';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

import Slider from '@/components/Slider';

export default function Home() {
  return (
    <div className="h-screen w-full grid grid-cols-layout grid-rows-layout ">
      <div className="col-start-2 row-start-1 relative" id="top-row"></div>
      <div className="col-start-3 row-span-3 relative" id="right-column"></div>
      <div className="col-start-2 row-start-3 relative" id="bottom-row"></div>
      <div
        className="flex flex-col items-center justify-center col-start-1 row-start-1 row-span-3 relative"
        id="left-column"
      >
        {/* <Image src={bgLeft} fill alt="background cherry-blossom photo"></Image> */}
        <SiGmail className="text-soft-white text-3xl my-4" />
        <AiFillLinkedin className="text-soft-white text-4xl my-4" />
        <AiFillGithub className="text-soft-white text-4xl my-4" />
      </div>
      <Slider></Slider>
    </div>
  );
}
