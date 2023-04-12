import React from 'react';

export const NavElements = () => {
  const navSections = ['about', 'skills', 'work', 'contact'];
  return (
    <svg id="demo" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%">
      <defs>
        <clipPath id="theClipPath">
          <rect className="mask" x="0" y="0" width="100%" height="100" fill="#020202" />
        </clipPath>
      </defs>
      <rect x="0" y="0" width="100%" height="100" fill="#020202" />
      <foreignObject width="100%" height="100%">
        <div className="w-full h-full flex justify-between items-center uppercase ">
          {navSections.map((section, index) => {
            return index === navSections.length - 1 ? (
              <>
                <p className="text-white text-xl nav-paragraph cursor-pointer">{section}</p>
              </>
            ) : (
              <>
                <p className="text-white text-xl nav-paragraph cursor-pointer">{section}</p>
                <span className="bg-soft-white w-1/12 h-0.5"></span>
              </>
            );
          })}
        </div>
      </foreignObject>
      <rect className="mask" x="0" y="0" width="100%" height="100%" fill="#020202" />
      <g id="clipPathReveal" clipPath="url(#theClipPath)">
        <foreignObject width="100%" height="100%">
          <div className="w-full h-full flex justify-between items-center uppercase ">
            {navSections.map((section, index) => {
              return index === navSections.length - 1 ? (
                <>
                  <p className="text-red-900 text-xl nav-paragraph-progress cursor-pointer">{section}</p>
                </>
              ) : (
                <>
                  <p className="text-red-900 text-xl nav-paragraph-progress cursor-pointer">{section}</p>
                  <span className="bg-red-900 w-1/12 h-0.5"></span>
                </>
              );
            })}
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};
