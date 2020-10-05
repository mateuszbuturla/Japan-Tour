import React, { useState } from 'react';
import {
  StyledAside,
  StyledAsideLogo,
  StyledAsideLink,
  StyledAsideListButton,
  StyledAsideListContainer,
  StyledAsideListElement,
  StyledAsideBurgerButton,
} from './StyledAdminAside';

import Logo from 'assets/LOGO.png';

function AdminAside() {
  const [showAside, setShowAside] = useState(false);
  const [regionsListShow, setRegionsListShow] = useState(false);
  const [citiesListShow, setCitiesListShow] = useState(false);
  const [attractionsListShow, setAttractionsListShow] = useState(false);
  const [culturesListShow, setCulturesListShow] = useState(false);
  const [dishesListShow, setDishesListShow] = useState(false);

  return (
    <>
      <StyledAside show={showAside}>
        <StyledAsideLogo src={Logo} />

        <StyledAsideLink to="/admin/add-city">Dodaj miasto</StyledAsideLink>
        <StyledAsideLink to="/admin/add-attraction">Dodaj atrakcję</StyledAsideLink>
        <StyledAsideLink to="/admin/add-category">Dodaj kategorię</StyledAsideLink>
        <StyledAsideLink to="/admin/add-culture">Dodaj kulturę</StyledAsideLink>
        <StyledAsideLink to="/admin/add-dish">Dodaj potrawę</StyledAsideLink>

        <StyledAsideListButton onClick={() => setRegionsListShow(!regionsListShow)}>
          Regiony
        </StyledAsideListButton>
        <StyledAsideListContainer show={regionsListShow}>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
        </StyledAsideListContainer>

        <StyledAsideListButton onClick={() => setCitiesListShow(!citiesListShow)}>
          Miasta
        </StyledAsideListButton>
        <StyledAsideListContainer show={citiesListShow}>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
        </StyledAsideListContainer>

        <StyledAsideListButton onClick={() => setAttractionsListShow(!attractionsListShow)}>
          Atrakcje
        </StyledAsideListButton>
        <StyledAsideListContainer show={attractionsListShow}>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
        </StyledAsideListContainer>

        <StyledAsideListButton onClick={() => setCulturesListShow(!culturesListShow)}>
          Kultury
        </StyledAsideListButton>
        <StyledAsideListContainer show={culturesListShow}>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
        </StyledAsideListContainer>

        <StyledAsideListButton onClick={() => setDishesListShow(!dishesListShow)}>
          Potrawy
        </StyledAsideListButton>
        <StyledAsideListContainer show={dishesListShow}>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
          <StyledAsideListElement>asdasd </StyledAsideListElement>
        </StyledAsideListContainer>
      </StyledAside>

      <StyledAsideBurgerButton active={showAside} onClick={() => setShowAside(!showAside)} />
    </>
  );
}

export default AdminAside;
