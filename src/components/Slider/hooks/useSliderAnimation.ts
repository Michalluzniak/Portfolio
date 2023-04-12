import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useSliderAnimation = (container: React.RefObject<HTMLDivElement>, ...rest: any) => {
  //
  useEffect(() => {
    if (!container.current) {
      return;
    }

    let sections: any = gsap.utils.toArray('.sections');

    let dur = 0.5;
    let offsets: any = [];
    let oldSlide = 0;
    let activeSlide = 0;
    let iw: number = container.current.offsetWidth;

    function slideAnimation(e: any) {
      oldSlide = activeSlide;

      if (gsap.isTweening(container.current)) {
        return;
      } else {
        activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
      }

      activeSlide = activeSlide < 0 ? 0 : activeSlide;
      activeSlide = activeSlide > sections.length - 1 ? sections.length - 1 : activeSlide;
      if (oldSlide === activeSlide) {
        return;
      }

      gsap.to(container.current, { x: offsets[activeSlide], duration: dur });
    }

    function sizeIt() {
      offsets = [];

      if (container.current) {
        iw = container.current.offsetWidth;
      }

      gsap.set(container.current, { width: sections.length * iw });
      gsap.set(sections, { width: iw });
      for (let i = 0; i < sections.length; i++) {
        offsets.push(-sections[i].offsetLeft);
      }
      gsap.set(container.current, { x: offsets[activeSlide] });
    }
    sizeIt();

    window.addEventListener('wheel', slideAnimation);
    window.addEventListener('resize', sizeIt);
  }, []);
};
