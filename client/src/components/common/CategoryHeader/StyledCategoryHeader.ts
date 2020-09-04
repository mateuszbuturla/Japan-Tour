import styled from 'styled-components';

const StyledCategoryHeader = styled.div`
  position: relative;
  width: 100vw;
  height: 50vh;
`;

const StyledCategoryText = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 30px;
  color: ${(props) => props.theme.colors.subPageHeader};
`;

interface StyledCategoryImageProps {
  src: string;
  hidden: boolean;
}

const StyledCategoryImage = styled.div<StyledCategoryImageProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: ${(props) => (props.hidden === true ? 0 : 1)};
`;

export { StyledCategoryHeader, StyledCategoryText, StyledCategoryImage };
