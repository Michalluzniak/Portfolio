import VerticalText from '@/components/VerticalText';
import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiSass } from 'react-icons/di';
import {
  SiBootstrap,
  SiDocker,
  SiEslint,
  SiFigma,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const stackArray = [
  { name: 'html', icon: <AiFillHtml5 /> },
  { name: 'css', icon: <DiCss3 /> },
  { name: 'sass', icon: <DiSass /> },
  { name: 'javascript', icon: <SiJavascript /> },
  { name: 'typescript', icon: <SiTypescript /> },
  { name: 'react', icon: <SiReact /> },
  { name: 'redux', icon: <SiRedux /> },
  { name: 'next.js', icon: <SiNextdotjs /> },
  { name: 'jest', icon: <SiJest /> },
  { name: 'bootstrap', icon: <SiBootstrap /> },
  { name: 'tailwind', icon: <SiTailwindcss /> },
  { name: 'eslint', icon: <SiEslint /> },
  { name: 'figma', icon: <SiFigma /> },
  { name: 'docker', icon: <SiDocker /> },
];

const Skills = () => {
  return (
    <section className="grid grid-cols-[5rem_1fr_5rem] w-full h-full shrink-0 sections text-main bg-soft-white ">
      <VerticalText text="stack" color="text-dark" />

      <div className="lg:w-5/12 lg:opacity-0 lg:gap-x-12 lg:gap-y-6 xl:gap-6  2xl:opacity-1 xl:w-7/12 2xl:w-5/12 col-start-2 justify-self-center self-center grid grid-cols-7 grid-rows-2 skill">
        {stackArray.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center shrink-0 text-sm text-dark uppercase `}
          >
            <p className="lg:text-2xl xl:text-3xl 2xl:text-5xl text-second-red mb-4">{skill.icon}</p>
            <p className="lg:text-xs font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
