import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledJapanMap } from './StyledJapanMap';
import { StyledSubHeader } from '../';

interface Props {
  regions?: any;
  cities?: any;
}

function JapanMap({ regions, cities }: Props) {
  const history = useHistory();

  const setRegionClickEvent = () => {
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

  const setSityClickEvent = () => {
    const citiesFromSvg = document.querySelectorAll('.japanMap__city');

    Array.from(citiesFromSvg).map((item) => {
      item.addEventListener('click', (e: any) => {
        const name = e.target.parentElement.parentElement
          .getAttribute('id')
          .toLowerCase();
        console.log(name);
        const city = cities.find(
          (item: any) => item.name.toLowerCase() === name,
        );
        console.log(city);
        if (city) {
          history.push(`/podroze/${city.region.toLowerCase()}${city.url}`);
        }
      });
    });
  };

  useEffect(() => {
    setRegionClickEvent();
    setSityClickEvent();
  }, []);

  return (
    <>
      <StyledSubHeader center>Mapa Japonii</StyledSubHeader>
      <StyledJapanMap />
    </>
  );
}

const mapStateToProps = (state: any) => ({
  regions: state.regions,
  cities: state.cities,
});

export default connect(mapStateToProps, null)(JapanMap);
