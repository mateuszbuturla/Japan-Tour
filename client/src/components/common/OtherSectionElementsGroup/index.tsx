import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  StyledTilesContainer,
  StyledTile,
  StyledTileImage,
  StyledTitleTypeContainer,
  StyledTileTitle,
  StyledTileType,
  StyledTileDescription,
} from './StyledOtherSectionElementsGroup';
import { StyledSubHeader } from 'components/common';
import { PageTransitionEffect } from 'animations';
import TypesDish from 'types/TypesDish';
import TypesCulture from 'types/TypesCulture';
import TypesApplicationState from 'types/TypesApplicationState';

interface Props {
  header: string;
  data: any;
  categoryUrl: string;
}

function OtherSectionElementsGroup({ categoryUrl, header, data }: Props) {
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
      {data.length > 0 && (
        <>
          <StyledSubHeader>{header}</StyledSubHeader>
          <StyledTilesContainer>
            {data.map((item: TypesDish | TypesCulture) => (
              <StyledTile onClick={() => handleTileClick(item)}>
                <StyledTileImage
                  src={process.env.PUBLIC_URL + '/images/' + item.img}
                />
                <StyledTitleTypeContainer>
                  <StyledTileTitle>{item.name}</StyledTileTitle>
                  <StyledTileType>{item.type}</StyledTileType>
                </StyledTitleTypeContainer>
                <StyledTileDescription>
                  {item.shortDescription}
                </StyledTileDescription>
              </StyledTile>
            ))}
          </StyledTilesContainer>
        </>
      )}
    </>
  );
}

export default OtherSectionElementsGroup;
