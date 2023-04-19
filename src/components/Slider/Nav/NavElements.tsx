import React from 'react';

export const NavElements = () => {
  const navSections = ['about', 'stack', 'work', 'contact'];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100% ">
      <defs>
        <clipPath id="theClipPath">
          <rect className="mask" x="0" y="0" width="100%" height="100" fill="none" />
        </clipPath>
      </defs>

      <rect className="nav-bg" width="100%" height="100" fill="none" />
      <foreignObject width="100%" height="100%">
        <div className=" 2xl:text-xl w-full h-full flex justify-around items-center uppercase font-semibold text-soft-white ">
          {navSections.map((section, index) => {
            //
            return index === navSections.length - 1 ? (
              <React.Fragment key={index}>
                <p className="nav-paragraph cursor-pointer">{section}</p>
              </React.Fragment>
            ) : index === 0 ? (
              <React.Fragment key={index}>
                <p className="text-dark nav-paragraph cursor-pointer">{section}</p>
                <span className="bg-soft-white w-1/12 h-1 nav-lines"></span>
              </React.Fragment>
            ) : (
              <React.Fragment key={index}>
                <p className="nav-paragraph cursor-pointer">{section}</p>
                <span className="bg-soft-white w-1/12 h-1 nav-lines"></span>
              </React.Fragment>
            );
          })}
        </div>
      </foreignObject>

      <rect className="mask" fill="none" />

      <g id="clipPathReveal" clipPath="url(#theClipPath)">
        <foreignObject width="100%" height="100%">
          <div className=" 2xl:text-xl w-full h-full flex justify-around  items-center uppercase  font-semibold text-main-red ">
            {navSections.map((section, index) => {
              //
              return index === navSections.length - 1 ? (
                <React.Fragment key={index}>
                  <p className="nav-paragraph-progress cursor-pointer">{section}</p>
                </React.Fragment>
              ) : (
                <React.Fragment key={index}>
                  <p className="nav-paragraph-progress cursor-pointer">{section}</p>
                  <span className="bg-main-red w-1/12 h-1"></span>
                </React.Fragment>
              );
            })}
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};
