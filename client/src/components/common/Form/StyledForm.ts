import styled from 'styled-components';

const StyledForm = styled.form`
  width: 90%;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    width: 250px;
  }
`;

export { StyledForm };
