import Link from 'next/link';
import React from 'react';

interface HoveredProjectProps {
  hoverDescription: string;
  repoUrl: string;
  liveUrl: string;
}

export const HoveredProject = ({ hoverDescription, repoUrl, liveUrl }: HoveredProjectProps) => {
  return (
    <>
      <p className="xl:text-base xl:w-3/5 row-start-2 col-start-1 col-span-3 justify-self-center self-center text-soft-white z-20 2xl:text-xl  2xl:w-2/5 font-regular font-main text-center leading-8 opacity-0 group-hover/project1:opacity-100 duration-500">
        {hoverDescription}
      </p>
      <div className="flex justify-center w-full  row-start-3 self-center col-start-1 col-span-3 opacity-0 group-hover/project1:opacity-100 duration-500">
        <Link
          target="_blank"
          href={repoUrl}
          className="xl:h-8 xl:text-sm grid place-items-center xl:w-1/4 2xl:h-10 border border-second-red text-base font-main text-soft-white rounded-full mx-6 z-40 hover:bg-second-red duration-300"
        >
          Repo
        </Link>
        {liveUrl !== '#' ? (
          <Link
            target="_blank"
            href={liveUrl}
            className="xl:h-8 xl:text-sm grid place-items-center xl:w-1/4 2xl:h-10 border border-second-red text-base font-main text-soft-white rounded-full mx-6 z-40 hover:bg-second-red duration-300"
          >
            Live
          </Link>
        ) : (
          <button className="xl:h-8 xl:text-sm grid place-items-center xl:w-1/4 2xl:h-10 border border-slate-600 cursor-auto text-base font-main text-soft-white rounded-full mx-6 z-40">
            Live soon
          </button>
        )}
      </div>
    </>
  );
};
