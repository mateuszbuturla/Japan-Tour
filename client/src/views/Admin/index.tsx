import React, { useEffect } from 'react';
import { AdminAside } from 'components/common';
import { StyledAdminContainer } from './StyledAdmin';
import Api from 'utils/Api';
import { useDispatch } from 'react-redux';
import actions from 'actions/admin/actions';

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

  useEffect(() => {
    setTitle('Admin');
    getRegions();
    getCities();
    getAttractions();
    getCultures();
    getDishes();
  }, []);

  return (
    <StyledAdminContainer>
      <AdminAside />
    </StyledAdminContainer>
  );
}

export default Admin;
