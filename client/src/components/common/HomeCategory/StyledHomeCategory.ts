import styled from 'styled-components';

const StyledCurtain = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.bg};
  z-index: 1;
  transition: 0.5s;
`;

const StyledCategoryHeader = styled.h2`
  position: absolute;
  top: 15vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  z-index: 2;
  font-weight: normal;
  transition: 0.5s;
`;

const StyledCategory = styled.div`
  flex-basis: 25%;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.grey};
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover ${StyledCurtain} {
    left: 100%;
  }

  &:hover ${StyledCategoryHeader} {
    left: -100%;
    transform: translateX(0);
  }
`;

interface StyledCategoryImageProps {
  src: string;
  hidden: boolean;
}

const StyledCategoryImage = styled.div<StyledCategoryImageProps>`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: ${(props) => (props.hidden === true ? 0 : 1)};
`;

export {
  StyledCategory,
  StyledCategoryHeader,
  StyledCategoryImage,
  StyledCurtain,
};
