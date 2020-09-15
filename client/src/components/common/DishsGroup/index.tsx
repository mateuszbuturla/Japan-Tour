import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  StyledDishTilesContainer,
  StyledDishTile,
  StyledDishTileImage,
  StyledDishTitleTypeContainer,
  StyledDishTileTitle,
  StyledDishTileType,
  StyledDishTileDescription,
} from './StyledDishGroup';
import { StyledSubHeader } from '../';
import { PageTransitionEffect } from '../../../animations';
import TypesDish from '../../../types/TypesDish';

interface Props {
  header: string;
  dishs: TypesDish[];
  refCurtain?: any;
}

function DishsGroup({ header, dishs, refCurtain }: Props) {
  const history = useHistory();

  const handleTileClick = (item: TypesDish) => {
    PageTransitionEffect(refCurtain);
    setTimeout(
      (item: TypesDish) => {
        history.push(`/kuchnia/${item.type}/${item.url}`);
      },
      1000,
      item,
    );
  };

  return (
    <>
      <StyledSubHeader>{header}</StyledSubHeader>
      <StyledDishTilesContainer>
        {dishs.map((item: TypesDish) => (
          <StyledDishTile onClick={() => handleTileClick(item)}>
            <StyledDishTileImage
              src={process.env.PUBLIC_URL + '/images/' + item.img}
            />
            <StyledDishTitleTypeContainer>
              <StyledDishTileTitle>{item.name}</StyledDishTileTitle>
              <StyledDishTileType>{item.type}</StyledDishTileType>
            </StyledDishTitleTypeContainer>
            <StyledDishTileDescription>
              {item.shortDescription}
            </StyledDishTileDescription>
          </StyledDishTile>
        ))}
      </StyledDishTilesContainer>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  refCurtain: state.refs.pageTransitionEffectRef,
});

export default connect(mapStateToProps, null)(DishsGroup);
