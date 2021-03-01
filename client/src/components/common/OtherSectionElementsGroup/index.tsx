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
import TypesDish from 'types/TypesDish';
import TypesCulture from 'types/TypesCulture';
import TypesApplicationState from 'types/TypesApplicationState';
import ChangePath from 'utils/ChangePath';

interface Props {
  header: string;
  data: any;
  categoryUrl: string;
}

function OtherSectionElementsGroup({ categoryUrl, header, data }: Props) {
  const history = useHistory();

  const handleTileClick = (item: TypesDish | TypesCulture) => {
    ChangePath(history, `/${categoryUrl}/${item.category}/${item.key}`);
  };

  return (
    <>
      {data.length > 0 && (
        <>
          <StyledSubHeader>{header}</StyledSubHeader>
          <StyledTilesContainer>
            {data.map((item: TypesDish | TypesCulture) => (
              <StyledTile onClick={() => handleTileClick(item)}>
                <StyledTileImage src={item.img} />
                <StyledTitleTypeContainer>
                  <StyledTileTitle>{item.name}</StyledTileTitle>
                  <StyledTileType>{item.category}</StyledTileType>
                </StyledTitleTypeContainer>
                <StyledTileDescription>{item.shortDescription}</StyledTileDescription>
              </StyledTile>
            ))}
          </StyledTilesContainer>
        </>
      )}
    </>
  );
}

export default OtherSectionElementsGroup;
