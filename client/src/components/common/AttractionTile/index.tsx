import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  const handleTileClick = () => {
    history.push(
      `/podroze/${attraction.region}/${attraction.city}${attraction.url}`,
    );
  };

  return (
    <StyledAttractionTile onClick={handleTileClick}>
      <StyledAttractionTileImage
        src={process.env.PUBLIC_URL + '/images/' + attraction.img}
      />
      <StyledAttractionTileTitle>{attraction.name}</StyledAttractionTileTitle>
      <StyledAttractionTileDescription>
        {attraction.shortDescription}
      </StyledAttractionTileDescription>
    </StyledAttractionTile>
  );
}

export default AttractionTile;
