import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  StyledAdminTilesContainer,
  StyledAdminTile,
  StyledAdminTileDataContainer,
  StyledAdminTileTitle,
  StyledAdminTileIcon,
  StyledAdminTileDescription,
  StyledAdminTileCount,
} from './StyledAdminTile';

interface DataTypes {
  title: string;
  icon: string;
  description: string;
  count: number;
  url: string;
  color: {
    color1: string;
    color2: string;
  };
}

interface Props {
  data: DataTypes[];
}

function AdminTiles({ data }: Props) {
  const history = useHistory();

  const redirect = (url: string) => {
    history.push(url);
  };

  return (
    <StyledAdminTilesContainer>
      {data.map((item: DataTypes, index: number) => (
        <StyledAdminTile key={index} onClick={() => redirect(item.url)} color={item.color}>
          <StyledAdminTileDataContainer>
            <StyledAdminTileTitle>{item.title}</StyledAdminTileTitle>
            <StyledAdminTileIcon src={item.icon} />
            <StyledAdminTileDescription>{item.description}</StyledAdminTileDescription>
          </StyledAdminTileDataContainer>
          <StyledAdminTileCount>{item.count}</StyledAdminTileCount>
        </StyledAdminTile>
      ))}
    </StyledAdminTilesContainer>
  );
}

export default AdminTiles;
