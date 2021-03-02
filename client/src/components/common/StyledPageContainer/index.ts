import styled from 'styled-components';

const StyledPageContainer = styled.div`
  width: 90vw;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default StyledPageContainer;
