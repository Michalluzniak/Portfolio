import React from 'react';
import { NavElements } from './NavElements';

const Nav = ({ navRef }: any) => {
  return (
    <nav ref={navRef} className="flex justify-between items-center h-20 w-full px-24 text-soft-white font-main">
      <NavElements />
    </nav>
  );
};

export default Nav;
