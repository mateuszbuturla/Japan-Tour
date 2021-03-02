import styled from 'styled-components';

const StyledHomeHeader = styled.header`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const StyledMainHeader = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80vw;
  text-align: center;
  color: ${(props) => props.theme.colors.lightGrey};
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 30px;
  pointer-events: none;

  @media (min-width: 1000px) {
    font-size: 4vw;
    left: 10%;
    text-align: left;
    width: auto;
    transform: translateY(-50%);
  }
`;

const StyledCategoriesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export { StyledHomeHeader, StyledMainHeader, StyledCategoriesContainer };
