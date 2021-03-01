import styled from 'styled-components';

const StyledLocationPath = styled.div`
  width: 90vw;
  max-width: 1500px;
  margin: 20px auto 50px;
`;

const StyledLocationPathElement = styled.a`
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.mainColor};
  }
`;

export { StyledLocationPath, StyledLocationPathElement };
