import styled from 'styled-components';

const StyledAdminContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    padding-left: 300px;
    padding-top: 50px;
  }
`;

const StyledAdminContentContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0px 30px;
`;

export { StyledAdminContainer, StyledAdminContentContainer };
