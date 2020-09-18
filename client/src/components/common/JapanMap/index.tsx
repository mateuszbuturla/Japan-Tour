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
          PageTransitionEffect(pageTransitionEffectRef);
          setTimeout(() => {
            history.push(`/podroze${region.url}`);
          }, 1000);
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
          PageTransitionEffect(pageTransitionEffectRef);
          setTimeout(() => {
            history.push(`/podroze/${city.region.toLowerCase()}${city.url}`);
          }, 1000);
        }
      });
    });
  };

  const getData = async () => {
    let res = await Api.get('/getcitiesandregions');
    setSityClickEvent(res.data.cities);
    setRegionClickEvent(res.data.regions);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <StyledSubHeader center>Mapa Japonii</StyledSubHeader>
      <StyledJapanMap />
    </>
  );
}

export default JapanMap;
