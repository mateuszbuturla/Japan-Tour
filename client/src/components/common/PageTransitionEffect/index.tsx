import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TimelineMax, Expo } from 'gsap';
import { StyledPageTransitionEffect } from './StyledPageTransitionEffect';
import actions from 'actions/refs/actions';

function PageTransitionEffect() {
  const dispatch = useDispatch();
  const CurtainRef = useRef<any>(null);

  useEffect(() => {
    dispatch(actions.setPageTransitionEffectRef(CurtainRef.current));
  }, []);

  return <StyledPageTransitionEffect ref={CurtainRef} />;
}

export default PageTransitionEffect;
