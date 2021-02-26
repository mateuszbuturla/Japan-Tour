import styled from 'styled-components';

const StyledAdminTilesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px 0px 50px;
`;

interface StyledAdminTileProps {
  color: any;
}

const StyledAdminTile = styled.div<StyledAdminTileProps>`
  border-radius: 11px;
  background: ${(props) =>
    `linear-gradient(180deg, ${props.color.color1} 0%, ${props.color.color2} 100%)`};
  padding: 20px;
  width: 280px;
  height: 150px;
  position: relative;
  cursor: pointer;
  margin-top: 30px;
`;

const StyledAdminTileDataContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledAdminTileTitle = styled.p`
  font-weight: bold;
  font-size: 32px;
  color: #fff;
`;
const StyledAdminTileIcon = styled.img`
  height: 60px;
`;
const StyledAdminTileDescription = styled.p`
  font-size: 20px;
  color: #fff;
`;
const StyledAdminTileCount = styled.p`
  font-size: 55px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
`;

export {
  StyledAdminTilesContainer,
  StyledAdminTile,
  StyledAdminTileDataContainer,
  StyledAdminTileTitle,
  StyledAdminTileIcon,
  StyledAdminTileDescription,
  StyledAdminTileCount,
};
