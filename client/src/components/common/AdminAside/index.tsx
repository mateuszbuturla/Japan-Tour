import React, { useState } from 'react';
import {
  StyledAdminAside,
  StyledAdminAsideLogo,
  StyledAdminAsideLink,
  StyledAdminAsideLinkIcon,
  StyledAdminAsideLogoutButton,
} from './StyledAdminAside';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from 'actions/user/actions';
import Logo from 'assets/LOGO.png';
import Api from 'utils/Api';
import HomeIcon from 'assets/icons/home.svg';
import CategoryIcon from 'assets/icons/category.svg';
import RegionIcon from 'assets/icons/region.svg';
import CityIcon from 'assets/icons/city.svg';
import AttractionIcon from 'assets/icons/attraction.svg';
import KitchenIcon from 'assets/icons/kitchen.svg';
import CultureIcon from 'assets/icons/culture.svg';
import LogoutIcon from 'assets/icons/logout.svg';

function AdminAside() {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    Api.get('/auth/logout');
    dispatch(userActions.removeUser());
    history.push('/login');
  };

  return (
    <StyledAdminAside>
      <StyledAdminAsideLogo src={Logo} />
      <StyledAdminAsideLink to="/admin/dashboard">
        <StyledAdminAsideLinkIcon src={HomeIcon} />
        Dashboard
      </StyledAdminAsideLink>
      <StyledAdminAsideLink to="/admin/categories">
        <StyledAdminAsideLinkIcon src={CategoryIcon} />
        Kategorie
      </StyledAdminAsideLink>
      <StyledAdminAsideLink to="/admin/regions">
        <StyledAdminAsideLinkIcon src={RegionIcon} />
        Regiony
      </StyledAdminAsideLink>
      <StyledAdminAsideLink to="/admin/prefectures">
        <StyledAdminAsideLinkIcon src={RegionIcon} />
        Prefektury
      </StyledAdminAsideLink>
      <StyledAdminAsideLink to="/admin/cities">
        <StyledAdminAsideLinkIcon src={CityIcon} />
        Miasta
      </StyledAdminAsideLink>
      <StyledAdminAsideLink to="/admin/attractions">
        <StyledAdminAsideLinkIcon src={AttractionIcon} />
        Atrakcje
      </StyledAdminAsideLink>
      <StyledAdminAsideLink to="/admin/culture">
        <StyledAdminAsideLinkIcon src={CultureIcon} />
        Kultura
      </StyledAdminAsideLink>
      <StyledAdminAsideLink to="/admin/kitchen">
        <StyledAdminAsideLinkIcon src={KitchenIcon} />
        Kuchnia
      </StyledAdminAsideLink>
      <StyledAdminAsideLogoutButton onClick={logout}>
        <StyledAdminAsideLinkIcon src={LogoutIcon} />
        Wyloguj
      </StyledAdminAsideLogoutButton>
    </StyledAdminAside>
  );
}

export default AdminAside;
