import { useEffect } from 'react';
import { gsap } from 'gsap';
import { skillsAnimations } from '@/modules/Sections/Skills/skillsAnimation';

export const useSliderAnimation = (
  container: React.RefObject<HTMLDivElement>,
  navRef: React.RefObject<HTMLDivElement>,
  isAnimationsLoaded: boolean
) => {
  //
  useEffect(() => {
    //
    if (!container.current) {
      return;
    }

    let isFormHovered = false;
    let scrolling = false;
    let dur = 0.5;
    let offsets: number[] = [];
    let oldSlide = 0;
    let activeSlide = 0;
    const navColors = ['#020202', '#F6F4F3', '#020202', '#F6F4F3'];
    const navParagraphsColors = ['#F6F4F3', '#020202', '#F6F4F3', '#020202'];

    let sections: HTMLDivElement[] = gsap.utils.toArray('.sections');
    const navParagraphs: HTMLParagraphElement[] = gsap.utils.toArray('.nav-paragraph');
    const navParagraphsProgress: HTMLParagraphElement[] = gsap.utils.toArray('.nav-paragraph-progress');
    const contactForm: HTMLTextAreaElement | null = document.querySelector('.contact-section-textarea');

    if (contactForm !== null)
      contactForm.addEventListener('input', () => {
        if (contactForm.scrollHeight > contactForm.clientHeight) {
          isFormHovered = true;
        }
      });

    contactForm &&
      contactForm.addEventListener('mouseenter', () => {
        if (contactForm.scrollHeight > contactForm.clientHeight) {
          isFormHovered = true;
        }
      });

    contactForm &&
      contactForm.addEventListener('mouseleave', () => {
        isFormHovered = false;
      });

    let iw: number = container.current.offsetWidth;

    // set progress bar to start from 0.1 not 0
    gsap.to('.mask', { scaleX: 0.15, duration: 0 });

    // Main slide animation logic - scroll / nav
    const slideAnimation = (e: MouseEvent | WheelEvent) => {
      if (isAnimationsLoaded === false || e.target === null) return;
      const target = e.target as HTMLElement & HTMLParagraphElement;
      oldSlide = activeSlide;
      e;
      if (gsap.isTweening(container.current)) {
        return;
      } else if (target.classList?.contains('nav-paragraph')) {
        activeSlide = navParagraphs.indexOf(target);
        if (activeSlide > 1)
          gsap.to(sections[activeSlide + 1], {
            x: offsets[activeSlide],
            duration: 0,
          });
        gsap.to(sections[activeSlide], {
          x: offsets[activeSlide],
          duration: dur,
        });
      } else if (target.classList?.contains('nav-paragraph-progress')) {
        activeSlide = navParagraphsProgress.indexOf(target);

        if (oldSlide - navParagraphsProgress.indexOf(target) >= 2) {
          gsap.to(sections[oldSlide - 1], {
            x: offsets[activeSlide],
            duration: 0,
          });
        }

        if (activeSlide - oldSlide === -3) {
          gsap.to(sections[activeSlide + 1], {
            x: offsets[activeSlide],
            duration: 0,
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
        if (scrolling) return;
        if ('deltaY' in e) {
          if (e.deltaY > 0 && activeSlide !== sections.length - 1) {
            scrolling = true;
            activeSlide++;
            gsap.to(sections[activeSlide + 1], {
              x: offsets[activeSlide],
              duration: 0,
            });

            gsap.to(sections[activeSlide], {
              x: offsets[activeSlide],
              duration: dur,
            });
          } else if (e.deltaY < 0 && activeSlide !== 0) {
            scrolling = true;
            activeSlide--;
          }
          gsap.to(sections[activeSlide], {
            x: offsets[activeSlide],
            duration: dur,
          });

          gsap.to(sections[oldSlide], {
            x: offsets[activeSlide],
            duration: dur,
          });
        }

        setTimeout(() => {
          scrolling = false;
        }, 500);
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
          if (activeSlide === 2 && item === 3) return navParagraphsColors[activeSlide];
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
    };

    sizeIt();

    // add click event listener to navigation paragraphs
    navParagraphsProgress.forEach((element: HTMLParagraphElement) => element.addEventListener('click', slideAnimation));

    navParagraphs.forEach((element: HTMLParagraphElement) =>
      element.addEventListener('click', (e) => {
        slideAnimation(e);
      })
    );

    window.addEventListener('wheel', (e) => {
      if (isFormHovered) return;
      slideAnimation(e);
    });
    window.addEventListener('resize', () => {
      sections.forEach((section) => {
        gsap.to(section, {
          x: offsets[activeSlide],
          duration: 0,
        });
      });
      sizeIt();
    });
  }, [container, navRef, isAnimationsLoaded]);
};
