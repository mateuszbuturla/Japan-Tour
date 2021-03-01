import styled from 'styled-components';

const StyledFormInputWrapper = styled.div`
  width: 90%;
  @media (min-width: 800px) {
    width: 40%;
    margin-right: 5%;
  }
  @media (min-width: 1200px) {
    width: 30%;
    margin-right: 3%;
    max-width: 400px;
  }
`;

export default StyledFormInputWrapper;
