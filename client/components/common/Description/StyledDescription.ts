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

  @media (min-width: 1024px) {
    width: calc(100% - 300px);
  }
  @media (min-width: 1200px) {
    width: calc(100% - 400px);
    p {
      line-height: 45px;
      font-size: ${(props) => props.theme.fontSize.text.big};
    }
  }
`;

export { StyledDescription };
