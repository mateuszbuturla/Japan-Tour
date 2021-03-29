import { useRouter } from "next/router";
import {
  StyledFooter,
  StyledSectionsContainer,
  StyledSection,
  StyledSectionHeader,
  StyledSectionLink,
  StyledBottomBar,
} from "./StyledFooter";

export default function Footer() {
  const router = useRouter();

  const redirect = (url: string) => {
    if (url) {
      router.push(url);
    }
  };

  return (
    <StyledFooter>
      <StyledSectionsContainer>
        <StyledSection>
          <StyledSectionHeader>Najczęściej odwiedzane</StyledSectionHeader>
          {/* {mostVisited.city.map((city, index) => (
            <StyledSectionLink
              key={index}
              onClick={() => redirect(`/miasta/${city.key}`)}
            >
              {city.name}
            </StyledSectionLink>
          ))}
          {mostVisited.attraction.map((attraction, index) => (
            <StyledSectionLink
              key={index}
              onClick={() => redirect(`/atrakcje/${attraction.key}`)}
            >
              {attraction.name}
            </StyledSectionLink>
          ))} */}
        </StyledSection>
        <StyledSection>
          <StyledSectionHeader>Regiony</StyledSectionHeader>
          <StyledSectionLink>Hokkaido</StyledSectionLink>
          <StyledSectionLink>Tohoku</StyledSectionLink>
          <StyledSectionLink>Kanto</StyledSectionLink>
          <StyledSectionLink>Chubu</StyledSectionLink>
          <StyledSectionLink>Kansai</StyledSectionLink>
          <StyledSectionLink>Chugoku</StyledSectionLink>
          <StyledSectionLink>Shikoku</StyledSectionLink>
          <StyledSectionLink>Kyushu</StyledSectionLink>
        </StyledSection>
      </StyledSectionsContainer>
      <StyledBottomBar>
        Copyright © 2020-2021 moja-japonia.com All Rights Reserved.
      </StyledBottomBar>
    </StyledFooter>
  );
}
