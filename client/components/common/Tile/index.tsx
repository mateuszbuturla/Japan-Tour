import { useRouter } from "next/router";
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
  url?: string;
}

export default function Tile({ img, name, description, category, url }: Props) {
  const router = useRouter();

  const redirect = () => {
    if (url) {
      router.push(url);
    }
  };

  return (
    <StyledTile onClick={redirect}>
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
