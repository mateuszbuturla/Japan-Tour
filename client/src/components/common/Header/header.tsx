import React from "react";
import styled from "styled-components";
import styledConfig from "../../../config/styledConfig";
import StyledInterface from "../../../interfaces/styledInterface";
import bg from "../../../assets/bg.jpg";

interface Props {
  name: string;
  small?: boolean;
}

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #fff;
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.sm}) {
    font-size: 30px;
  }
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.md}) {
    font-size: 35px;
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

const ContainerSmall = styled(Container)`
  height: 50vh;
`;

function Header({ name, small }: Props) {
  return (
    <>
      {small ? (
        <ContainerSmall config={styledConfig}>
          <h1>{name}</h1>
        </ContainerSmall>
      ) : (
        <Container config={styledConfig}>
          <h1>{name}</h1>
        </Container>
      )}
    </>
  );
}

export default Header;
