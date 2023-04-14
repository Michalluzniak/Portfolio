import gsap, { SteppedEase } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { useEffect } from 'react';

export const useTypeWritingAnimation = () => {
  useEffect(() => {
    let cursor = document.querySelector('#hero-description-content');
    let text: any = document.querySelector('.hero-description');

    gsap.registerPlugin(TextPlugin);

    gsap.to('.hero-description', {
      text: {
        value: `Born in 1998 in Wroclaw, Poland. I love creating minimalist and clean websites. Less is more, so I try to
        include as much content as possible in the most readable way. I have almost a year of commercial experience. I
        am looking for every opportunity to improve my programming and design skills.`,
      },
      duration: 5,
      delay: 2,
      ease: 'none',
      onUpdate: () => text.appendChild(cursor),
    });
  }, []);
};
