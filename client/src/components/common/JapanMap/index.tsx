import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledJapanMap } from './StyledJapanMap';
import { ItemsTile, StyledSubHeader } from 'components/common';
import { useSelector } from 'react-redux';
import TypesRegion from 'types/TypesRegion';
import TypesCity from 'types/TypesCity';
import TypesApplicationState from 'types/TypesApplicationState';
import Api from 'utils/Api';
import ChangePath from 'utils/ChangePath';

function JapanMap() {
  const history = useHistory();
  const [regions, setRegions] = useState();
  const [cities, setCities] = useState();

  const setRegionClickEvent = (regions: TypesRegion[]) => {
    const regionsFromSvg = document.querySelectorAll('.japanMap__region');

    Array.from(regionsFromSvg).map((item) => {
      item.addEventListener('click', (e: any) => {
        const name = e.target.parentElement.parentElement.getAttribute('id').toLowerCase();
        const region = regions.find((item: TypesRegion) => item.key.toLowerCase() === name);
        if (region) {
          ChangePath(history, `/podroze/regiony/${region.key}`);
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
          ChangePath(history, `/podroze/miasta/${city.key}`);
        }
      });
    });
  };

  const getRegions = async () => {
    let res = await Api.get('/regions');
    setRegionClickEvent(res.data.items);
    setRegions(res.data.items);
  };

  const getCities = async () => {
    let res = await Api.get('/cities');
    setSityClickEvent(res.data.items);
    setCities(res.data.items);
  };

  useEffect(() => {
    getRegions();
    getCities();
  }, []);

  return (
    <>
      <StyledSubHeader center>Mapa Japonii</StyledSubHeader>
      <StyledJapanMap />
      {regions && cities && (
        <>
          {regions &&
            regions.map((item: any) => (
              <>
                <StyledSubHeader>{item.name}</StyledSubHeader>
                <ItemsTile
                  data={cities
                    .filter((item2: any) => item2.region == item._id)
                    .map((item3: TypesCity) => ({
                      name: item3.name,
                      img: item3.img,
                      url: `/podroze/miasta/${item3.key}`,
                    }))}
                  showMoreButtonUrl={`/podroze/regiony/${item.key}/miasta`}
                />
              </>
            ))}
        </>
      )}
    </>
  );
}

export default JapanMap;
