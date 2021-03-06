import {
  StyledBanner,
  StyledBannerContainer,
  StyledText,
  StyledText2,
  StyledBannerWithImg,
  StyledBannerWithImgContainer,
} from "./StyledBanner";

import { SearchBar } from "components/common";
import { SearchBarContainer } from "components/layout";

interface Props {
  text: string;
  text2?: string;
  searchBar?: boolean;
  img?: string;
}

export default function Banner({ text, text2, searchBar, img }: Props) {
  if (!img) {
    return (
      <StyledBanner>
        <StyledBannerContainer>
          <StyledText>{text}</StyledText>
          {text2 && <StyledText2>{text2}</StyledText2>}
          {searchBar && (
            <SearchBarContainer>
              <SearchBar />
            </SearchBarContainer>
          )}
        </StyledBannerContainer>
      </StyledBanner>
    );
  }

  return (
    <StyledBannerWithImg img={img}>
      <StyledBannerWithImgContainer>
        <StyledText>{text}</StyledText>
      </StyledBannerWithImgContainer>
    </StyledBannerWithImg>
  );
}
