import React, { useState } from 'react';
import WeatherAppLogo from '../../../assets/weaher.jpg';
import ColorTilesLogo from '../../../assets/colors.png';
import RmLogo from '../../../assets/rick-and-morty.jpg';
import Project from './Project';
import VerticalText from '@/components/VerticalText';

const projects = ['admin dashboard', 'color tiles', 'rick & morty character list', 'weather app'];

const Work = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [isProjectWindowHovered, setIsProjectWindowHovered] = useState<boolean>(false);

  return (
    <section className="work-section grid grid-cols-[5rem_2fr_1fr] w-full h-full bg-dark shrink-0 sections text-main">
      <VerticalText text="work" color="text-soft-white" />

      {currentProject !== 0 && (
        <div
          className="col-start-2 h-1/2 w-8/12 justify-self-center self-center relative font-logos"
          onMouseEnter={() => setIsProjectWindowHovered(true)}
          onMouseLeave={() => {
            setIsProjectWindowHovered(false);
          }}
        >
          {currentProject === 1 && (
            // <Project
            //   title="atmosphere"
            //   titleDescription="7 days weather forecast app"
            //   hoverDescription="Atmosphere is a 7 days weather forecast around the world with local date."
            //   image={WeatherAppLogo}
            //   isProjectWindowHovered={isProjectWindowHovered}
            //   repoUrl="https://github.com/Michalluzniak/Weather_App"
            //   liveUrl="#"
            // />
            <div></div>
          )}

          {currentProject === 2 && (
            <Project
              title="Color tiles"
              titleDescription="store your favourite colors"
              hoverDescription="Color Tiles is an application where you can store your favourite colors in hexadecimal format and come back to them later."
              image={ColorTilesLogo}
              isProjectWindowHovered={isProjectWindowHovered}
              repoUrl="https://github.com/Michalluzniak/Color-Tiles"
              liveUrl="https://michalluzniak.github.io/Color-Tiles/"
            />
          )}
          {currentProject === 3 && (
            <Project
              title="Rick & Morty"
              titleDescription="characters list"
              hoverDescription="Rick & Morty is an app where you can search for any character from the series."
              image={RmLogo}
              isProjectWindowHovered={isProjectWindowHovered}
              repoUrl="https://github.com/Michalluzniak/Rick-and-Morty-Characters-List"
              liveUrl="https://michalluzniak.github.io/Rick-and-Morty-Characters-List/"
            />
          )}

          {currentProject === 4 && (
            <Project
              title="atmosphere"
              titleDescription="7 days weather forecast app"
              hoverDescription="Atmosphere is a 7 days weather forecast around the world with local date."
              image={WeatherAppLogo}
              isProjectWindowHovered={isProjectWindowHovered}
              repoUrl="https://github.com/Michalluzniak/Weather_App"
              liveUrl="#"
            />
          )}
        </div>
      )}
      <div className="flex flex-col col-start-3 h-1/3 w-6/12 justify-self-end self-center pr-8">
        {projects.map((project, index) => {
          return (
            <div
              key={project}
              className={`flex duration-500 ${
                index !== projects.length - 1
                  ? currentProject === index + 1
                    ? 'border-b border-[#9c0d38]'
                    : 'border-b border-soft-white'
                  : ''
              } h-1/4 items-center cursor-pointer relative text-soft-white`}
              onMouseEnter={() => {
                setCurrentProject(index + 1);
              }}
            >
              <div
                className={`absolute h-1 self-end  ${
                  currentProject === index + 1 ? 'w-full' : 'w-0'
                }  duration-500 bg-[#9c0d38]`}
              ></div>
              <p className={`uppercase  duration-500 z-50 w-8/12 text-base`}>{project}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
