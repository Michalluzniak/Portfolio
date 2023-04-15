import gsap from 'gsap';
import React, { useEffect } from 'react';

export const skillsAnimations = () => {
  gsap.to('.skill', {
    width: '12rem',
    duration: 0.5,
    delay: 0.7,
  });
};
