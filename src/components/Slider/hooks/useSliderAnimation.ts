import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useSliderAnimation = (container: React.RefObject<HTMLDivElement>, navRef: any) => {
  //
  useEffect(() => {
    //
    if (!container.current) {
      return;
    }

    let sections: HTMLDivElement[] = gsap.utils.toArray('.sections');
    const navParagraphs = gsap.utils.toArray('.nav-paragraph');
    const navParagraphsProgress = gsap.utils.toArray('.nav-paragraph-progress');

    let dur = 0.5;
    let offsets: any = [];
    let oldSlide = 0;
    let activeSlide = 0;
    let iw: number = container.current.offsetWidth;

    // set progress bar to start from 0.1 not 0
    gsap.to('.mask', { scaleX: 0.1, duration: 0 });

    // Main slide animation logic - scroll / nav
    const slideAnimation = (e: any) => {
      oldSlide = activeSlide;

      if (gsap.isTweening(container.current)) {
        return;
      } else if (e.target.classList?.contains('nav-paragraph')) {
        console.log(e.target);
        activeSlide = navParagraphs.indexOf(e.target);
      } else if (e.target.classList?.contains('nav-paragraph-progress')) {
        console.log(e.target);
        activeSlide = navParagraphsProgress.indexOf(e.target);
      } else {
        activeSlide += e.deltaY > 0 ? 1 : -1;
      }

      activeSlide = Math.max(0, activeSlide);
      activeSlide = Math.min(sections.length - 1, activeSlide);

      if (oldSlide === activeSlide) {
        return;
      }

      const scaleX = activeSlide / (sections.length - 1) + 0.08;

      gsap.to('.mask', { scaleX, duration: dur });

      gsap.to(container.current, { x: offsets[activeSlide], duration: dur });
    };

    // set sections offset to get accurate scroll length
    const sizeIt = () => {
      offsets = [];

      if (container.current) {
        iw = container.current.innerWidth;
        console.log('dupa');
      }

      gsap.set(container.current, { width: sections.length * iw });
      gsap.set(sections, { width: iw });
      for (let i = 0; i < sections.length; i++) {
        offsets.push(-sections[i].offsetLeft);
      }
      gsap.set(container.current, { x: offsets[activeSlide] });
    };

    sizeIt();

    // add click event listener to navigation paragraphs
    navParagraphsProgress.forEach((element: any) => element.addEventListener('click', slideAnimation));
    navParagraphs.forEach((element: any) => element.addEventListener('click', slideAnimation));

    window.addEventListener('wheel', slideAnimation);
    window.addEventListener('resize', sizeIt);
  }, [container, navRef]);
};
