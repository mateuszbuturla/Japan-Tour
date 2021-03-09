import React, { useEffect } from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { AdminAside } from 'components/common';
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
    dispatch(actions.setRegionsData(res.data));
  };

  const getCities = async () => {
    let res = await Api.get('/cities');
    dispatch(actions.setCitiesData(res.data));
  };

  const getAttractions = async () => {
    let res = await Api.get('/attractions');
    dispatch(actions.setAttractionsData(res.data));
  };

  const getCultures = async () => {
    let res = await Api.get('/cultures');
    dispatch(actions.setCulturesData(res.data));
  };

  const getDishes = async () => {
    let res = await Api.get('/dishes');
    dispatch(actions.setDishesData(res.data));
  };

  const getCategories = async () => {
    const res = await Api.get('/categories');
    dispatch(actions.setCategoriesData(res.data));
  };

  const getPrefectures = async () => {
    const res = await Api.get('/prefectures');
    dispatch(actions.setPrefecturesData(res.data));
  };

  useEffect(() => {
    setTitle('Admin');
    getRegions();
    getCities();
    getAttractions();
    getCultures();
    getDishes();
    getCategories();
    getPrefectures();
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
    </>
  );
}

export default Admin;
