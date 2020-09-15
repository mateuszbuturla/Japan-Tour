import styled from 'styled-components';

const StyledCurtain = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.8;
  z-index: 1;
  transition: 1s;
`;

const StyledCategoryHeader = styled.h2`
  position: absolute;
  top: 15vh;
  width: 100%;
  text-align: center;
  z-index: 2;
  font-weight: normal;
  opacity: 1;
  color: ${(props) => props.theme.colors.lightGrey};
  font-size: 2vw;
  transition: 1s;
`;

const StyledCategory = styled.div`
  flex-basis: 25%;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.grey};
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover ${StyledCurtain} {
    opacity: 0;
  }

  &:hover ${StyledCategoryHeader} {
    opacity: 0;
  }
`;

interface StyledCategoryImageProps {
  src: string;
}

const StyledCategoryImage = styled.div<StyledCategoryImageProps>`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export {
  StyledCategory,
  StyledCategoryHeader,
  StyledCategoryImage,
  StyledCurtain,
};
