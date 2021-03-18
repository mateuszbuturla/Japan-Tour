import styled from "styled-components";

const StyledDescription = styled.div`
  width: 100%;

  p {
    line-height: 24px;
    font-size: ${(props) => props.theme.fontSize.text.small};
    margin: 0px 0px 20px;
  }

  img {
    width: 100%;
    margin: 0px 0px 20px;
  }
`;

export { StyledDescription };
