import {
  StyledRegionHeader,
  StyledRegionName,
  StyledRegionMap,
} from "./StyledRegionHeader";

interface Props {
  region:
    | "Hokkaido"
    | "Tohoku"
    | "Kanto"
    | "Chubu"
    | "Kansai"
    | "Chugoku"
    | "Shikoku"
    | "Kyushu";
}

export default function RegionHeader({ region }: Props) {
  return (
    <StyledRegionHeader>
      <StyledRegionName>{region}</StyledRegionName>
      <StyledRegionMap src={`/assets/japanMap${region}.svg`} />
    </StyledRegionHeader>
  );
}
