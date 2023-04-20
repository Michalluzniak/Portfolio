import React from 'react';
import { NavElements } from './NavElements';

const Nav = ({ navRef }: any) => {
  return (
    <nav
      ref={navRef}
      className="md:h-20 md:w-[calc(100%+100px)]  rotate-90 origin-left   md:bottom-0 md:left-0   lg:rotate-0  lg:h-20 lg:w-full lg:bottom-0 lg:left-0 text-soft-white font-main absolute"
    >
      <NavElements />
    </nav>
  );
};

export default Nav;

// translate-y-[-1000%] translate-x-[5%]
