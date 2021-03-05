import React, { useState } from 'react';
import {
  StyledNav,
  StyledNavLinkList,
  StyledNavLink,
  StyledNavLinkLabel,
  StyledNavDropDown,
  StyledNavDropDownWrapper,
  StyledNavDropDownHeader,
  StyledNavDropDownItem,
  StyledNavSubDropDown,
  StyledNavBlancSpace,
  StyledNavSubDropDownHeader,
  StyledNavSubDropDownItem,
} from './StyledNav';

function NewNav() {
  const [dropDownIsHover, setDropDownIsHover] = useState<boolean>(false);

  return (
    <>
      <StyledNav dropDownIsHover={dropDownIsHover}>
        <StyledNavLinkList>
          <StyledNavLink>
            <StyledNavLinkLabel>sdasdsad</StyledNavLinkLabel>
          </StyledNavLink>
          <StyledNavLink
            onMouseEnter={() => setDropDownIsHover(true)}
            onMouseLeave={() => setDropDownIsHover(false)}
          >
            <StyledNavLinkLabel>Podróże</StyledNavLinkLabel>
            <StyledNavDropDown>
              <StyledNavDropDownWrapper>
                <StyledNavDropDownHeader>
                  <a>Podróże</a>
                </StyledNavDropDownHeader>
                <StyledNavDropDownItem>
                  <a>Regiony</a>
                  <StyledNavSubDropDown>
                    <StyledNavSubDropDownItem>Hokkaidō</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Tōhoku</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Kantō</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Chūbu</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Kansai</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Chūgoku</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Shikoku</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Kyūshū</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Okinawa</StyledNavSubDropDownItem>
                  </StyledNavSubDropDown>
                </StyledNavDropDownItem>
                <StyledNavDropDownItem>
                  <a>Prefektury</a>
                  <StyledNavSubDropDown>
                    <StyledNavSubDropDownHeader>Hokkaidō</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem>Hokkaidō</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Tōhoku</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem>Aomori</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Iwate</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Miyagi</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Akita</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Yamagata</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Fukushima</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Kantō</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem>Ibaraki</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Tochigi</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Gunma</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Saitama</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Chibi</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Tokyo</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Kanagawa</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Chūbu</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem>Niigata</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Toyama</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Ishikawa</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Fukui</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Yamanashi</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Nagano</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Gifu</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Shizuoka</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Aichi</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Kansai</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem>Mie</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Shiga</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Ōsaka</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Hyogo</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Nara</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Wakayama</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Chūgoku</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem>Tottori</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Shimane</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Okayama</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Hiroshima</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Yamaguchi</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Shikoku</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem>Tokushima</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Kagawa</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Ehima</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Kochi</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Kyūshū</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem>Fukuoka</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Saga</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Nagasaki</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Kumamoto</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Ōita</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Miyazaki</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem>Kagoshima</StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Okinawa</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem>Okinawa</StyledNavSubDropDownItem>
                  </StyledNavSubDropDown>
                </StyledNavDropDownItem>
                <StyledNavDropDownItem>
                  <a>Atrakcje</a>
                  <StyledNavSubDropDown></StyledNavSubDropDown>
                  <StyledNavBlancSpace height="280px" />
                </StyledNavDropDownItem>
              </StyledNavDropDownWrapper>
            </StyledNavDropDown>
          </StyledNavLink>
          <StyledNavLink
            onMouseEnter={() => setDropDownIsHover(true)}
            onMouseLeave={() => setDropDownIsHover(false)}
          >
            <StyledNavLinkLabel>Kultura</StyledNavLinkLabel>
            <StyledNavDropDown>
              <StyledNavDropDownWrapper>
                <StyledNavDropDownHeader>
                  <a>Kultura</a>
                </StyledNavDropDownHeader>
                <StyledNavDropDownItem>
                  <a>1</a>
                  <StyledNavSubDropDown></StyledNavSubDropDown>
                </StyledNavDropDownItem>
              </StyledNavDropDownWrapper>
            </StyledNavDropDown>
          </StyledNavLink>
          <StyledNavLink
            onMouseEnter={() => setDropDownIsHover(true)}
            onMouseLeave={() => setDropDownIsHover(false)}
          >
            <StyledNavLinkLabel>Kultura</StyledNavLinkLabel>
            <StyledNavDropDown>
              <StyledNavDropDownWrapper>
                <StyledNavDropDownHeader>
                  <a>Kuchnia</a>
                </StyledNavDropDownHeader>
                <StyledNavDropDownItem>
                  <a>1</a>
                  <StyledNavSubDropDown></StyledNavSubDropDown>
                </StyledNavDropDownItem>
              </StyledNavDropDownWrapper>
            </StyledNavDropDown>
          </StyledNavLink>
          <StyledNavLink>
            <StyledNavLinkLabel>Kontakt</StyledNavLinkLabel>
          </StyledNavLink>
        </StyledNavLinkList>
      </StyledNav>
    </>
  );
}

export default NewNav;
