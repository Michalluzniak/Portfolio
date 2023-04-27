import React, { useState } from 'react';
import WeatherAppLogo from '../../../assets/weaher.jpg';
import ColorTilesLogo from '../../../assets/colors.png';
import RmLogo from '../../../assets/rick-and-morty.jpg';
import Project from './Project';
import VerticalText from '@/components/VerticalText';
import { ProjectsList } from './ProjectsList';

const projects = ['color tiles', 'rick & morty character list', 'weather app'];

const Work = () => {
  const [currentProject, setCurrentProject] = useState<number>(1);
  const [isProjectWindowHovered, setIsProjectWindowHovered] = useState<boolean>(false);
  // w-10/12
  // h-1/2
  return (
    <section className="work-section grid grid-cols-[5rem_2fr_1fr] w-full h-full bg-dark shrink-0 sections text-main relative">
      <VerticalText text="work" color="text-soft-white" />

      {currentProject !== 0 && (
        <div
          className="projects-container w-10/12 xl:w-8/12 col-start-2 h-1/2 justify-self-center self-center relative font-logos rounded-2xl overflow-hidden shadow-md shadow-second-red"
          onMouseEnter={() => setIsProjectWindowHovered(true)}
          onMouseLeave={() => {
            setIsProjectWindowHovered(false);
          }}
        >
          {currentProject === 1 && (
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
          {currentProject === 2 && (
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

          {currentProject === 3 && (
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
      <ProjectsList projects={projects} currentProject={currentProject} setCurrentProject={setCurrentProject} />
    </section>
  );
};

export default Work;
