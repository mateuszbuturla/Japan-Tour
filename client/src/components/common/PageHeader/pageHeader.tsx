import React from "react";
import styled from "styled-components";
import styledConfig from "../../../config/styledConfig";
import StyledInterface from "../../../interfaces/styledInterface";

interface Props {
  header: string;
  description: string;
}

const Container = styled.div`
  margin: ${(props: StyledInterface) => props.config.margin} auto;
`;

const H2 = styled.h2`
  color: ${(props: StyledInterface) => props.config.mainColor};
  text-align: center;
  font-size: 30px;
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.sm}) {
    font-size: 35px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.md}) {
    font-size: 40px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.lg}) {
    font-size: 40px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.xl}) {
    font-size: 50px;
  }
`;

const Color2 = styled.span`
  color: ${(props: StyledInterface) => props.config.themeColor};
`;

const Hr = styled.hr`
  width: 200px;
  border: none;
  height: 1px;
  background-color: ${(props: StyledInterface) => props.config.themeColor2};
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 5px 0px;
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.sm}) {
    width: 400px;
    margin: 10px 0px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.md}) {
    margin: 10px 0px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.lg}) {
    width: 500px;
    margin: 10px 0px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.xl}) {
    margin: 10px 0px;
  }
`;

const Description = styled.p`
  text-align: center;
  width: 90vw;
  max-width: 700px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${(props: StyledInterface) => props.config.fontSize.xs};
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.sm}) {
    font-size: ${(props: StyledInterface) => props.config.fontSize.sm};
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.md}) {
    font-size: ${(props: StyledInterface) => props.config.fontSize.md};
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.lg}) {
    font-size: ${(props: StyledInterface) => props.config.fontSize.lg};
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.xl}) {
    font-size: ${(props: StyledInterface) => props.config.fontSize.xl};
  }
`;

function PageHeader({ header, description }: Props) {
  const textToShow = [
    header.slice(0, Math.floor(header.length / 2)),
    header.slice(Math.floor(header.length / 2), header.length),
  ];

  return (
    <Container config={styledConfig}>
      <H2 config={styledConfig}>
        {textToShow[0]}
        <Color2 config={styledConfig}>{textToShow[1]}</Color2>
      </H2>
      <Hr config={styledConfig} />
      <Description config={styledConfig}>{description}</Description>
    </Container>
  );
}

export default PageHeader;
