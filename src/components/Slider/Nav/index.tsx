import React from 'react';
import { NavElements } from './NavElements';

const Nav = ({ navRef }: any) => {
  return (
    <nav ref={navRef} className="h-20 w-full text-soft-white font-main absolute bottom-0 left-0 ">
      <NavElements />
    </nav>
  );
};

export default Nav;
