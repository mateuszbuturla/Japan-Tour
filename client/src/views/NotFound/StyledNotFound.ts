import styled from 'styled-components';
import { ReactComponent as NotFoundImage } from '../../assets/notFound.svg';

const StyleContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  text-align: center;
  max-width: ${(props) => props.theme.maxWidth};
`;

const StyledNotFoundImage = styled(NotFoundImage)`
  width: 100%;
  max-width: 300px;
`;

const StyledNotFoundDescription = styled.p`
  width: 100%;
  font-size: 25px;
`;

export { StyleContainer, StyledNotFoundImage, StyledNotFoundDescription };
