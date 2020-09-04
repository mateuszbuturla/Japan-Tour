import styled from 'styled-components';

const StyledPageTransitionEffect = styled.div`
  position: fixed;
  left: 0;
  right: 100%;
  top: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.mainColor};
  z-index: 4;
`;

export { StyledPageTransitionEffect };
