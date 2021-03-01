import React from 'react';
import TypesItemTile from 'types/TypesItemTile';
import {
  StyledTile,
  StyledTileDescription,
  StyledTileImage,
  StyledTilesContainer,
  StyledTilesShowMoreTile,
  StyledTileTitle,
  StyledTileType,
  StyledTitleTypeContainer,
} from './StyledItemsTile';

interface Props {
  data: TypesItemTile[];
  showMoreButtonUrl?: string;
}

function ItemsTile({ data, showMoreButtonUrl }: Props) {
  return (
    <StyledTilesContainer>
      {data.map((item: TypesItemTile) => (
        <StyledTile to={item.url}>
          <StyledTileImage src={item.img} />
          <StyledTitleTypeContainer>
            <StyledTileTitle>{item.name}</StyledTileTitle>
            {item.aboveItem && <StyledTileType>{item.aboveItem}</StyledTileType>}
          </StyledTitleTypeContainer>
          {item.shortDescription && (
            <StyledTileDescription>{item.shortDescription}</StyledTileDescription>
          )}
        </StyledTile>
      ))}
      {showMoreButtonUrl && (
        <StyledTilesShowMoreTile to={showMoreButtonUrl}>Pokaż wszystkie</StyledTilesShowMoreTile>
      )}
    </StyledTilesContainer>
  );
}

export default ItemsTile;
