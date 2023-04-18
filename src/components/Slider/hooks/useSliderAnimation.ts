import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { skillsAnimations } from '@/modules/Sections/Skills/skillsAnimation';

export const useSliderAnimation = (
  container: React.RefObject<HTMLDivElement>,
  navRef: any,
  isAnimationsLoaded: boolean
) => {
  const [clickedSection, setClickedSection] = useState<any>();
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
    const navColors = ['#020202', '#F6F4F3', '#020202', '#F6F4F3'];
    const navParagraphsColors = ['#F6F4F3', '#020202', '#F6F4F3', '#020202'];

    let iw: number = container.current.offsetWidth;

    // set progress bar to start from 0.1 not 0
    gsap.to('.mask', { scaleX: 0.15, duration: 0 });

    // Main slide animation logic - scroll / nav
    const slideAnimation = (e: any) => {
      if (isAnimationsLoaded === false) return;

      oldSlide = activeSlide;

      if (gsap.isTweening(container.current)) {
        return;
      } else if (e.target.classList?.contains('nav-paragraph')) {
        activeSlide = navParagraphs.indexOf(e.target);
        if (activeSlide > 1)
          gsap.to(sections[activeSlide + 1], {
            x: offsets[activeSlide],
            duration: 0,
          });
        gsap.to(sections[activeSlide], {
          x: offsets[activeSlide],
          duration: dur,
        });
      } else if (e.target.classList?.contains('nav-paragraph-progress')) {
        activeSlide = navParagraphsProgress.indexOf(e.target);

        if (oldSlide - navParagraphsProgress.indexOf(e.target) >= 2) {
          gsap.to(sections[oldSlide - 1], {
            x: offsets[activeSlide],
            duration: 0,
          });
        }

        if (activeSlide - oldSlide === -3) {
          gsap.to(sections[activeSlide + 1], {
            x: offsets[activeSlide],
          });
        }

        gsap.to(sections[activeSlide], {
          x: offsets[activeSlide],
          duration: 0,
        });

        gsap.to(sections[oldSlide], {
          x: offsets[oldSlide - 1],
          duration: dur,
        });

        //
      } else {
        if (e.deltaY > 0) {
          activeSlide++;

          gsap.to(sections[activeSlide], {
            x: offsets[activeSlide],
          });
        } else {
          activeSlide--;

          gsap.to(sections[activeSlide], {
            x: offsets[activeSlide],
            duration: 0,
          });

          gsap.to(sections[oldSlide], {
            x: offsets[activeSlide],
          });
        }
      }

      activeSlide = Math.max(0, activeSlide);
      activeSlide = Math.min(sections.length - 1, activeSlide);

      if (oldSlide === activeSlide) {
        return;
      }

      gsap.to('.scroll-icon-container', {
        opacity: 0,
      });

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
          if (activeSlide === 2 && oldSlide === 3 && (item === 2 || 1)) return '#020202';
          if (activeSlide === navParagraphs.length - 1 || (activeSlide > 2 && item !== 3)) return '#020202';
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
          return item === 0 ? navColors[activeSlide] : '';
        },
        borderRadius: 100,
        border: 'none',
        duration: dur,
      });

      gsap
        .timeline()
        .to('.mask', { scaleX, duration: dur, ease: 'none' })
        .to('.nav-paragraph', {
          color: (item) => {
            if (activeSlide >= 2 && item !== 3) {
              return '#020202';
            } else {
              return 'auto';
            }
          },
        });

      if (activeSlide === 1) {
        skillsAnimations();
      }
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
      sections.forEach((section, index) => {
        gsap.to(section, {
          x: offsets[activeSlide],
        });
      });
    };

    sizeIt();

    // add click event listener to navigation paragraphs
    navParagraphsProgress.forEach((element: any) => element.addEventListener('click', slideAnimation));
    navParagraphs.forEach((element: any) =>
      element.addEventListener('click', (e: any) => {
        slideAnimation(e);
        setClickedSection(e.target.innerText);
      })
    );

    window.addEventListener('wheel', slideAnimation);
    window.addEventListener('resize', sizeIt);
  }, [container, navRef, isAnimationsLoaded]);
};
