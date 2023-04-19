import React from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

export const ScrollIcon = () => {
  return (
    <div className="lg:right-20 lg:top-2/3 xl:right-14 xl:top-5 2xl:right-24 flex absolute">
      <div className="flex flex-col  items-center scroll-icon-container opacity-0 ">
        <BsFillArrowDownCircleFill className="lg:text-xl xl:text-2xl text-soft-white  mb-4 scroll-icon" />
        <p className="text-soft-white text-xs uppercase weight-300 tracking-wide scroll-icon-description">
          scroll to navigate
        </p>
      </div>
    </div>
  );
};
