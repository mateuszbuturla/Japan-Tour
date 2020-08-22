import React from "react";
import styled from "styled-components";
import styledConfig from "../../../config/styledConfig";
import StyledInterface from "../../../interfaces/styledInterface";

interface Props {
  children: any;
  flex?: boolean;
}

const Container = styled.div`
  width: 90vw;
  margin: ${(props: StyledInterface) => props.config.margin} auto;
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

const ContainerFlex = styled(Container)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function PageContainer({ children, flex }: Props) {
  return (
    <>
      {flex ? (
        <ContainerFlex config={styledConfig}>{children}</ContainerFlex>
      ) : (
        <Container config={styledConfig}>{children}</Container>
      )}
    </>
  );
}

export default PageContainer;
