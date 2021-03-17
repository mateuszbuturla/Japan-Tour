import React from "react";
import {
  StyledTile,
  StyledThumbnail,
  StyledName,
  StyledDescription,
} from "./StyledMostVisitedTile";

interface Props {
  img: string;
  name: string;
  description: string;
}

export default function MostVisitedTile({ img, name, description }: Props) {
  return (
    <StyledTile>
      <StyledThumbnail src={img} />
      <div>
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
      </div>
    </StyledTile>
  );
}
