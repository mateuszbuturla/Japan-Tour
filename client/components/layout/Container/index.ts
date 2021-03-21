import styled from "styled-components";

interface Props {
  withPadding?: boolean;
  withMargin?: boolean;
}

const Container = styled.div<Props>`
  padding: ${(props) => (props.withMargin ? "15px" : "0px")}
    ${(props) => (props.withPadding ? "5vw" : "0px")};

  @media (min-width: 1024px) {
    padding: ${(props) => (props.withMargin ? "50px" : "0px")}
      ${(props) => (props.withPadding ? "5%" : "0px")};
  }
  @media (min-width: 1200px) {
    padding: ${(props) => (props.withMargin ? "70px" : "0px")}
      ${(props) => (props.withPadding ? "5%" : "0px")};
  }
`;

export default Container;
