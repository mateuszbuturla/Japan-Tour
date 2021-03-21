import {
  StyledTile,
  StyledImg,
  StyledTileTop,
  StyledTileBottom,
  StyledName,
  StyledDescription,
} from "./StyledTile";

interface Props {
  img: string;
  name: string;
  description?: string;
  category?: string;
}

export default function Tile({ img, name, description, category }: Props) {
  return (
    <StyledTile>
      <StyledTileTop img={img}>
        <StyledImg src={img} />
        <StyledName>{name}</StyledName>
      </StyledTileTop>
      {description && (
        <StyledTileBottom>
          <StyledDescription>{description}</StyledDescription>
        </StyledTileBottom>
      )}
    </StyledTile>
  );
}
