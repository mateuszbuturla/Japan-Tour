import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styledConfig from "../../../config/styledConfig";
import StyledInterface from "../../../interfaces/styledInterface";

import bg from "../../../assets/bg.jpg";

interface Props {
  name: string;
  to: string;
  noHover?: boolean;
}

const Tile = styled(Link)`
  width: 100%;
  position: relative;
  overflow: hidden;
  width: 90%;
  margin: 10px 0px;

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

const TileHover = styled(Tile)`
  :hover img {
    transform: scale(1.2) rotateZ(5deg);
  }
`;

const Img = styled.img`
  width: 100%;
  transition: 0.7s;
`;

const Name = styled.p`
  position: absolute;
  bottom: 15%;
  left: -1px;
  transform: translateY(-50%);
  background-color: #fff;
  padding: 5px 10px;
  font-size: 18px;
  color: #000;
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.sm}) {
    font-size: 20px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.md}) {
    font-size: 22px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.lg}) {
    padding: 7px 14px;
    font-size: 24px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.xl}) {
    padding: 9px 18px;
    font-size: 30px;
  }
`;

function PlaceTile({ name, to, noHover }: Props) {
  return (
    <>
      {noHover === true ? (
        <Tile config={styledConfig} to={to}>
          <Img src={bg} alt={name} />
          <Name config={styledConfig}>{name}</Name>
        </Tile>
      ) : (
        <TileHover config={styledConfig} to={to}>
          <Img src={bg} alt={name} />
          <Name config={styledConfig}>{name}</Name>
        </TileHover>
      )}
    </>
  );
}

export default PlaceTile;
