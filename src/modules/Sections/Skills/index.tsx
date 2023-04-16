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
    <section className="grid grid-cols-[5rem_1fr] grid-rows-3 w-full h-full shrink-0 sections text-main bg-soft-white">
      <p className="text-dark flex flex-col uppercase text-3xl self-center item-center col-start-1 row-start-2 ms-6 font-bold">
        <span>S</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
      </p>

      <div className="col-start-2 row-start-1 row-span-3 justify-self-center self-center grid grid-cols-7 grid-rows-2 gap-6">
        {stackArray.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center shrink-0  text-sm text-dark w-18 uppercase skill`}
          >
            <p className="text-5xl text-[#9c0d38] mb-4">{skill.icon}</p>
            <p className="font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
