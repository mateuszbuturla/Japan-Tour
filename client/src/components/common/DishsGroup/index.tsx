import React from 'react';
import { useSelector } from 'react-redux';
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
import { StyledSubHeader } from 'components/common';
import { PageTransitionEffect } from 'animations';
import TypesDish from 'types/TypesDish';
import TypesCulture from 'types/TypesCulture';
import TypesApplicationState from 'types/TypesApplicationState';

interface Props {
  header: string;
  dishs: any;
  categoryUrl: string;
}

function DishsGroup({ categoryUrl, header, dishs }: Props) {
  const history = useHistory();
  const { pageTransitionEffectRef } = useSelector(
    (state: TypesApplicationState) => state.refs,
  );

  const handleTileClick = (item: TypesDish | TypesCulture) => {
    PageTransitionEffect(pageTransitionEffectRef);
    setTimeout(
      (item: TypesDish | TypesCulture) => {
        history.push(`/${categoryUrl}/${item.type}/${item.url}`);
      },
      1000,
      item,
    );
  };

  return (
    <>
      {dishs.length > 0 && (
        <>
          <StyledSubHeader>{header}</StyledSubHeader>
          <StyledDishTilesContainer>
            {dishs.map((item: TypesDish | TypesCulture) => (
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
      )}
    </>
  );
}

export default DishsGroup;
