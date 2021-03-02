import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyledLoadingScreen,
  StyledLoadingScreenLogo,
  StyledLoadingText,
} from './StyledLoadingScreen';
import actions from 'actions/ref/actions';

import Logo from 'assets/LOGO.png';

function LoadingScreen() {
  const dispatch = useDispatch();
  const loadingRef = useRef(null);

  useEffect(() => {
    dispatch(actions.setLoadingRef(loadingRef.current));
  }, []);

  return (
    <StyledLoadingScreen ref={loadingRef}>
      <StyledLoadingScreenLogo src={Logo} />
      <StyledLoadingText>Ładowanie...</StyledLoadingText>
    </StyledLoadingScreen>
  );
}

export default LoadingScreen;
