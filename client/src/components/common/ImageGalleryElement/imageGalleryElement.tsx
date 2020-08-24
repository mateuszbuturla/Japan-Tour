import React from "react";
import styled from "styled-components";
import styledConfig from "../../../config/styledConfig";
import StyledInterface from "../../../interfaces/styledInterface";

interface Props {
  src: string;
  alt: string;
  onClick?: Function;
}

const Container = styled.div`
  width: 100%;
  display: inline-block;
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.sm}) {
    width: 150px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

function ImageGalleryElement({ src, alt, onClick }: Props) {
  return (
    <Container
      config={styledConfig}
      onClick={() => onClick !== undefined && onClick()}
    >
      <Img src={src} alt={alt} />
    </Container>
  );
}

export default ImageGalleryElement;
