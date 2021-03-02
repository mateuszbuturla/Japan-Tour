import { ItemsTile, StyledSubHeader } from 'components/common';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TypesCity from 'types/TypesCity';
import TypesRegion from 'types/TypesRegion';
import Api from 'utils/Api';
import ChangePath from 'utils/ChangePath';
import { StyledJapanMap } from './StyledJapanMap';
import { LoadingOut, LoadingIn } from 'animations';

function JapanMap() {
  const history = useHistory();
  const [regions, setRegions] = useState();
  const [cities, setCities] = useState();

  if (!regions || !cities) {
    LoadingIn();
  }

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

  const getData = async () => {
    let resCities = await Api.get('/cities');
    setSityClickEvent(resCities.data.items);
    setCities(resCities.data.items);

    let resRegions = await Api.get('/regions');
    setRegionClickEvent(resRegions.data.items);
    setRegions(resRegions.data.items);
    LoadingOut();
  };

  useEffect(() => {
    getData();
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
