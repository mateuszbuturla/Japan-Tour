import React from 'react';
import {
  StyledAttractionTile,
  StyledAttractionTileImage,
  StyledAttractionTileTitle,
  StyledAttractionTileDescription,
} from './StyledAttractionTile';

interface Props {
  attraction: any;
}

function AttractionTile({ attraction }: Props) {
  return (
    <StyledAttractionTile>
      <StyledAttractionTileImage src={attraction.img} />
      <StyledAttractionTileTitle>{attraction.name}</StyledAttractionTileTitle>
      <StyledAttractionTileDescription>
        {attraction.shortDescription}
      </StyledAttractionTileDescription>
    </StyledAttractionTile>
  );
}

export default AttractionTile;
