import styled from "styled-components";

const StyledTile = styled.div`
  width: 35vw;
  flex-shrink: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 30%;
    box-shadow: ${(props) => props.theme.shadow};
  }
`;

interface TileProps {
  img: string;
}

const StyledTileTop = styled.div<TileProps>`
  background: url(${(props) => props.img});
  background-size: auto 100%;
  background-position: center center;
  padding: 50vw 10px 10px;
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      ${(props) => props.theme.colors.second} 0%,
      ${(props) => props.theme.colors.second}00 100%
    );
  }

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;

const StyledImg = styled.img`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 100%;
    opacity: 0;
  }
`;

const StyledName = styled.p`
  font-size: ${(props) => props.theme.fontSize.text.small};
  font-weight: bold;
  color: #fff;
  position: relative;
  z-index: 1;

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.text.big};
  }
`;

const StyledTileBottom = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    padding: 20px;
  }
`;

const StyledDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.text.small};
`;

export {
  StyledTile,
  StyledImg,
  StyledTileTop,
  StyledName,
  StyledTileBottom,
  StyledDescription,
};
