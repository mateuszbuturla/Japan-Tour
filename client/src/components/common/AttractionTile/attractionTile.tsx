import React from "react";
import styled from "styled-components";
import styledConfig from "../../../config/styledConfig";
import StyledInterface from "../../../interfaces/styledInterface";
import bg from "../../../assets/bg.jpg";

interface Props {
  name: string;
  index: number;
}

const Container = styled.div`
  width: 100%;
  margin: 10px 0px;
  overflow: hidden;

  :hover img {
    transform: scale(1.2) rotateZ(5deg);
  }

  @media (min-width: ${(props: StyledInterface) =>
    props.config.breakPoints.sm}) {
    width: 40%;
    margin: 10px 10px;
  }
  @media (min-width: ${(props: StyledInterface) =>
    props.config.breakPoints.lg}) {
    width: 30%;
    margin: 20px 20px;
  }
  @media (min-width: ${(props: StyledInterface) =>
    props.config.breakPoints.xl}) {
          width: calc(30% - 10px)
    margin: 30px 30px;
  }
`;

const H3 = styled.h3`
  color: ${(props: StyledInterface) => props.config.themeColor};

  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.sm}) {
    font-size: 22px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.md}) {
    font-size: 24px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.lg}) {
    font-size: 26px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.xl}) {
    font-size: 28px;
  }
`;

const Index = styled.span`
  color: ${(props: StyledInterface) => props.config.mainColor};
`;

const ImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 10px;
`;

const Img = styled.img`
  width: 100%;
  transition: 0.7s;
`;

function AttractionTile({ name, index }: Props) {
  return (
    <>
      <Container config={styledConfig}>
        <H3 config={styledConfig}>
          <Index config={styledConfig}>{index + 1 + ". "} </Index>
          {name}
        </H3>
        <ImgContainer>
          <Img src={bg} />
        </ImgContainer>
      </Container>
    </>
  );
}

export default AttractionTile;
