import React, { useEffect } from 'react';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { AdminAside, LoadingBar } from 'components/common';
import { StyledAdminContainer, StyledAdminContentContainer } from './StyledAdmin';
import Api from 'utils/Api';
import { useDispatch } from 'react-redux';
import actions from 'actions/admin/actions';
import RoutingAdmin from 'components/routing/admin';

interface Props {
  setTitle: Function;
}

function Admin({ setTitle }: Props) {
  const dispatch = useDispatch();

  const getRegions = async () => {
    let res = await Api.get('/regions');
    dispatch(actions.setRegionsData(res.data.items));
  };

  const getCities = async () => {
    let res = await Api.get('/cities');
    dispatch(actions.setCitiesData(res.data.items));
  };

  const getAttractions = async () => {
    let res = await Api.get('/attractions');
    dispatch(actions.setAttractionsData(res.data.items));
  };

  const getCultures = async () => {
    let res = await Api.get('/cultures');
    dispatch(actions.setCulturesData(res.data.items));
  };

  const getDishes = async () => {
    let res = await Api.get('/dishes');
    dispatch(actions.setDishesData(res.data.items));
  };

  const getCategories = async () => {
    const res = await Api.get('/categories');
    dispatch(actions.setCategoriesData(res.data));
  };

  useEffect(() => {
    setTitle('Admin');
    getRegions();
    getCities();
    getAttractions();
    getCultures();
    getDishes();
    getCategories();
  }, []);

  return (
    <>
      <ReactNotification />
      <StyledAdminContainer>
        <AdminAside />
        <StyledAdminContentContainer>
          <RoutingAdmin />
        </StyledAdminContentContainer>
      </StyledAdminContainer>
      {/* <LoadingBar /> */}
    </>
  );
}

export default Admin;
