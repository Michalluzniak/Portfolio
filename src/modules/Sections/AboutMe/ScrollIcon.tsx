import React from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

export const ScrollIcon = () => {
  return (
    <div className="flex  absolute top-0 right-0 pt-4 ">
      <div className="flex flex-col  items-center scroll-icon-container opacity-0  me-20">
        <BsFillArrowDownCircleFill className="text-soft-white text-4xl mb-4 scroll-icon" />
        <p className="text-soft-white text-xs uppercase weight-300 tracking-wide scroll-icon-description">
          scroll to navigate
        </p>
      </div>
    </div>
  );
};
