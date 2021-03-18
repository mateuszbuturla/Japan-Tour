import styled from "styled-components";

interface Props {
  withPadding?: boolean;
  withMargin?: boolean;
}

const Container = styled.div<Props>`
  padding: ${(props) => (props.withMargin ? "15px" : "0px")}
    ${(props) => (props.withPadding ? "5vw" : "0px")};
`;

export default Container;
