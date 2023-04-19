import React from 'react';

interface ProjectsListProps {
  projects: string[];
  currentProject: number;
  setCurrentProject: React.Dispatch<React.SetStateAction<number>>;
}

export const ProjectsList = ({ projects, currentProject, setCurrentProject }: ProjectsListProps) => {
  return (
    <div className="lg:w-8/12 xl:w-6/12 flex flex-col col-start-3 h-1/3  justify-self-end self-center pr-8">
      {projects.map((project, index) => {
        return (
          <div
            key={project}
            className={`flex duration-500 ${
              index !== projects.length - 1
                ? currentProject === index + 1
                  ? 'border-b border-main-red'
                  : 'border-b border-soft-white'
                : ''
            } h-1/4 items-center cursor-pointer relative text-soft-white`}
            onMouseEnter={() => {
              setCurrentProject(index + 1);
            }}
          >
            <div
              className={`lg:h-0.5 absolute h-1 self-end  ${
                currentProject === index + 1 ? 'w-full' : 'w-0'
              }  duration-500 bg-main-red`}
            ></div>
            <p className={`lg:text-sm xl:w-11/12 2xl:w-8/12 uppercase duration-500 z-50`}>{project}</p>
          </div>
        );
      })}
    </div>
  );
};
