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
import { useHistory } from 'react-router-dom';
import TypesApplicationState from 'types/TypesApplicationState';
import TypesRegion from 'types/TypesRegion';
import TypesCity from 'types/TypesCity';
import TypesAttraction from 'types/TypesAttraction';
import TypesCulture from 'types/TypesCulture';
import TypesDish from 'types/TypesDish';
import { useDispatch } from 'react-redux';
import userActions from 'actions/user/actions';
import Logo from 'assets/LOGO.png';
import Api from 'utils/Api';

function AdminAside() {
  const history = useHistory();
  const dispatch = useDispatch();

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

  const redirect = (to: string) => {
    history.push(`/admin/${to}`);
  };

  const logout = () => {
    Api.get('/auth/logout');
    dispatch(userActions.removeUser());
    history.push('/login');
  };

  return (
    <>
      <StyledAside show={showAside}>
        <StyledAsideLogo src={Logo} onClick={() => history.push('/')} />

        <StyledAsideLink to="/admin/add-region">Dodaj region</StyledAsideLink>
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
          {regions.map((item) => (
            <StyledAsideListElement key={item.name} onClick={() => redirect(`regions/${item.key}`)}>
              {item.name}
            </StyledAsideListElement>
          ))}
        </StyledAsideListContainer>

        <StyledAsideListButton
          onClick={() => setCitiesListShow(!citiesListShow)}
          active={citiesListShow}
        >
          Miasta
        </StyledAsideListButton>
        <StyledAsideListContainer show={citiesListShow}>
          {cities.map((item) => (
            <StyledAsideListElement key={item.name} onClick={() => redirect(`cities/${item.key}`)}>
              {item.name}
            </StyledAsideListElement>
          ))}
        </StyledAsideListContainer>

        <StyledAsideListButton
          onClick={() => setAttractionsListShow(!attractionsListShow)}
          active={attractionsListShow}
        >
          Atrakcje
        </StyledAsideListButton>
        <StyledAsideListContainer show={attractionsListShow}>
          {attractions.map((item) => (
            <StyledAsideListElement
              key={item.name}
              onClick={() => redirect(`attractions/${item.key}`)}
            >
              {item.name}
            </StyledAsideListElement>
          ))}
        </StyledAsideListContainer>

        <StyledAsideListButton
          onClick={() => setCulturesListShow(!culturesListShow)}
          active={culturesListShow}
        >
          Kultury
        </StyledAsideListButton>
        <StyledAsideListContainer show={culturesListShow}>
          {cultures.map((item) => (
            <StyledAsideListElement
              key={item.name}
              onClick={() => redirect(`cultures/${item.key}`)}
            >
              {item.name}
            </StyledAsideListElement>
          ))}
        </StyledAsideListContainer>

        <StyledAsideListButton
          onClick={() => setDishesListShow(!dishesListShow)}
          active={dishesListShow}
        >
          Potrawy
        </StyledAsideListButton>
        <StyledAsideListContainer show={dishesListShow}>
          {dishes.map((item) => (
            <StyledAsideListElement key={item.name} onClick={() => redirect(`dishes/${item.key}`)}>
              {item.name}
            </StyledAsideListElement>
          ))}
        </StyledAsideListContainer>
        <button onClick={logout}>Wyloguj</button>
      </StyledAside>

      <StyledAsideBurgerButton active={showAside} onClick={() => setShowAside(!showAside)} />
    </>
  );
}

export default AdminAside;
