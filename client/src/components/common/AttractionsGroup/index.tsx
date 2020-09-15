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

interface Props {
  header: string;
  attractions: TypesAttraction[];
}

function AttractionsGroup({ header, attractions }: Props) {
  const history = useHistory();
  const { pageTransitionEffectRef } = useSelector((state: any) => state.refs);

  const handleTileClick = (item: TypesAttraction) => {
    PageTransitionEffect(pageTransitionEffectRef);
    setTimeout(
      (item: TypesAttraction) => {
        history.push(`/podroze/${item.region}/${item.city}${item.url}`);
      },
      1000,
      item,
    );
  };

  return (
    <>
      {attractions.length > 0 && (
        <>
          <StyledSubHeader>{header}</StyledSubHeader>
          <StyledAttractionTilesContainer>
            {attractions.map((item: TypesAttraction) => (
              <StyledAttractionTile onClick={() => handleTileClick(item)}>
                <StyledAttractionTileImage
                  src={process.env.PUBLIC_URL + '/images/' + item.img}
                />
                <StyledAttractionTileTitle>
                  {item.name}
                </StyledAttractionTileTitle>
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
