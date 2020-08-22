import React from "react";
import styled from "styled-components";
import styledConfig from "../../../config/styledConfig";
import StyledInterface from "../../../interfaces/styledInterface";

interface Props {
  children: any;
}

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.lg}) {
    max-width: ${(props: StyledInterface) =>
      props.config.pageContainer.maxWidth.lg};
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.xl}) {
    max-width: ${(props: StyledInterface) =>
      props.config.pageContainer.maxWidth.xl};
  }
`;

function HomeContainer({ children }: Props) {
  return <Container config={styledConfig}>{children}</Container>;
}

export default HomeContainer;
