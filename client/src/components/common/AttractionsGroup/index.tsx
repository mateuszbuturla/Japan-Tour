import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledSubHeader } from 'components/common';
import {
  StyledAttractionTilesContainer,
  StyledAttractionTile,
  StyledAttractionTileImage,
  StyledAttractionTileTitle,
  StyledAttractionTileDescription,
} from './StyledAttractionsGroup';
import { PageTransitionEffect } from 'animations';
import TypesAttraction from 'types/TypesAttraction';
import TypesApplicationState from 'types/TypesApplicationState';
import ChangePath from 'utils/ChangePath';

interface Props {
  header: string;
  attractions: TypesAttraction[];
}

function AttractionsGroup({ header, attractions }: Props) {
  const history = useHistory();

  const handleTileClick = (item: TypesAttraction) => {
    ChangePath(history, `/podroze/${item.region}/${item.city}/${item.url}`);
  };

  return (
    <>
      {attractions.length > 0 && (
        <>
          <StyledSubHeader>{header}</StyledSubHeader>
          <StyledAttractionTilesContainer>
            {attractions.map((item: TypesAttraction) => (
              <StyledAttractionTile onClick={() => handleTileClick(item)}>
                <StyledAttractionTileImage src={item.img} />
                <StyledAttractionTileTitle>{item.name}</StyledAttractionTileTitle>
                <StyledAttractionTileDescription>
                  {item.shortDescription}
                </StyledAttractionTileDescription>
              </StyledAttractionTile>
            ))}
          </StyledAttractionTilesContainer>
        </>
      )}
    </>
  );
}

export default AttractionsGroup;
