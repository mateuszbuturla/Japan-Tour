import {
  StyledBanner,
  StyledBannerContainer,
  StyledText,
  StyledText2,
} from "./StyledBanner";

import { SearchBar } from "components/common";

interface Props {
  type?: "1" | "2";
  text: string;
  text2?: string;
  searchBar?: boolean;
}

export default function Banner({ type = "1", text, text2, searchBar }: Props) {
  return (
    <StyledBanner>
      <StyledBannerContainer>
        <StyledText>{text}</StyledText>
        {text2 && <StyledText2>{text2}</StyledText2>}
        {searchBar && <SearchBar />}
      </StyledBannerContainer>
    </StyledBanner>
  );
}
