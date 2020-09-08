import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledSubHeader } from '../';
import {
  StyledAttractionTilesContainer,
  StyledAttractionTile,
  StyledAttractionTileImage,
  StyledAttractionTileTitle,
  StyledAttractionTileDescription,
} from './StyledAttractionsGroup';
import { PageTransitionEffect } from '../../../animations';
import TypesAttraction from '../../../types/TypesAttraction';

interface Props {
  header: string;
  attractions: TypesAttraction[];
  refCurtain?: string;
}

function AttractionsGroup({ header, attractions, refCurtain }: Props) {
  const history = useHistory();

  const handleTileClick = (item: TypesAttraction) => {
    PageTransitionEffect(refCurtain);
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

const mapStateToProps = (state: any) => ({
  refCurtain: state.refs.pageTransitionEffectRef,
});

export default connect(mapStateToProps, null)(AttractionsGroup);
