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
      <p className="row-start-2 col-start-1 col-span-3 justify-self-center self-center text-soft-white z-20 text-xl  w-2/5 font-regular font-main text-center leading-8 opacity-0 group-hover/project1:opacity-100 duration-500">
        {hoverDescription}
      </p>
      <div className=" flex justify-center w-full  row-start-3 self-center col-start-1 col-span-3 opacity-0 group-hover/project1:opacity-100 duration-500">
        <Link
          target="_blank"
          href={repoUrl}
          className="grid place-items-center w-1/4 h-10 border border-[#9c0d38] text-base font-main text-soft-white rounded-full mx-6 z-40 hover:bg-[#9c0d38] duration-300"
        >
          Repo
        </Link>
        {liveUrl !== '#' ? (
          <Link
            target="_blank"
            href={liveUrl}
            className="grid place-items-center w-1/4 h-10 border border-[#9c0d38] text-base font-main text-soft-white rounded-full mx-6 z-40 hover:bg-[#9c0d38] duration-300"
          >
            Live
          </Link>
        ) : (
          <button className="grid place-items-center w-1/4 h-10 border border-slate-600 cursor-auto text-base font-main text-soft-white rounded-full mx-6 z-40">
            Live soon
          </button>
        )}
      </div>
    </>
  );
};
