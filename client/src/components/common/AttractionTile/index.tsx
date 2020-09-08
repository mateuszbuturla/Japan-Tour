import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  StyledAttractionTile,
  StyledAttractionTileImage,
  StyledAttractionTileTitle,
  StyledAttractionTileDescription,
} from './StyledAttractionTile';
import { PageTransitionEffect } from '../../../animations';

interface Props {
  attraction: any;
  refCurtain?: any;
}

function AttractionTile({ attraction, refCurtain }: Props) {
  const history = useHistory();

  const handleTileClick = () => {
    PageTransitionEffect(refCurtain);
    setTimeout(() => {
      history.push(
        `/podroze/${attraction.region}/${attraction.city}${attraction.url}`,
      );
    }, 1000);
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

const mapStateToProps = (state: any) => ({
  refCurtain: state.refs.pageTransitionEffectRef,
});

export default connect(mapStateToProps, null)(AttractionTile);
