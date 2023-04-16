import Image from 'next/image';
import React, { useState } from 'react';

import WeatherAppLogo from '../../../assets/weaher.jpg';
import ColorTilesLogo from '../../../assets/colors.png';
import RmLogo from '../../../assets/rick-and-morty.jpg';

const projects = ['weather app', 'rick & morty character list', 'color tiles', 'admin dashboard'];

const Work = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  return (
    <section className="work-section grid grid-cols-[5rem_2fr_1fr] w-full h-full bg-dark shrink-0 sections text-main">
      <p className="text-soft-white flex flex-col uppercase text-3xl self-center items-center col-start-1 font-bold">
        <span>w</span>
        <span>o</span>
        <span>r</span>
        <span>k</span>
      </p>
      {currentProject !== 0 && (
        <div
          className="col-start-2 h-1/2 w-8/12 justify-self-center self-center relative font-logos"
          onMouseLeave={() => setCurrentProject(0)}
        >
          {currentProject === 1 && (
            <div className="project1 flex items-center justify-center flex-col relative w-full h-full ">
              <div
                className="w-full h-full absolute bg-cover bg-red-200 opacity-40"
                style={{ backgroundImage: `url(${WeatherAppLogo.src})` }}
              />
              <p className="text-soft-white z-20 text-8xl uppercase">atmosphere</p>
              <p className="text-soft-white z-20 text-2xl uppercase">7 days weather forecast app</p>
            </div>
          )}
          {currentProject === 2 && (
            <div className="project2 flex items-center justify-center flex-col relative w-full h-full ">
              <div
                className="w-full h-full absolute bg-cover bg-red-200 opacity-40"
                style={{ backgroundImage: `url(${ColorTilesLogo.src})` }}
              />
              <p className="text-soft-white z-20 text-8xl uppercase">Color tiles</p>
              <p className="text-soft-white z-20 text-2xl uppercase">store your favourite colors</p>
            </div>
          )}
          {currentProject === 3 && (
            <div className="project3 flex items-center justify-center flex-col relative w-full h-full ">
              <div
                className="w-full h-full absolute bg-cover bg-red-200 opacity-40"
                style={{ backgroundImage: `url(${RmLogo.src})` }}
              />
              <p className="text-soft-white z-20 text-8xl uppercase">Rick & Morty</p>
              <p className="text-soft-white z-20 text-2xl uppercase">character list</p>
            </div>
          )}
          {/* <div className="project4"></div> */}
        </div>
      )}
      <div className="flex flex-col col-start-3 h-1/2 w-8/12 justify-self-end self-center pr-16">
        {projects.map((project, index) => {
          return (
            <div
              key={project}
              className={`flex ${
                index !== projects.length - 1 ? 'border-b border-soft-white' : ''
              } h-1/4 items-center cursor-pointer`}
              onMouseEnter={() => setCurrentProject(index + 1)}
            >
              <p className={`uppercase text-soft-white  w-10/12 text-2xl`}>{project}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
