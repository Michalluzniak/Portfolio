import gsap from 'gsap';
import React, { useEffect } from 'react';

export const skillsAnimations = () => {
  gsap.to('.skill', {
    width: '92%',
    opacity: 1,
    duration: 0.5,
    delay: 0.7,
  });
};
