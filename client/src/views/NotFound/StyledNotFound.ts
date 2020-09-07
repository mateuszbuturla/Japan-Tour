import styled from 'styled-components';
import { ReactComponent as NotFoundImage } from '../../assets/notFound.svg';

const StyledNotFoundImage = styled(NotFoundImage)`
  width: 100%;
  max-width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledNotFoundDescription = styled.p`
  text-align: center;
  font-size: 25px;
`;

export { StyledNotFoundImage, StyledNotFoundDescription };
