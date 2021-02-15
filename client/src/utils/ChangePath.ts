import mainConfig from 'config/mainConfig';
import { PageTransitionEffect } from 'animations/index';
import store from 'store';

const ChangePath = (history: any, url: string) => {
  const pageTransitionEffectRef = store.getState().refs.pageTransitionEffectRef;
  if (mainConfig.pageTransitionEffect) {
    PageTransitionEffect(pageTransitionEffectRef);
    setTimeout(() => {
      history.push(url);
    }, 1000);
  } else {
    history.push(url);
  }
};

export default ChangePath;
