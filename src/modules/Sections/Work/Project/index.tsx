import React from 'react';
import { HoveredProject } from './HoveredProject';

const Project = ({
  title,
  titleDescription,
  image,
  hoverDescription,
  isProjectWindowHovered,
  repoUrl,
  liveUrl,
}: any) => {
  return (
    <div
      className="project1 grid grid-cols-3 grid-rows-3 relative w-full h-full group/project1 overflow-hidden"
      style={{ transitionDuration: '5s' }}
    >
      <div
        className={`w-full h-full absolute bg-cover duration-500 group-hover/project1:scale-125  ${
          isProjectWindowHovered ? 'opacity-10' : 'opacity-40'
        }`}
        style={{ backgroundImage: `url(${image.src})` }}
      />

      <HoveredProject hoverDescription={hoverDescription} repoUrl={repoUrl} liveUrl={liveUrl} />

      <p className="row-start-2 col-start-1 col-span-3 justify-self-center self-center text-soft-white z-20 text-8xl uppercase group-hover/project1:opacity-0 duration-300">
        {title}
      </p>
      <p className="row-start-2 col-start-1 col-span-3 justify-self-center self-end text-soft-white z-20 text-2xl uppercase group-hover/project1:opacity-0 duration-300">
        {titleDescription}
      </p>
    </div>
  );
};

export default Project;