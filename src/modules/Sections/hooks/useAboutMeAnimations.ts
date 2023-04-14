import gsap from 'gsap';
import React, { useEffect } from 'react';
import { TextPlugin } from 'gsap/dist/TextPlugin';

export const useAboutMeAnimations = ({ animationLoadingHandler }: any) => {
  useEffect(() => {
    let cursor = document.querySelector('#hero-description-content');
    let text: any = document.querySelector('.hero-description');

    gsap.registerPlugin(TextPlugin);

    gsap
      .timeline()
      .to('.hero-name', {
        x: '0%',
        duration: 1,
      })
      .to('.hero-description', {
        text: {
          value: `Born in 1998 in Wroclaw, Poland. I love creating minimalist and clean websites. Less is more, so I try to
        include as much content as possible in the most readable way. I have almost a year of commercial experience. I
        am looking for every opportunity to improve my programming and design skills.`,
        },
        duration: 4,
        ease: 'none',
        onUpdate: () => text.appendChild(cursor),
      })
      .to('.scroll-icon-container', {
        opacity: 1,
        onComplete: () => {
          animationLoadingHandler(true);
        },
      })
      .to('.scroll-icon', { y: '25%', yoyo: true, repeat: -1, duration: 1 });
  }, []);
};
