import React from 'react';

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
  'docker',
];

const Skills = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-3 w-full h-full shrink-0 sections text-main bg-soft-white">
      <p className="text-dark flex flex-col uppercase text-3xl self-center row-start-2 ms-6 font-bold ">
        <span>S</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
      </p>
      <div></div>
    </section>
  );
};

export default Skills;
