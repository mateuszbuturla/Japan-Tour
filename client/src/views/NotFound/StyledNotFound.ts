import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 90vw;
  margin: 100px auto;
  text-align: center;
  max-width: ${(props) => props.theme.maxWidth};
`;

const StyledCode = styled.h2`
  font-size: 220px;
`;

const StyledDescription = styled.p`
  font-size: 50px;
  margin-top: 10px;
`;

const StyledDescription2 = styled.p`
  font-size: 30px;
  margin-top: 30px;
`;

export { StyledContainer, StyledCode, StyledDescription, StyledDescription2 };
