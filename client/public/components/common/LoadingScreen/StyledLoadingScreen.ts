import styled from 'styled-components';

const StyledLoadingScreen = styled.div`
  position: fixed;
  top: -100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLoadingScreenLogo = styled.img`
  width: 70vw;
  max-width: 400px;
`;

const StyledLoadingText = styled.p`
  font-size: 30px;
  margin-top: 30px;
`;

export { StyledLoadingScreen, StyledLoadingScreenLogo, StyledLoadingText };
