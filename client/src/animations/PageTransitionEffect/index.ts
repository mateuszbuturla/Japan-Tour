import { TimelineMax, Expo } from 'gsap';

const PageTransitionEffect = (ref: any) => {
  const timeLine = new TimelineMax();

  timeLine
    .set(ref, {
      left: 0,
      right: '100%',
    })
    .from(ref, 0, {
      delay: 0,
      left: 0,
      right: '100%',
      ease: Expo.easeInOut,
    })
    .to(ref, 1, {
      delay: 0,
      left: 0,
      right: 0,
      ease: Expo.easeInOut,
    })
    .to(ref, 1, {
      delay: 0,
      left: '100%',
      right: 0,
      ease: Expo.easeInOut,
    });
};

export default PageTransitionEffect;
