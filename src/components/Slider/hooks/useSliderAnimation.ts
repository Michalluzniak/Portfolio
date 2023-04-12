import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useSliderAnimation = (container: React.RefObject<HTMLDivElement>, navRef: any) => {
  //
  useEffect(() => {
    const navElements = navRef.current.children;
    const navParagraphs = [...navElements].filter((el) => el.tagName === 'P');

    console.log(navParagraphs);

    if (!container.current) {
      return;
    }

    navParagraphs.forEach((element) => element.addEventListener('click', slideAnimation));

    let sections: any = gsap.utils.toArray('.sections');

    let dur = 0.5;
    let offsets: any = [];
    let navSections = [];
    let oldSlide = 0;
    let activeSlide = 0;
    let iw: number = container.current.offsetWidth;

    const dotAnim = gsap.timeline({ paused: true });

    dotAnim.to(
      '.dot',
      {
        stagger: { each: 1, yoyo: true, repeat: 1 },
        scale: 2.1,
        rotation: 0.1,
        ease: 'none',
      },
      0.5
    );

    function slideAnimation(this: any, e: any) {
      oldSlide = activeSlide;

      if (gsap.isTweening(container.current)) {
        return;
      } else if (this.className === 'dot') {
        activeSlide = this.index;
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
