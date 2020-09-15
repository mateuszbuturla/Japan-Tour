import styled from 'styled-components';

const StyledHomeHeader = styled.header`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const StyledMainHeader = styled.h1`
  position: absolute;
  left: 10%;
  top: 50%;
  color: ${(props) => props.theme.colors.lightGrey};
  transform: translateY(-50%);
  z-index: 1;
  font-size: 50px;
`;

const StyledCategoriesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export { StyledHomeHeader, StyledMainHeader, StyledCategoriesContainer };
