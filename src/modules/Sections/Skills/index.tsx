import Image from 'next/image';
import React from 'react';

import cherryPetals from '../../../assets/vectors/cherry-petals.svg';

const stackArray = [
  'html',
  'css',
  'sass',
  'javascript',
  'typescript',
  'react',
  'next.js',
  'jest',
  'bootstrap',
  'tailwind',
  'eslint',
  'figma',
  'webpack',
  'docker',
];

const Skills = () => {
  return (
    <section className="grid grid-cols-[5rem_1fr] grid-rows-3 w-full h-full shrink-0 sections text-main bg-soft-white">
      <p className="text-dark flex flex-col uppercase text-3xl self-center col-start-1 row-start-2 ms-6 font-bold ">
        <span>S</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
      </p>
      <div className="col-start-2 row-start-1 row-end-4  w-1/6 bg-slate-400  me-[5rem] flex justify-self-center self-center flex-col flex-wrap  ">
        {stackArray.map((skill) => (
          <div key="skill" className="flex justify-start items-center   mb-2 shrink-0 text-dark  text-xl  uppercase">
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
