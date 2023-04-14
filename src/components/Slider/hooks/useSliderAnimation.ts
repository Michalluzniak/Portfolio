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
    let scrollGate = true;
    const navColors = ['#020202', '#F6F4F3', '#020202', '#F6F4F3'];
    const navParagraphsColors = ['#F6F4F3', '#020202', '#F6F4F3', '#020202'];

    let iw: number = container.current.offsetWidth;

    setTimeout(() => {
      scrollGate = false;
    }, 7500);

    // set progress bar to start from 0.1 not 0
    gsap.to('.mask', { scaleX: 0.15, duration: 0 });

    // Main slide animation logic - scroll / nav
    const slideAnimation = (e: any) => {
      // if (scrollGate === true) return;

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

      // const scaleX = (activeSlide + 1) / sections.length;
      let scaleX;
      switch (activeSlide) {
        case 0:
          scaleX = 0.15;
          break;
        case 1:
          scaleX = 0.4;
          break;
        case 2:
          scaleX = 0.7;
          break;
        case 3:
          scaleX = 1;
          break;
      }

      gsap.to('.nav-paragraph', {
        color: (item) => {
          //function to fix bug where text was visible under the mask
          if (item === 0) return '#020202';
          if (activeSlide === navParagraphs.length - 1 || (activeSlide >= 2 && item !== 3)) return '#020202';
          else return navParagraphsColors[activeSlide];
        },
        duration: dur,
      });

      gsap.to('.nav-lines', {
        backgroundColor: (item) => {
          //function to fix bug where text was visible under the mask
          if (activeSlide === navParagraphs.length - 1) return '#020202';
          else return navParagraphsColors[activeSlide];
        },
        duration: dur,
      });

      gsap.to('.scroll-icon, .scroll-icon-description', {
        color: navParagraphsColors[activeSlide],
        backgroundColor: (item) => {
          console.log(item);
          return item === 0 ? navColors[activeSlide] : '';
        },
        borderRadius: 100,
        border: 'none',
        duration: dur,
      });

      gsap.to('.mask', { scaleX, duration: dur, ease: 'none' });

      gsap.to(container.current, { x: offsets[activeSlide], duration: dur, ease: 'none' });
    };

    // set sections offset to get accurate scroll length
    const sizeIt = () => {
      const examp = document.querySelector('#sections-container') as HTMLElement;

      offsets = [];
      if (container.current) iw = examp.offsetWidth;

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

// if (activeSlide > oldSlide) {
//   gsap
//     .timeline()
//     .to('.nav-bg', { fill: navColors[activeSlide], duration: 0 })
//     .to('.nav-bg', { translateX: '100%', duration: 0, fill: navColors[activeSlide] })
//     .to('.nav-bg', { translateX: '0%', duration: dur, ease: 'none' })
//     .to(navRef.current, { background: navColors[activeSlide], duration: 0 })
//     .to('.nav-bg', { translateX: '100%', duration: 0, fill: navColors[activeSlide] });
// } else {
//   gsap
//     .timeline()
//     .to('.nav-bg', { translateX: '0%', duration: 0 })
//     .to(navRef.current, { background: navColors[activeSlide], duration: 0 })
//     .to('.nav-bg', { translateX: '100%', duration: dur, fill: navColors[oldSlide], ease: 'none' })
//     .to('.nav-bg', { translateX: '0%', duration: 0, fill: navColors[activeSlide] });
// }
