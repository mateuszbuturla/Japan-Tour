import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { TimelineMax, Expo } from 'gsap';
import { StyledPageTransitionEffect } from './StyledPageTransitionEffect';
import actions from '../../../actions/refs/actions';

interface Props {
  setRef: Function;
}

function PageTransitionEffect({ setRef }: Props) {
  const CurtainRef = useRef<any>(null);

  useEffect(() => {
    setRef(CurtainRef.current);
  }, []);

  return <StyledPageTransitionEffect ref={CurtainRef} />;
}

const mapDispatchDoProps = (dispatch: any) => ({
  setRef: (value: any) => dispatch(actions.setPageTransitionEffectRef(value)),
});

export default connect(null, mapDispatchDoProps)(PageTransitionEffect);
