import React from 'react';

export const NavElements = () => {
  const navSections = ['about', 'skills', 'work', 'contact'];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100% ">
      <defs>
        <clipPath id="theClipPath">
          <rect className="mask" x="0" y="0" width="100%" height="100" fill="none" />
        </clipPath>
      </defs>

      <rect className="nav-bg" width="100%" height="100" fill="none" />
      <foreignObject width="100%" height="100%">
        <div className="w-full h-full flex justify-around items-center uppercase font-semibold ">
          {navSections.map((section, index) => {
            return index === navSections.length - 1 ? (
              <>
                <p className="text-soft-white text-xl nav-paragraph cursor-pointer">{section}</p>
              </>
            ) : index === 0 ? (
              <>
                <p className="text-dark text-xl nav-paragraph cursor-pointer">{section}</p>
                <span className="bg-soft-white w-1/12 h-1 nav-lines"></span>
              </>
            ) : (
              <>
                <p className="text-white text-xl nav-paragraph cursor-pointer">{section}</p>
                <span className="bg-soft-white w-1/12 h-1 nav-lines"></span>
              </>
            );
          })}
        </div>
      </foreignObject>
      <rect className="mask" fill="none" />

      <g id="clipPathReveal" clipPath="url(#theClipPath)">
        <foreignObject width="100%" height="100%">
          <div className="w-full h-full flex justify-around  items-center uppercase  font-semibold ">
            {navSections.map((section, index) => {
              return index === navSections.length - 1 ? (
                <>
                  <p className="text-[#9c0d38] text-xl nav-paragraph-progress cursor-pointer">{section}</p>
                </>
              ) : (
                <>
                  <p className="text-[#9c0d38] text-xl nav-paragraph-progress cursor-pointer">{section}</p>
                  <span className="bg-[#9c0d38]  w-1/12 h-1"></span>
                </>
              );
            })}
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};
