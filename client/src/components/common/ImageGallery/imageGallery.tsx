import React from "react";
import styled from "styled-components";
import styledConfig from "../../../config/styledConfig";
import StyledInterface from "../../../interfaces/styledInterface";

import { ImageGalleryElement } from "../common";

interface Props {
  images: any;
  onPhotoClick?: Function;
}

const Container = styled.div`
  margin-top: ${(props: StyledInterface) => props.config.margin};
  text-align: center;
  cursor: pointer;
`;

function ImageGallery({ images, onPhotoClick }: Props) {
  return (
    <Container config={styledConfig}>
      {images.map((image: string, index: number) => (
        <ImageGalleryElement
          src={image}
          alt=""
          key={index}
          onClick={() => onPhotoClick !== undefined && onPhotoClick(index)}
        />
      ))}
    </Container>
  );
}

export default ImageGallery;
