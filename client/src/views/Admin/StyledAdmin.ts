import styled from 'styled-components';

const StyledAdminContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    padding-left: 300px;
    padding-top: 50px;
  }
`;

export { StyledAdminContainer };
