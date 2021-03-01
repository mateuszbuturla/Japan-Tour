import styled from 'styled-components';

const StyledFormListContainer = styled.div`
  padding: 10px 0px;
  margin-bottom: 20px;
`;

const StyledFormListTitle = styled.p`
  font-size: 23px;
  margin-bottom: 20px;
`;

const StyledFormList = styled.ul`
  list-style: none;

  li {
    display: flex;
  }
`;

export { StyledFormListTitle, StyledFormListContainer, StyledFormList };
