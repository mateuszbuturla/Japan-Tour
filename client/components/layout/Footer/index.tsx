import {
  StyledFooter,
  StyledSectionsContainer,
  StyledSection,
  StyledSectionHeader,
  StyledSectionLink,
  StyledBottomBar,
} from "./StyledFooter";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledSectionsContainer>
        <StyledSection>
          <StyledSectionHeader>Najczęściej odwiedzane</StyledSectionHeader>
          <StyledSectionLink>Tokyo</StyledSectionLink>
          <StyledSectionLink>Tokyo</StyledSectionLink>
          <StyledSectionLink>Tokyo</StyledSectionLink>
          <StyledSectionLink>Tokyo</StyledSectionLink>
          <StyledSectionLink>Tokyo</StyledSectionLink>
          <StyledSectionLink>Tokyo</StyledSectionLink>
          <StyledSectionLink>Tokyo</StyledSectionLink>
          <StyledSectionLink>Tokyo</StyledSectionLink>
          <StyledSectionLink>Tokyo</StyledSectionLink>
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
