import React from 'react';

const navSections = ['about', 'skills', 'work', 'contact'];

const Nav = ({ navRef }: any) => {
  return (
    <nav ref={navRef} className="flex justify-between items-center h-20 w-full px-24 text-soft-white font-main">
      {navSections.map((section, index) => {
        return index === navSections.length - 1 ? (
          <>
            <p className="text-xl uppercase cursor-pointer">{section}</p>
          </>
        ) : (
          <>
            <p className="text-xl uppercase cursor-pointer">{section}</p>
            <span className="bg-soft-white w-1/12 h-0.5"></span>
          </>
        );
      })}
    </nav>
  );
};

export default Nav;
