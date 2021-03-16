import { StyledTile, StyledName } from "./StyledTile";

interface Props {
  img: string;
  name: string;
}

export default function Tile({ img, name }: Props) {
  return (
    <StyledTile img={img}>
      <StyledName>{name}</StyledName>
    </StyledTile>
  );
}
