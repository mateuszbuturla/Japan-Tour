import styled from "styled-components";

interface TileProps {
  img: string;
}

const StyledTile = styled.div<TileProps>`
  width: 35vw;
  background: url(${(props) => props.img});
  background-size: auto 100%;
  background-position: center center;
  padding: 50vw 10px 10px;
  border-radius: ${(props) => props.theme.borderRadius};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

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
`;

const StyledName = styled.p`
  font-size: ${(props) => props.theme.fontSize.text.small};
  font-weight: bold;
  color: #fff;
  position: relative;
  z-index: 1;
`;

export { StyledTile, StyledName };
