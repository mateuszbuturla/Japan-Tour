import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledJapanMap } from './StyledJapanMap';
import { StyledSubHeader } from 'components/common';
import { useSelector } from 'react-redux';
import { PageTransitionEffect } from 'animations';
import TypesRegion from 'types/TypesRegion';
import TypesCity from 'types/TypesCity';
import TypesApplicationState from 'types/TypesApplicationState';
import Api from 'utils/Api';
import ChangePath from 'utils/ChangePath';

function JapanMap() {
  const history = useHistory();
  const { pageTransitionEffectRef } = useSelector((state: TypesApplicationState) => state.refs);

  const setRegionClickEvent = (regions: TypesRegion[]) => {
    const regionsFromSvg = document.querySelectorAll('.japanMap__region');

    Array.from(regionsFromSvg).map((item) => {
      item.addEventListener('click', (e: any) => {
        const name = e.target.parentElement.parentElement.getAttribute('id').toLowerCase();
        const region = regions.find((item: TypesRegion) => item.key.toLowerCase() === name);
        if (region) {
          ChangePath(history, `/podroze/${region.key}`);
        }
      });
    });
  };

  const setSityClickEvent = (cities: TypesCity[]) => {
    const citiesFromSvg = document.querySelectorAll('.japanMap__city');

    Array.from(citiesFromSvg).map((item) => {
      item.addEventListener('click', (e: any) => {
        const name = e.target.parentElement.parentElement.getAttribute('id').toLowerCase();
        const city = cities.find((item: TypesCity) => item.name.toLowerCase() === name);
        if (city) {
          ChangePath(history, `/podroze/${city.region.toLowerCase()}/${city.key}`);
        }
      });
    });
  };

  const getRegions = async () => {
    let res = await Api.get('/regions');
    setRegionClickEvent(res.data);
  };

  const getCities = async () => {
    let res = await Api.get('/cities');
    setSityClickEvent(res.data);
  };

  useEffect(() => {
    getRegions();
    getCities();
  }, []);

  return (
    <>
      <StyledSubHeader center>Mapa Japonii</StyledSubHeader>
      <StyledJapanMap />
      <button
        onClick={async () => {
          const res = await Api.get('/auth/getUser');
          console.log(res);
        }}
      >
        dadasd
      </button>
    </>
  );
}

export default JapanMap;
