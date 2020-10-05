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
import { useSelector } from 'react-redux';
import TypesApplicationState from 'types/TypesApplicationState';
import TypesRegion from 'types/TypesRegion';
import TypesCity from 'types/TypesCity';
import TypesAttraction from 'types/TypesAttraction';
import TypesCulture from 'types/TypesCulture';
import TypesDish from 'types/TypesDish';

import Logo from 'assets/LOGO.png';

function AdminAside() {
  const [showAside, setShowAside] = useState(false);
  const [regionsListShow, setRegionsListShow] = useState(false);
  const [citiesListShow, setCitiesListShow] = useState(false);
  const [attractionsListShow, setAttractionsListShow] = useState(false);
  const [culturesListShow, setCulturesListShow] = useState(false);
  const [dishesListShow, setDishesListShow] = useState(false);

  const regions = useSelector<TypesApplicationState, TypesRegion[]>((state) => state.admin.regions);
  const cities = useSelector<TypesApplicationState, TypesCity[]>((state) => state.admin.cities);
  const attractions = useSelector<TypesApplicationState, TypesAttraction[]>(
    (state) => state.admin.attractions,
  );
  const cultures = useSelector<TypesApplicationState, TypesCulture[]>(
    (state) => state.admin.cultures,
  );
  const dishes = useSelector<TypesApplicationState, TypesDish[]>((state) => state.admin.dishes);

  return (
    <>
      <StyledAside show={showAside}>
        <StyledAsideLogo src={Logo} />

        <StyledAsideLink to="/admin/add-city">Dodaj miasto</StyledAsideLink>
        <StyledAsideLink to="/admin/add-attraction">Dodaj atrakcję</StyledAsideLink>
        <StyledAsideLink to="/admin/add-category">Dodaj kategorię</StyledAsideLink>
        <StyledAsideLink to="/admin/add-culture">Dodaj kulturę</StyledAsideLink>
        <StyledAsideLink to="/admin/add-dish">Dodaj potrawę</StyledAsideLink>

        <StyledAsideListButton
          onClick={() => setRegionsListShow(!regionsListShow)}
          active={regionsListShow}
        >
          Regiony
        </StyledAsideListButton>
        <StyledAsideListContainer show={regionsListShow}>
          {regions.map((item: any) => (
            <StyledAsideListElement key={item.name}>{item.name}</StyledAsideListElement>
          ))}
        </StyledAsideListContainer>

        <StyledAsideListButton
          onClick={() => setCitiesListShow(!citiesListShow)}
          active={citiesListShow}
        >
          Miasta
        </StyledAsideListButton>
        <StyledAsideListContainer show={citiesListShow}>
          {cities.map((item: any) => (
            <StyledAsideListElement key={item.name}>{item.name}</StyledAsideListElement>
          ))}
        </StyledAsideListContainer>

        <StyledAsideListButton
          onClick={() => setAttractionsListShow(!attractionsListShow)}
          active={attractionsListShow}
        >
          Atrakcje
        </StyledAsideListButton>
        <StyledAsideListContainer show={attractionsListShow}>
          {attractions.map((item: any) => (
            <StyledAsideListElement key={item.name}>{item.name}</StyledAsideListElement>
          ))}
        </StyledAsideListContainer>

        <StyledAsideListButton
          onClick={() => setCulturesListShow(!culturesListShow)}
          active={culturesListShow}
        >
          Kultury
        </StyledAsideListButton>
        <StyledAsideListContainer show={culturesListShow}>
          {cultures.map((item: any) => (
            <StyledAsideListElement key={item.name}>{item.name}</StyledAsideListElement>
          ))}
        </StyledAsideListContainer>

        <StyledAsideListButton
          onClick={() => setDishesListShow(!dishesListShow)}
          active={dishesListShow}
        >
          Potrawy
        </StyledAsideListButton>
        <StyledAsideListContainer show={dishesListShow}>
          {dishes.map((item: any) => (
            <StyledAsideListElement key={item.name}>{item.name}</StyledAsideListElement>
          ))}
        </StyledAsideListContainer>
      </StyledAside>

      <StyledAsideBurgerButton active={showAside} onClick={() => setShowAside(!showAside)} />
    </>
  );
}

export default AdminAside;
