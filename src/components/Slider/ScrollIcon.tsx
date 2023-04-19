import React from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

export const ScrollIcon = () => {
  return (
    <div className="xl:right-14 2xl:right-24 flex absolute top-5">
      <div className="flex flex-col  items-center scroll-icon-container opacity-0 ">
        <BsFillArrowDownCircleFill className="text-soft-white text-2xl mb-4 scroll-icon" />
        <p className="text-soft-white text-xs uppercase weight-300 tracking-wide scroll-icon-description">
          scroll to navigate
        </p>
      </div>
    </div>
  );
};
