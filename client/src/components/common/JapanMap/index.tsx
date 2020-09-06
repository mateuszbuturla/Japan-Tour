import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledJapanMap } from './StyledJapanMap';
import { StyledSubHeader } from '../';
import axios from 'axios';

function JapanMap() {
  const history = useHistory();

  const setRegionClickEvent = (regions: any) => {
    const regionsFromSvg = document.querySelectorAll('.japanMap__region');

    Array.from(regionsFromSvg).map((item) => {
      item.addEventListener('click', (e: any) => {
        const name = e.target.parentElement.parentElement
          .getAttribute('id')
          .toLowerCase();
        const region = regions.find(
          (item: any) => item.key.toLowerCase() === name,
        );
        if (region) {
          history.push(`/podroze${region.url}`);
        }
      });
    });
  };

  const setSityClickEvent = (cities: any) => {
    const citiesFromSvg = document.querySelectorAll('.japanMap__city');

    Array.from(citiesFromSvg).map((item) => {
      item.addEventListener('click', (e: any) => {
        const name = e.target.parentElement.parentElement
          .getAttribute('id')
          .toLowerCase();
        const city = cities.find(
          (item: any) => item.name.toLowerCase() === name,
        );
        if (city) {
          history.push(`/podroze/${city.region.toLowerCase()}${city.url}`);
        }
      });
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/getcitiesandregions`)
      .then(function (result) {
        setSityClickEvent(result.data.cities);
        setRegionClickEvent(result.data.regions);
      });
  }, []);

  return (
    <>
      <StyledSubHeader center>Mapa Japonii</StyledSubHeader>
      <StyledJapanMap />
    </>
  );
}

export default JapanMap;
