import delay from 'delay';
import { TimelineMax, Expo } from 'gsap';
import store from 'store';

const LoadingOut = async () => {
  const timeLine = new TimelineMax();
  const ref = store.getState().refs.loading;

  await delay(500);

  timeLine
    .set(ref, {
      top: 0,
    })
    .to(ref, 1, {
      delay: 0,
      top: '-100vh',
      ease: Expo.easeInOut,
    });
};

const LoadingIn = () => {
  const timeLine = new TimelineMax();
  const ref = store.getState().refs.loading;

  timeLine.set(ref, {
    top: 0,
  });
};

export { LoadingIn, LoadingOut };
