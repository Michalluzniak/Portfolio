import gsap from 'gsap';
import React, { useEffect } from 'react';

export const useHeroTransitionAnimation = () => {
  useEffect(() => {
    gsap.fromTo('.hero-name', { x: '-150%' }, { x: '0%', duration: 1 });
    gsap.to('.scroll-icon', { y: '15%', yoyo: true, repeat: -1, duration: 1 });
    gsap.to('.scroll-icon-container', { opacity: 1, delay: 7 });
  });
};
