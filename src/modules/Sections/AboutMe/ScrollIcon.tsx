import React from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

export const ScrollIcon = () => {
  return (
    <div className="flex col-start-3 row-start-1  w-full h-full items-center pb-8 justify-end">
      <div className="flex flex-col  items-center scroll-icon-container opacity-0  me-10">
        <BsFillArrowDownCircleFill className="text-soft-white text-4xl mb-4 scroll-icon" />
        <p className="text-soft-white text-sm uppercase weight-300 tracking-wide scroll-icon-description">
          scroll to navigate
        </p>
      </div>
    </div>
  );
};
