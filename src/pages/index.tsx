import { SiGmail } from 'react-icons/si';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

import Slider from '@/components/Slider';
import Link from 'next/link';

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
        <Link href="mailto:michal.luzniak8@gmail.com" className="text-soft-white hover:text-second-red duration-300">
          <SiGmail className="lg:text-2xl xl:text-3xl my-4 " />
        </Link>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/michalluzniak/"
          className="text-soft-white hover:text-second-red duration-300"
        >
          <AiFillLinkedin className="lg:text-3xl xl:text-4xl my-4" />
        </a>
        <a target="_blank" href="#" className="text-soft-white hover:text-second-red duration-300">
          <AiFillGithub className="lg:text-3xl xl:text-4xl my-4" />
        </a>
      </div>
      <Slider></Slider>
    </div>
  );
}
